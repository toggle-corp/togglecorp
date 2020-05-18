import { compose } from 'redux';
import {
    createRequestCoordinator,
    createRequestClient,
    methods,
} from '@togglecorp/react-rest-request';

import { sanitizeResponse } from '#utils/common';
import { wsEndpoint } from '#config/rest';
import schema from '#schema';

export { methods, RequestHandler } from '@togglecorp/react-rest-request';

const getFormData = (jsonData) => {
    const formData = new FormData();
    Object.keys(jsonData || {}).forEach(
        (key) => {
            const value = jsonData[key] || {};
            if (value.prop && value.prop.constructor === Array) {
                value.forEach(v => formData.append(key, v));
            } else {
                formData.append(key, value);
            }
        },
    );
    return formData;
};

export function getVersionedUrl(endpoint, url) {
    const oldVersionString = '/v1';
    const versionString = '/v2';
    if (!url.startsWith(versionString)) {
        return `${endpoint}${url}`;
    }
    const startIndex = 0;
    const endIndex = endpoint.search(oldVersionString);
    const newEndpoint = endpoint.slice(startIndex, endIndex);
    return `${newEndpoint}${url}`;
}

const coordinatorOptions = {
    transformParams: (data) => {
        const {
            body,
            method,
            extras = {},
        } = data;

        const newBody = extras.hasFile
            ? getFormData(body)
            : JSON.stringify(body);

        const newHeaders = extras.hasFile
            ? {
                Accept: 'application/json',
            }
            : {
                Accept: 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
            };

        const params = {
            method: method || methods.GET,
            body: newBody,
            headers: newHeaders,
        };

        // NOTE: This is a hack to bypass auth for S3 requests
        // Need to fix this through use of new react-rest-request@2
        // FIXME: react-rest-request@2 has been used
        // need to fix this using extras

        return params;
    },

    transformProps: (props) => {
        const {
            myToken, // eslint-disable-line no-unused-vars
            ...otherProps
        } = props;
        return otherProps;
    },

    transformUrl: (url) => {
        if (/^https?:\/\//i.test(url)) {
            return url;
        }
        return getVersionedUrl(wsEndpoint, url);
    },

    transformResponse: (body, request) => {
        const {
            url,
            method,
            extras = {},
        } = request;

        // TODO: add null sanitization here

        if (extras.schemaName === undefined) {
            // NOTE: usually there is no response body for DELETE
            if (method !== methods.DELETE) {
                console.error(`Schema is not defined for ${url} ${method}`);
            }
        } else {
            try {
                schema.validate(body, extras.schemaName);
            } catch (e) {
                console.error(url, method, body, e.message);
                throw (e);
            }
        }
        return sanitizeResponse(body);
    },

    transformErrors: response => ({ response }),
};

export const RequestCoordinator = compose(
    createRequestCoordinator(coordinatorOptions),
);

export const RequestClient = createRequestClient;

export const getResponse = (requests, key, defaultValue = {}) => {
    const { response = defaultValue } = (requests || {})[key];
    return response;
};

export const getResults = (requests, key, defaultValue = []) => {
    const {
        response: {
            results = defaultValue,
        } = {},
    } = (requests || {})[key];

    return results;
};

export const getPending = (requests, key) => {
    const {
        pending,
    } = (requests || {})[key];

    return pending;
};

export const isAnyRequestPending = (requests) => {
    if (!requests) {
        return undefined;
    }

    const requestKeys = Object.keys(requests);
    const pending = requestKeys.some(
        requestKey => requests[requestKey].pending,
    );

    return pending;
};
