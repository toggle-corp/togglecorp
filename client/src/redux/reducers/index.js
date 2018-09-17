import { persistCombineReducers } from 'redux-persist';
import storeConfig from '#config/store';

import domainDataReducer from './domainData';

const reducers = {
    dummy: (s = {}) => s,

    domainData: domainDataReducer,
};

const reducer = persistCombineReducers(storeConfig, reducers);
export default reducer;
