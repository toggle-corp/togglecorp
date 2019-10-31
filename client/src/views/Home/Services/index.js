import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ListView from '#rscv/List/ListView';

import { servicesSelector } from '#redux';

import styles from './styles.scss';

const propTypes = {
    className: PropTypes.string,
    services: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = (state, props) => ({
    services: servicesSelector(state, props),
});

const defaultProps = {
    className: '',
};

const keyExtractor = member => member.id;
const rendererParams = (key, service) => ({ service });

const Service = ({ service }) => (
    <div key={service.id} className={styles.service}>
        <img src={service.image} alt={service.title} />
        <h3>
            {service.title}
        </h3>
        <p>
            {service.description}
        </p>
    </div>
);
Service.propTypes = {
    service: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};


@connect(mapStateToProps)
export default class Services extends React.PureComponent {
    static propTypes = propTypes;
    static defaultProps = defaultProps;

    render() {
        const {
            className,
            services,
        } = this.props;

        return (
            <section
                id="services"
                className={className}
            >
                <h2>
                    What we do
                </h2>
                {services.length > 0 && (
                    <ListView
                        className={styles.serviceList}
                        data={services}
                        keyExtractor={keyExtractor}
                        renderer={Service}
                        rendererParams={rendererParams}
                    />
                )}
            </section>
        );
    }
}
