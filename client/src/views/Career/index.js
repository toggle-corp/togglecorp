import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
    RequestCoordinator,
    RequestClient,
    methods,
} from '#utils/Request';

import CareerItem from './CareerItem';
import styles from './styles.scss';

const EmptyComponent = () => (
    <div className={styles.emptyComponent}>
        <div>
            We do not have any openings right now, but please send your resume and your interest at
            <a
                className={styles.link}
                href="mailto:hr@togglecorp.com"
            >
                hr@togglecorp.com
            </a>
            .
        </div>
    </div>
);

const propTypes = {
    requests: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const requestOptions = {
    careerGet: {
        url: '/careers/',
        method: methods.GET,
        onMount: true,
    },
};

function Career(props) {
    const {
        requests: {
            careerGet: {
                pending,
                response = [],
            },
        },
    } = props;

    const [active, setActive] = useState();

    return (
        <div className={styles.careerPage}>
            <div className={styles.header}>
                <nav className={styles.navigation}>
                    <Link
                        className={styles.navLink}
                        to="/"
                    >
                        <h1>
                            <span>Toggle</span><span>corp</span>
                        </h1>
                    </Link>
                </nav>
                <h1 className={styles.heading}>
                    Work with us
                </h1>
                <p className={styles.description}>
                    Togglecorp is changing the way software is built.
                    We are looking to hire smart people to be a part of our team.
                    If you are passionate about quality softwares and love the minimalist
                    approach to problem solving,
                    please apply to one of the following open positions.
                </p>
            </div>
            <div className={styles.content}>
                <div className={styles.career}>
                    {response.length > 0 && response.map(career => (
                        <CareerItem
                            key={career.id}
                            dataKey={career.id}
                            title={career.title}
                            url={career.url}
                            isActive={career.id === active}
                            setActive={setActive}
                            description={career.description}
                        />
                    ))}
                    {response.length < 1 && !pending && (
                        <EmptyComponent />
                    )}
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.innerChild}>
                    Cannot find what you are looking for? Email us at
                    <a
                        className={styles.link}
                        href="mailto:hr@togglecorp.com"
                    >
                        hr@togglecorp.com
                    </a>
                </div>
            </div>
        </div>
    );
}

Career.propTypes = propTypes;

export default RequestCoordinator(RequestClient(requestOptions)(Career));
