import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AnchorLink from '#components/AnchorLink';

import LoadingAnimation from '#rscv/LoadingAnimation';

import logo from '#resources/img/logo-white-01.png';
import Background from '#resources/img/header-bg.png';
import scroll from '#resources/img/scroll.png';
import overlay from '#resources/img/polka-bg.png';
import List from '#rscv/List';

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
import Footer from './Footer';

import MembersGetRequest from './requests/MembersGetRequest';
import ClientsGetRequest from './requests/ClientsGetRequest';
import ServicesGetRequest from './requests/ServicesGetRequest';
import TechnologySectionsGetRequest from './requests/TechnologySectionsGetRequest';

import styles from './styles.scss';
// import ListView from 'src/vendor/react-store/components/View/List/ListView';

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
    setMembers: PropTypes.func.isRequired,
    setClients: PropTypes.func.isRequired,
    setServices: PropTypes.func.isRequired,
    setTechnologySections: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    setMembers: params => dispatch(setMembersAction(params)),
    setClients: params => dispatch(setClientsAction(params)),
    setServices: params => dispatch(setServicesAction(params)),
    setTechnologySections: params => dispatch(setTechnologySectionsAction(params)),
});

const linkListKeyExtractor = link => link.id;

const linkListRendererParams = (key, link) => {
    console.log('key and link', key, link);
    return ({ link });
};

const linkListRender = ({ link }) => {
    console.warn('link', link);
    return (
        <li>
            <AnchorLink
                href={`#${link.sectionLink}`}
            >
                {link.sectionTitle}
            </AnchorLink>
        </li>
    );
};

@connect(undefined, mapDispatchToProps)
export default class Home extends React.PureComponent {
    static propTypes = propTypes;

    constructor(props) {
        super(props);

        this.state = {
            serviceLoading: true,
            clientLoading: true,
            technologySectionLoading: true,
            memberLoading: true,
        };

        // Requests
        this.membersGetRequest = new MembersGetRequest({
            setState: v => this.setState(v),
            setMembers: this.props.setMembers,
        });
        this.clientsGetRequest = new ClientsGetRequest({
            setState: v => this.setState(v),
            setClients: this.props.setClients,
        });
        this.servicesGetRequest = new ServicesGetRequest({
            setState: v => this.setState(v),
            setServices: this.props.setServices,
        });
        this.technologySectionsGetRequest = new TechnologySectionsGetRequest({
            setState: v => this.setState(v),
            setTechnologySections: this.props.setTechnologySections,
        });
    }

    componentDidMount() {
        this.membersGetRequest.init().start();
        this.clientsGetRequest.init().start();
        this.servicesGetRequest.init().start();
        this.technologySectionsGetRequest.init().start();
    }

    componentWillUnmount() {
        this.membersGetRequest.stop();
        this.clientsGetRequest.stop();
        this.servicesGetRequest.stop();
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
            style={{ backgroundImage: `url(${Background})` }}
        >
            <div className={styles.backgroundOverlay}>
                <img src={overlay} alt="Polka Dots" />
            </div>
            <div className={styles.containerBlock}>
                <nav>
                    <ul>
                        <List
                            keyExtractor={linkListKeyExtractor}
                            data={linkList}
                            renderer={linkListRender}
                            rendererParams={linkListRendererParams}
                        />
                    </ul>
                </nav>
                <div className={styles.titleBlock}>
                    <div className={styles.siteBranding}>
                        <img src={logo} alt="Togglecorp logo" />
                    </div>
                    <p className={styles.postMessage}>
                        We build <span> tech</span> for your <span>ideas</span>
                    </p>
                </div>
                <div className={styles.bottomBlock}>
                    <AnchorLink
                        href="#services"
                    >
                        <img src={scroll} alt="Scroll Down" />
                    </AnchorLink>
                </div>
            </div>
        </section>
    )

    renderContact = () => (
        <section
            id="contact"
            className={styles.contact}
        >
            <div className={styles.containerBlock}>
                <h2>Contact Us</h2>
                <div className={styles.contactInfo}>
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
                        Jawalakhel, Patan, Nepal
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
            </div>
        </section>
    )

    render() {
        const {
            serviceLoading,
            clientLoading,
            technologySectionLoading,
            memberLoading,
        } = this.state;

        const loading = serviceLoading ||
            clientLoading ||
            technologySectionLoading ||
            memberLoading;

        if (loading) {
            return (
                <LoadingAnimation large />
            );
        }

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
                <Footer
                    className={styles.footer}
                />
            </div>
        );
    }
}
