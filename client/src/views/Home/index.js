import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AnchorLink from '#components/AnchorLink';

import seImg from '#resources/images/services/se.png';
import dsImg from '#resources/images/services/ds.png';
import csImg from '#resources/images/services/cs.png';

import {
    membersSelector,
    clientsSelector,
    technologySectionsSelector,

    setMembersAction,
    setClientsAction,
    setTechnologySectionsAction,
} from '#redux';
import TeamMembers from './Team';

import MembersGetRequest from './requests/MembersGetRequest';
import ClientsGetRequest from './requests/ClientsGetRequest';
import TechnologySectionsGetRequest from './requests/TechnologySectionsGetRequest';

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
        id: 'clients',
        sectionTitle: 'Clients',
        sectionLink: 'clients',
    },
    {
        id: 'expertise',
        sectionTitle: 'Expertise',
        sectionLink: 'expertise',
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

const serviceList = [
    {
        id: 'se',
        title: 'Software Engineering',
        description: 'We design and develop systems of various complexities that run on web, mobile and desktop platforms.',
        image: seImg,
    },
    {
        id: 'ds',
        title: 'Data Science',
        description: 'We specialize in data analysis and visualization using statistics and machine learning technologies.',
        image: dsImg,
    },
    {
        id: 'cs',
        title: 'Consultancy',
        description: 'We provide consultancy services regarding software architecture design, database design, programming practices and various technologies.',
        image: csImg,
    },
];

const propTypes = {
    /* eslint-disable react/forbid-prop-types */
    members: PropTypes.array.isRequired,
    clients: PropTypes.array.isRequired,
    technologySections: PropTypes.array.isRequired,
    /* eslint-disable react/forbid-prop-types */
    setMembers: PropTypes.func.isRequired,
    setClients: PropTypes.func.isRequired,
    setTechnologySections: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
    members: membersSelector(state, props),
    clients: clientsSelector(state, props),
    technologySections: technologySectionsSelector(state, props),
});

const mapDispatchToProps = dispatch => ({
    setMembers: params => dispatch(setMembersAction(params)),
    setClients: params => dispatch(setClientsAction(params)),
    setTechnologySections: params => dispatch(setTechnologySectionsAction(params)),
});


@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends React.PureComponent {
    static propTypes = propTypes;

    constructor(props) {
        super(props);

        // Requests
        this.membersGetRequest = new MembersGetRequest({
            setState: v => this.setState(v),
            setMembers: this.props.setMembers,
        });
        this.clientsGetRequest = new ClientsGetRequest({
            setState: v => this.setState(v),
            setClients: this.props.setClients,
        });
        this.technologySectionsGetRequest = new TechnologySectionsGetRequest({
            setState: v => this.setState(v),
            setTechnologySections: this.props.setTechnologySections,
        });
    }

    componentDidMount() {
        this.membersGetRequest.init().start();
        this.clientsGetRequest.init().start();
        this.technologySectionsGetRequest.init().start();
    }

    componentWillUnmount() {
        this.membersGetRequest.stop();
        this.clientsGetRequest.stop();
        this.technologySectionsGetRequest.stop();
    }

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

    renderServices = () => (
        <section
            id="services"
            className={styles.services}
        >
            <h2>
                What we do
            </h2>
            <div className={styles.serviceList}>
                {serviceList.map(sl => (
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
    )

    renderExpertise = () => (
        <section
            id="expertise"
            className={styles.expertise}
        >
            <h2>
                Our expertise
            </h2>
            <div className={styles.expertiseGroupList}>
                {this.props.technologySections.map(eg => (
                    <div key={eg.id} className={styles.expertiseGroup}>
                        <ul>
                            {eg.technologies.map(e => (
                                <li key={e.id}>
                                    <a
                                        href={e.url}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <img
                                            src={e.image}
                                            alt={e.name}
                                            title={e.name}
                                        />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )

    renderClients = () => (
        <section
            id="clients"
            className={styles.clients}
        >
            <h2>
                {'Organizations we\'ve worked with'}
            </h2>
            <div className={styles.clientList}>
                {this.props.clients.map(sl => (
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
    )

    renderTeam = () => (
        <section
            id="team"
            className={styles.team}
        >
            <h2>
                Our team
            </h2>
            <TeamMembers
                members={this.props.members}
                className={styles.teamList}
            />
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
        const {
            members,
            clients,
        } = this.props;

        console.warn(members);
        console.warn(clients);

        return (
            <div className={styles.home}>
                {this.renderHeader()}
                {this.renderServices()}
                {this.renderExpertise()}
                {this.renderClients()}
                {this.renderTeam()}
                {this.renderContact()}
            </div>
        );
    }
}
