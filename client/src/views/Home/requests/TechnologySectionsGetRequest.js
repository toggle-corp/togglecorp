import {
    urlForTechnologySection,
    createParamsForGet,
} from '#rest';

import Request from '#utils/Request';

export default class TechnologySectionsGetRequest extends Request {
    schemaName = 'array.technologySection'

    handlePreLoad = () => {
        this.parent.setState({ technologySectionLoading: true });
    }

    handlePostLoad = () => {
        this.parent.setState({ technologySectionLoading: false });
    }

    handleSuccess = (response) => {
        this.parent.setTechnologySections(response);
    }

    // TODO: Handle Fatal and Failure

    init = () => {
        this.createDefault({
            url: urlForTechnologySection,
            params: createParamsForGet,
        });
        return this;
    }
}
