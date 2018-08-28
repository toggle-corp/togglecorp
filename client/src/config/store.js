import localforage from 'localforage';

const storeConfig = {
    blacklist: [],
    key: 'togglecorp',
    version: 1,
    storage: localforage,
};


export default storeConfig;
