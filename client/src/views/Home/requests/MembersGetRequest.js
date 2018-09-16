import {
    urlForMembers,
    createParamsForGet,
} from '#rest';

import Request from '#utils/Request';

export default class MembersGetRequest extends Request {
    schemaName = 'array.member'

    handlePreLoad = () => {
        this.parent.setState({ memberLoading: true });
    }

    handlePostLoad = () => {
        this.parent.setState({ memberLoading: false });
    }

    handleSuccess = (response) => {
        this.parent.setMembers(response);
    }

    // TODO: Handle Fatal and Failure

    init = () => {
        this.createDefault({
            url: urlForMembers,
            params: createParamsForGet,
        });
        return this;
    }
}
