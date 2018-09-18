import update from '#rsu/immutable-update';
import createReducerWithMap from '#utils/createReducerWithMap';
import initialDomainDataState from '../initial-state/domainData';

// TYPE

export const SET_MEMBERS = 'domainData/SET_MEMBERS';
export const SET_CLIENTS = 'domainData/SET_CLIENTS';
export const SET_SERVICES = 'domainData/SET_SERVICES';
export const SET_TECHNOLOGY_SECTIONS = 'domainData/SET_TECHNOLOGY_SECTIONS';


// ACTION-CREATOR

export const setMembersAction = members => ({
    type: SET_MEMBERS,
    members,
});

export const setClientsAction = clients => ({
    type: SET_CLIENTS,
    clients,
});

export const setServicesAction = services => ({
    type: SET_SERVICES,
    services,
});

export const setTechnologySectionsAction = technologySections => ({
    type: SET_TECHNOLOGY_SECTIONS,
    technologySections,
});

// REDUCER

const setMembers = (state, { members }) => {
    const settings = {
        members: { $autoArray: {
            $set: members,
        } },
    };
    return update(state, settings);
};

const setClients = (state, { clients }) => {
    const settings = {
        clients: { $autoArray: {
            $set: clients,
        } },
    };
    return update(state, settings);
};

const setServices = (state, { services }) => {
    const settings = {
        services: { $autoArray: {
            $set: services,
        } },
    };
    return update(state, settings);
};

const setTechnologySections = (state, { technologySections }) => {
    const settings = {
        technologySections: { $autoArray: {
            $set: technologySections,
        } },
    };
    return update(state, settings);
};

const reducers = {
    [SET_MEMBERS]: setMembers,
    [SET_CLIENTS]: setClients,
    [SET_SERVICES]: setServices,
    [SET_TECHNOLOGY_SECTIONS]: setTechnologySections,
};

const reducer = createReducerWithMap(reducers, initialDomainDataState);

export default reducer;
