import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
                <div className={styles.clientList}>
                    {clients.map(sl => (
                        <div key={sl.id} className={styles.client}>
                            <a
                                href={sl.url}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <img
                                    src={sl.image}
                                    alt={sl.name}
                                    title={sl.name}
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}
