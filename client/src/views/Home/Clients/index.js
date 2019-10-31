import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ListView from '#rscv/List/ListView';

import { clientsSelector } from '#redux';

import styles from './styles.scss';

const propTypes = {
    className: PropTypes.string,
    clients: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = (state, props) => ({
    clients: clientsSelector(state, props),
});

const defaultProps = {
    className: '',
};

const keyExtractor = member => member.id;
const rendererParams = (key, client) => ({ client });

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


@connect(mapStateToProps)
export default class Clients extends React.PureComponent {
    static propTypes = propTypes;
    static defaultProps = defaultProps;

    render() {
        const {
            className,
            clients,
        } = this.props;

        return (
            <section
                id="clients"
                className={className}
            >
                <h2>
                    {'Organizations we\'ve worked with'}
                </h2>
                {clients.length > 0 && (
                    <ListView
                        className={styles.clientList}
                        data={clients}
                        keyExtractor={keyExtractor}
                        renderer={Client}
                        rendererParams={rendererParams}
                    />
                )}
            </section>
        );
    }
}
