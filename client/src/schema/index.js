import Dict, { basicTypes } from '@togglecorp/ravl';

const basicTypeSchemas = basicTypes.map(entry => ({ name: entry.doc.name, schema: entry }));

const userDefinedSchemas = [];

//  Service Scheme
{
    const name = 'service';
    const schema = {
        doc: {
            name: 'Service',
        },
        fields: {
            id: { type: 'uint', required: true },
            title: { type: 'string', required: true },
            description: { type: 'string' },
            image: { type: 'string' },
        },
    };
    userDefinedSchemas.push({ name, schema });
}

// Member Scheme
{
    const name = 'memberUrlType';
    const schema = {
        doc: {
            name: 'Member Url Type',
        },
        fields: {
            id: { type: 'uint', required: true },
            name: { type: 'string', required: true },
            icon: { type: 'string' },
        },
    };
    userDefinedSchemas.push({ name, schema });
}
{
    const name = 'memberUrl';
    const schema = {
        doc: {
            name: 'Member Url',
        },
        fields: {
            id: { type: 'uint', required: true },
            type: { type: 'memberUrlType', required: true },
            url: { type: 'string', required: true },
            member: { type: 'uint', required: true },
        },
    };
    userDefinedSchemas.push({ name, schema });
}
{
    const name = 'member';
    const schema = {
        doc: {
            name: 'Togglecorp Member',
        },
        fields: {
            id: { type: 'uint', required: true },
            name: { type: 'string', required: true },
            image: { type: 'string', required: true },
            designation: { type: 'string', required: true },
            membersUrls: { type: 'array.memberUrl', required: true },
        },
    };
    userDefinedSchemas.push({ name, schema });
}

// Client Scheme
{
    const name = 'client';
    const schema = {
        doc: {
            name: 'Togglecorp Client',
        },
        fields: {
            id: { type: 'uint', required: true },
            name: { type: 'string', required: true },
            description: { type: 'string' },
            url: { type: 'string', required: true },
            image: { type: 'string', required: true },
        },
    };
    userDefinedSchemas.push({ name, schema });
}

// Technology Scheme
{
    const name = 'technologySection';
    const schema = {
        doc: {
            name: 'Togglecorp technology section',
        },
        fields: {
            id: { type: 'uint', required: true },
            name: { type: 'string', required: true },
            technologies: { type: 'array.technology', required: true },
        },
    };
    userDefinedSchemas.push({ name, schema });
}
{
    const name = 'technology';
    const schema = {
        doc: {
            name: 'Togglecorp technology used',
        },
        fields: {
            id: { type: 'uint', required: true },
            name: { type: 'string', required: true },
            url: { type: 'string', required: true },
            image: { type: 'string', required: true },
        },
    };
    userDefinedSchemas.push({ name, schema });
}

const dict = new Dict();

[
    ...basicTypeSchemas,
    ...userDefinedSchemas,
].forEach(({ name, schema }) => dict.put(name, schema));

export default dict;
