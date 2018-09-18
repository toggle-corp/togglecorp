import {
    urlForServices,
    createParamsForGet,
} from '#rest';

import Request from '#utils/Request';

export default class ServicesGetRequest extends Request {
    schemaName = 'array.service'

    handlePreLoad = () => {
        this.parent.setState({ serviceLoading: true });
    }

    handlePostLoad = () => {
        this.parent.setState({ serviceLoading: false });
    }

    handleSuccess = (response) => {
        this.parent.setServices(response);
    }

    // TODO: Handle Fatal and Failure

    init = () => {
        this.createDefault({
            url: urlForServices,
            params: createParamsForGet,
        });
        return this;
    }
}
