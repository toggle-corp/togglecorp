import { RestRequest } from '#rsu/rest';

export const GET = 'GET';

// ENDPOINTS

export const wsEndpoint = !process.env.REACT_APP_API_END
    ? 'http://localhost:8005/api/v1'
    : `${process.env.REACT_APP_API_END}/api/v1`;


// COMMON HEADERS

export const commonHeaderForGet = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};

// COMMON PARAMS

export const createParamsForGet = () => ({
    method: GET,
    headers: commonHeaderForGet,
});

export const p = RestRequest.prepareUrlParams;
