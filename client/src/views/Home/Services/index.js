import React from 'react';
import PropTypes from 'prop-types';

import cs from '#resources/img/cs.png';
import ds from '#resources/img/ds.png';
import se from '#resources/img/se.png';
import re from '#resources/img/re.png';

import styles from './styles.scss';

const services = [
    {
        id: 1,
        title: 'Consultancy',
        description: 'We provide consultancy services regarding software architecture design, database design, programming practices and various technologies.',
        image: cs,
    },
    {
        id: 2,
        title: 'Data Science',
        description: 'We specialize in data analysis and visualization using statistics and machine learning technologies.',
        image: ds,
    },
    {
        id: 3,
        title: 'Software Engineering',
        description: 'We design and develop systems of various complexities that run on web, mobile and desktop platforms.',
        image: se,
    },
    {
        id: 4,
        title: 'Research & Data Analysis',
        description: 'We carryout humanitarian driven secondary data review with a focus on qualitative data research, report writing and data analysis.',
        image: re,
    },
];

const propTypes = {
    className: PropTypes.string,
};

const defaultProps = {
    className: '',
};

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


export default class Services extends React.PureComponent {
    static propTypes = propTypes;
    static defaultProps = defaultProps;

    render() {
        const { className } = this.props;

        return (
            <section
                id="services"
                className={className}
            >
                <h2>
                    What we do
                </h2>
                <div className={styles.serviceList}>
                    {services.map(service => (
                        <Service
                            key={service.id}
                            service={service}
                        />
                    ))}
                </div>
            </section>
        );
    }
}
