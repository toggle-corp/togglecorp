import React from 'react';
import PropTypes from 'prop-types';

import bek from '#resources/img/bek.jpg';
import okular from '#resources/img/okular.png';
import dfs from '#resources/img/dfs.png';
import arc from '#resources/img/arc.png';
import ifrc from '#resources/img/ifrc.png';
import jips from '#resources/img/jips.png';
import bc from '#resources/img/bc.png';
import idmc from '#resources/img/idmc.png';
import pin from '#resources/img/pin.png';
import unhcr from '#resources/img/unhcr.png';
import smtm from '#resources/img/smtm.png';
import wvi from '#resources/img/wvi.png';
import cyclical from '#resources/img/cyclical.png';

import styles from './styles.scss';

const clients = [
    {
        id: 1,
        title: 'bek',
        url: 'https://www.gov.uk/world/organisations/british-embassy-kathmandu',
        image: bek,
    },
    {
        id: 2,
        title: 'Okular Analytics',
        url: 'https://www.okular-analytics.com/',
        image: okular,
    },
    {
        id: 3,
        title: 'Cyclical Insights',
        url: 'https://cyclical.io/',
        image: cyclical,
    },
    {
        id: 4,
        title: 'World Vision Nepal',
        url: 'https://www.wvi.org/nepal',
        image: wvi,
    },
    {
        id: 5,
        title: 'UNHCR',
        url: 'http://www.unhcr.org/',
        image: unhcr,
    },
    {
        id: 6,
        title: 'PIN',
        url: 'https://www.clovekvtisni.cz/en/what-we-do/humanitarian-aid-and-development/nepal',
        image: pin,
    },
    {
        id: 7,
        title: 'SMTM Capital',
        url: 'https://www.smtmcapital.com.np/',
        image: smtm,
    },
    {
        id: 8,
        title: 'IDMC',
        url: 'http://www.internal-displacement.org/',
        image: idmc,
    },
    {
        id: 9,
        title: 'IFRC',
        url: 'https://media.ifrc.org/ifrc/',
        image: ifrc,
    },
    {
        id: 10,
        title: 'DFS',
        url: 'https://datafriendlyspace.org/',
        image: dfs,
    },
    {
        id: 11,
        title: 'JIPS',
        url: 'https://www.jips.org/',
        image: jips,
    },
    {
        id: 12,
        title: 'American Red Cross',
        url: 'https://www.redcross.org/',
        image: arc,
    },
    {
        id: 13,
        title: 'Boldcode',
        url: 'https://boldcode.io/en/',
        image: bc,
    },
];

const propTypes = {
    className: PropTypes.string,
};

const defaultProps = {
    className: '',
};

const Client = ({ client }) => (
    <div key={client.id} className={styles.client}>
        <a
            href={client.url}
            rel="noopener noreferrer"
            target="_blank"
        >
            <img
                src={client.image}
                alt={client.name}
                title={client.name}
            />
        </a>
    </div>
);
Client.propTypes = {
    client: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default class Clients extends React.PureComponent {
    static propTypes = propTypes;
    static defaultProps = defaultProps;

    render() {
        const { className } = this.props;

        return (
            <section
                id="clients"
                className={className}
            >
                <h2>
                    {'Organizations we\'ve worked with'}
                </h2>
                <div className={styles.clientList}>
                    {clients.length > 0 && clients.map(client => (
                        <Client
                            key={client.id}
                            client={client}
                        />
                    ))}
                </div>
            </section>
        );
    }
}
