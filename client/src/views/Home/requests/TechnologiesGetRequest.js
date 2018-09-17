import {
    urlForTechnologies,
    createParamsForGet,
} from '#rest';

import Request from '#utils/Request';

export default class TechnologiesGetRequest extends Request {
    schemaName = 'array.technology'

    handlePreLoad = () => {
        this.parent.setState({ technologyLoading: true });
    }

    handlePostLoad = () => {
        this.parent.setState({ technologyLoading: false });
    }

    handleSuccess = (response) => {
        this.parent.setTechnologies(response);
    }

    // TODO: Handle Fatal and Failure

    init = () => {
        this.createDefault({
            url: urlForTechnologies,
            params: createParamsForGet,
        });
        return this;
    }
}
