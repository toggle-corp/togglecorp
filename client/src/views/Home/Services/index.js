import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { servicesSelector } from '#redux';

import styles from './styles.scss';

const propTypes = {
    services: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = (state, props) => ({
    services: servicesSelector(state, props),
});


@connect(mapStateToProps)
export default class Services extends React.PureComponent {
    static propTypes = propTypes;

    render() {
        const { services } = this.props;
        return (
            <section
                id="services"
                className={styles.services}
            >
                <h2>
                    What we do
                </h2>
                <div className={styles.serviceList}>
                    {services.map(sl => (
                        <div key={sl.id} className={styles.service}>
                            <img src={sl.image} alt={sl.title} />
                            <h3>
                                {sl.title}
                            </h3>
                            <p>
                                {sl.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}
