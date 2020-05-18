import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AnchorLink from '#components/AnchorLink';

import {
    RequestCoordinator,
    RequestClient,
    methods,
} from '#utils/Request';

import {
    setMembersAction,
    setClientsAction,
    setServicesAction,
    setTechnologySectionsAction,
} from '#redux';

import Services from './Services';
import Expertise from './Expertise';
import Clients from './Clients';
import Team from './Team';

import styles from './styles.scss';

const linkList = [
    {
        id: 'home',
        sectionTitle: 'Home',
        sectionLink: 'home',
    },
    {
        id: 'services',
        sectionTitle: 'Services',
        sectionLink: 'services',
    },
    {
        id: 'expertise',
        sectionTitle: 'Expertise',
        sectionLink: 'expertise',
    },
    {
        id: 'clients',
        sectionTitle: 'Clients',
        sectionLink: 'clients',
    },
    {
        id: 'team',
        sectionTitle: 'Team',
        sectionLink: 'team',
    },
    {
        id: 'contact',
        sectionTitle: 'Contact',
        sectionLink: 'contact',
    },
];

const propTypes = {
    setMembers: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
    setClients: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
    setServices: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
    // eslint-disable-next-line react/no-unused-prop-types
    setTechnologySections: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    setMembers: params => dispatch(setMembersAction(params)),
    setClients: params => dispatch(setClientsAction(params)),
    setServices: params => dispatch(setServicesAction(params)),
    setTechnologySections: params => dispatch(setTechnologySectionsAction(params)),
});

const requestOptions = {
    membersGet: {
        url: '/members/',
        method: methods.GET,
        onMount: true,
        onSuccess: ({
            props: { setMembers },
            response,
        }) => {
            setMembers(response);
        },
        extras: {
            schemaName: 'array.member',
        },
    },
    clientsGet: {
        url: '/clients/',
        method: methods.GET,
        onMount: true,
        onSuccess: ({
            props: { setClients },
            response,
        }) => {
            setClients(response);
        },
        extras: {
            schemaName: 'array.client',
        },
    },
    servicesGet: {
        url: '/services/',
        method: methods.GET,
        onMount: true,
        onSuccess: ({
            props: { setServices },
            response,
        }) => {
            setServices(response);
        },
        extras: {
            schemaName: 'array.service',
        },
    },
    technologiesGet: {
        url: '/technology-sections/',
        method: methods.GET,
        onMount: true,
        onSuccess: ({
            props: { setTechnologySections },
            response,
        }) => {
            setTechnologySections(response);
        },
        extras: {
            schemaName: 'array.technologySection',
        },
    },
};


@connect(undefined, mapDispatchToProps)
@RequestCoordinator
@RequestClient(requestOptions)
export default class Home extends React.PureComponent {
    static propTypes = propTypes;

    handleDownButtonClick = (section) => {
        const servicesContainer = document.getElementsByClassName(styles[section])[0];

        if (servicesContainer) {
            servicesContainer.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
            });
        }
    }

    renderHeader = () => (
        <section
            id="home"
            className={styles.header}
        >
            <div className={styles.leftBlock}>
                <div className={styles.titleBlock}>
                    <p className={styles.preMessage}>
                        Hi, we are
                    </p>
                    <h1>
                        <span>Toggle</span><span>corp</span>
                    </h1>
                    <p className={styles.postMessage}>
                        We build tech for your idea.
                    </p>
                </div>
            </div>
            <div className={styles.rightBlock} >
                <nav>
                    <ul>
                        {linkList.map(link => (
                            <li key={link.id}>
                                <AnchorLink
                                    href={`#${link.sectionLink}`}
                                >
                                    {link.sectionTitle}
                                </AnchorLink>
                            </li>
                        ))}
                        <li key="career">
                            <Link
                                to="/career/"
                            >
                                Career
                            </Link>
                        </li>
                    </ul>
                </nav>
                <button
                    className={`
                        ${styles.downButton}
                        ion-ios-arrow-down
                    `}
                    onClick={() => this.handleDownButtonClick('services')}
                />
            </div>
            <div className={styles.bottomBlock}>
                <button
                    className={`${styles.downButton} ion-ios-arrow-down`}
                    onClick={() => this.handleDownButtonClick('services')}
                />
            </div>
        </section>
    )

    renderContact = () => (
        <section
            id="contact"
            className={styles.contact}
        >
            <div className={styles.contactInfo}>
                <h2>Contact Us</h2>
                <p>
                    <i className="fa fa-envelope" />
                    <a href="mailto:info@togglecorp.com">
                        info@togglecorp.com
                    </a>
                </p>
                <p>
                    <i className="fa fa-phone" />
                    +977-9841969697, +977-9841919399
                </p>
                <p>
                    <i className="fa fa-map-o" />
                    Pulchowk, Patan, Nepal
                </p>
            </div>
            <div className={styles.theMap}>
                <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1485.5855254843193!2d85.31556386076223!3d27.675954023000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cc62b59c8f%3A0xe38fc6d7cff6e8e8!2sTogglecorp!5e0!3m2!1sen!2snp!4v1481449564568"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen
                />
            </div>
        </section>
    )

    render() {
        return (
            <div className={styles.home}>
                {this.renderHeader()}
                <Services
                    className={styles.services}
                />
                <Expertise
                    className={styles.expertise}
                />
                <Clients
                    className={styles.clients}
                />
                <Team
                    className={styles.team}
                />
                {this.renderContact()}
            </div>
        );
    }
}
