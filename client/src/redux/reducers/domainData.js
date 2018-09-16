import update from '#rsu/immutable-update';
import createReducerWithMap from '#utils/createReducerWithMap';
import initialDomainDataState from '../initial-state/domainData';

// TYPE

export const SET_MEMBERS = 'domainData/SET_MEMBERS';
export const SET_CLIENTS = 'domainData/SET_CLIENTS';
export const SET_TECHNOLOGIES = 'domainData/SET_TECHNOLOGIES';

// ACTION-CREATOR

export const setMembersAction = members => ({
    type: SET_MEMBERS,
    members,
});

export const setClientsAction = clients => ({
    type: SET_CLIENTS,
    clients,
});

export const setTechnologiesAction = technologies => ({
    type: SET_TECHNOLOGIES,
    technologies,
});

// REDUCER

const setMembers = (state, { members }) => {
    const settings = {
        members: { $auto: {
            $set: members,
        } },
    };
    return update(state, settings);
};

const setClients = (state, { clientws }) => {
    const settings = {
        clientws: { $auto: {
            $set: clientws,
        } },
    };
    return update(state, settings);
};

const setTechnologies = (state, { technologies }) => {
    const settings = {
        technologies: { $auto: {
            $set: technologies,
        } },
    };
    return update(state, settings);
};


const reducers = {
    [SET_MEMBERS]: setMembers,
    [SET_CLIENTS]: setClients,
    [SET_TECHNOLOGIES]: setTechnologies,
};

const reducer = createReducerWithMap(reducers, initialDomainDataState);

export default reducer;
