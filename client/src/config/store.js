import localforage from 'localforage';

const storeConfig = {
    blacklist: [],
    key: 'togglecorp',
    version: 1,
    storage: localforage,
};

export const reducersToSync = [
    'domainData',
];

export default storeConfig;
