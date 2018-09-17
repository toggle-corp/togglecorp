import {
    urlForClients,
    createParamsForGet,
} from '#rest';

import Request from '#utils/Request';

export default class ClientsGetRequest extends Request {
    schemaName = 'array.client'

    handlePreLoad = () => {
        this.parent.setState({ clientLoading: true });
    }

    handlePostLoad = () => {
        this.parent.setState({ clientLoading: false });
    }

    handleSuccess = (response) => {
        this.parent.setClients(response);
    }

    // TODO: Handle Fatal and Failure

    init = () => {
        this.createDefault({
            url: urlForClients,
            params: createParamsForGet,
        });
        return this;
    }
}
