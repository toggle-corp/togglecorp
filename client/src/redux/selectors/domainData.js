const emptyList = [];


export const membersSelector = ({ domainData }) => (
    domainData.members || emptyList
);

export const clientsSelector = ({ domainData }) => (
    domainData.clients || emptyList
);

export const technologySectionsSelector = ({ domainData }) => (
    domainData.technologySections || emptyList
);
