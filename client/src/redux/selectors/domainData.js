const emptyList = [];


export const membersSelector = ({ domainData }) => (
    domainData.members || emptyList
);

export const clientsSelector = ({ domainData }) => (
    domainData.clients || emptyList
);

export const technologiesSelector = ({ domainData }) => (
    domainData.technologies || emptyList
);
