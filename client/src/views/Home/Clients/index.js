import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { clientsSelector } from '#redux';

import styles from './styles.scss';

const propTypes = {
    /* eslint-disable-next-line react/forbid-prop-types */
    clients: PropTypes.array.isRequired,
};

const mapStateToProps = (state, props) => ({
    clients: clientsSelector(state, props),
});

@connect(mapStateToProps)
export default class Clients extends React.PureComponent {
    static propTypes = propTypes;

    render() {
        const { clients } = this.props;

        return (
            <section
                id="clients"
                className={styles.clients}
            >
                <h2>
                    {'Organizations we\'ve worked with'}
                </h2>
                <div className={styles.clientList}>
                    {clients.map(sl => (
                        <div key={sl.id} className={styles.client}>
                            <img
                                src={sl.image}
                                alt={sl.name}
                                title={sl.name}
                            />
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}
