import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { _cs } from '@togglecorp/fujs';

import ListView from '#rscv/List/ListView';

import { servicesSelector } from '#redux';

import styles from './styles.scss';

const propTypes = {
    className: PropTypes.string,
    services: PropTypes.array.isRequired,
};

const mapStateToProps = (state, props) => ({
    services: servicesSelector(state, props),
});

const defaultProps = {
    className: '',
};

const keyExtractor = member => member.id;
const rendererParams = (key, service) => ({ service });

const Service = ({
    service: {
        id,
        image,
        title,
        description,
    },
}) => (
    <div key={id} className={styles.service}>
        <div className={styles.servicesInner}>
            <img
                src={image}
                alt={title}
            />
            <h3>
                {title}
            </h3>
            <p>
                {description}
            </p>
        </div>
    </div>
);
Service.propTypes = {
    service: PropTypes.object.isRequired,
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
                className={_cs(
                    className,
                    styles.servicesSection,
                )}
            >
                <div className={styles.containerBlock}>
                    <h2>
                        What we do
                    </h2>
                    <ListView
                        className={styles.serviceList}
                        data={services}
                        keyExtractor={keyExtractor}
                        renderer={Service}
                        rendererParams={rendererParams}
                    />
                </div>
            </section>
        );
    }
}
