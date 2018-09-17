import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AnchorLink from '#components/AnchorLink';

import seImg from '#resources/images/services/se.png';
import dsImg from '#resources/images/services/ds.png';
import csImg from '#resources/images/services/cs.png';

import djangoImg from '#resources/images/expertise/django.png';
import postgresImg from '#resources/images/expertise/postgres.png';
import dockerImg from '#resources/images/expertise/docker.png';
import awsImg from '#resources/images/expertise/aws.png';

import reactImg from '#resources/images/expertise/react.png';
import vueImg from '#resources/images/expertise/vue.png';
import jqueryImg from '#resources/images/expertise/jquery.png';
import sassImg from '#resources/images/expertise/sass.png';

import d3Img from '#resources/images/expertise/d3.png';
import mapboxImg from '#resources/images/expertise/mapbox.png';
import leafletImg from '#resources/images/expertise/leaflet.png';

import scikitImg from '#resources/images/expertise/scikit.png';
import tensorflowImg from '#resources/images/expertise/tensorflow.png';
import gensimImg from '#resources/images/expertise/gensim.png';
import rImg from '#resources/images/expertise/r.png';

import aditya from '#resources/images/team/adi.jpg';
import uddhab from '#resources/images/team/uddhab.jpg';
import bibekDahal from '#resources/images/team/bibek.jpg';
import fh from '#resources/images/team/fh.jpg';
import prabesh from '#resources/images/team/pprabesh.jpg';
import safar from '#resources/images/team/safar.jpg';
import navin from '#resources/images/team/navin.jpg';
import pandey from '#resources/images/team/pandey.jpg';
import shweta from '#resources/images/team/shweta.jpg';
import ewan from '#resources/images/team/ewan.jpg';
import kriti from '#resources/images/team/kriti.jpg';
import nagma from '#resources/images/team/nagma.jpg';
import sameer from '#resources/images/team/sameer.jpg';

import acaps from '#resources/images/clients/acaps.png';
import acled from '#resources/images/clients/acled.png';
import wvi from '#resources/images/clients/wvi.png';
import okular from '#resources/images/clients/okular.png';
import danish from '#resources/images/clients/danish.png';
import cyclical from '#resources/images/clients/cyclical.png';
import unhcr from '#resources/images/clients/unhcr.png';
import dfid from '#resources/images/clients/dfid.png';
import smtm from '#resources/images/clients/smtm.png';
import idmc from '#resources/images/clients/idmc.png';
import ocha from '#resources/images/clients/ocha.png';
import ifrc from '#resources/images/clients/ifrc.png';
import pin from '#resources/images/clients/pin.png';

import {
    membersSelector,
    clientsSelector,
    technologiesSelector,

    setMembersAction,
    setClientsAction,
    setTechnologiesAction,
} from '#redux';
import TeamMembers from '../Team';

import MembersGetRequest from './requests/MembersGetRequest';
import ClientsGetRequest from './requests/ClientsGetRequest';
import TechnologiesGetRequest from './requests/TechnologiesGetRequest';

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

const expertiseGroupList = [
    {
        id: 'server',
        title: 'Web server',
        items: [
            { id: 1, title: 'Django', image: djangoImg },
            { id: 2, title: 'Postgres', image: postgresImg },
            { id: 3, title: 'Docker', image: dockerImg },
            { id: 4, title: 'AWS', image: awsImg },
        ],
    },
    {
        id: 'frontend',
        title: 'Frontend',
        items: [
            { id: 1, title: 'React', image: reactImg },
            { id: 2, title: 'Vue.js', image: vueImg },
            { id: 3, title: 'Jquery', image: jqueryImg },
            { id: 4, title: 'Sass', image: sassImg },
        ],
    },
    {
        id: 'viz',
        title: 'Visualization',
        items: [
            { id: 1, title: 'D3.js', image: d3Img },
            { id: 2, title: 'Mapbox', image: mapboxImg },
            { id: 3, title: 'Leaflet', image: leafletImg },
        ],
    },
    {
        id: 'ds',
        title: 'Data Analysis and Machine Learning',
        items: [
            { id: 1, title: 'scikit-learn', image: scikitImg },
            { id: 2, title: 'TensorFlow', image: tensorflowImg },
            { id: 3, title: 'Gensim', image: gensimImg },
            { id: 4, title: 'R', image: rImg },
        ],
    },
];

const clientList = [
    {
        id: 'dfid',
        title: 'DFID Nepal',
        image: dfid,
    },
    {
        id: 'okular',
        title: 'Okular Analytics',
        image: okular,
    },
    {
        id: 'cyclical',
        title: 'Cyclical Insights',
        image: cyclical,
    },
    {
        id: 'acaps',
        title: 'ACAPS',
        image: acaps,
    },
    {
        id: 'acled',
        title: 'ACLED',
        image: acled,
    },
    {
        id: 'wvi',
        title: 'World Vision',
        image: wvi,
    },
    {
        id: 'unhcr',
        title: 'UNHCR',
        image: unhcr,
    },
    {
        id: 'pin',
        title: 'PIN',
        image: pin,
    },
    {
        id: 'smtm',
        title: 'SMTM Capital',
        image: smtm,
    },
    {
        id: 'idmc',
        title: 'IDMC',
        image: idmc,
    },
    {
        id: 'ocha',
        title: 'OCHA',
        image: ocha,
    },
    {
        id: 'ifrc',
        title: 'IFRC',
        image: ifrc,
    },
    {
        id: 'danishRedCross',
        title: 'Danish Red Cross',
        image: danish,
    },
];

const teamList = [
    {
        id: 1,
        name: 'Ankit Mehta',
        image: fh,
        designation: 'Co-founder / CEO',
        linkedin: 'https://www.linkedin.com/in/frozenhelium',
        github: 'https://github.com/FrozenHelium',
    },
    {
        id: 2,
        name: 'Aditya Khatri',
        image: aditya,
        designation: 'Co-founder / Developer',
        linkedin: 'https://www.linkedin.com/in/adityakhatri47',
        github: 'https://github.com/AdityaKhatri',
    },
    {
        id: 3,
        name: 'Prabesh Pathak',
        image: prabesh,
        designation: 'Co-founder / Developer',
        linkedin: 'https://www.linkedin.com/in/prabesh-pathak-423202a9',
        github: 'https://github.com/pprabesh',
    },
    {
        id: 4,
        name: 'Bibek Dahal',
        image: bibekDahal,
        designation: 'Co-founder / Developer',
        linkedin: 'https://www.linkedin.com/in/bibek-dahal',
        github: 'https://github.com/bibekdahal',
    },
    {
        id: 11,
        name: 'Ewan Oglethorpe',
        image: ewan,
        designation: 'Advisor',
        linkedin: 'https://www.linkedin.com/in/ewan-oglethorpe-b5b12349',
        github: 'https://github.com/eoglethorpe',
    },
    {
        id: 5,
        name: 'Navin Ayer',
        image: navin,
        designation: 'Developer',
        linkedin: 'https://www.linkedin.com/in/navin-ayer-6453b8b4',
        github: 'https://github.com/thenav56',
    },
    {
        id: 6,
        name: 'Safar Ligal',
        image: safar,
        designation: 'Developer',
        linkedin: 'https://www.linkedin.com/in/safar-ligal',
        github: 'https://github.com/tnagorra',
    },
    {
        id: 9,
        name: 'Kriti Chhetri',
        image: kriti,
        designation: 'Analyst',
        linkedin: 'https://www.linkedin.com/in/kriti-chhetri-61270214b/',
    },
    {
        id: 7,
        name: 'Sameer Shakten Rai',
        image: sameer,
        designation: 'Developer',
        linkedin: 'https://www.linkedin.com/in/sameer-rai-512956132/',
        github: 'https://github.com/samshara',
    },
    {
        id: 10,
        name: 'Bibek Pandey',
        image: pandey,
        designation: 'Developer',
        linkedin: 'https://www.linkedin.com/in/bibek-pandey-023879b1/',
        github: 'https://github.com/bewakes',
    },
    {
        id: 12,
        name: 'Shweta Khatri',
        image: shweta,
        designation: 'Analyst',
        linkedin: 'https://www.linkedin.com/in/shweta-khatri-3a3a67161/',
    },
    {
        id: 8,
        name: 'Nagma Mathema',
        image: nagma,
        designation: 'Analyst',
        linkedin: 'https://www.linkedin.com/in/nagma-mathema-831b7a70/',
    },
    {
        id: 13,
        name: 'Uddhab Adhikari',
        image: uddhab,
        designation: 'Project Manager',
        linkedin: 'https://www.linkedin.com/in/uddhab-adhikari-79886521/',
    },
];

const propTypes = {
    /* eslint-disable react/forbid-prop-types */
    members: PropTypes.array.isRequired,
    clients: PropTypes.array.isRequired,
    technologies: PropTypes.array.isRequired,
    /* eslint-disable react/forbid-prop-types */
    setMembers: PropTypes.func.isRequired,
    setClients: PropTypes.func.isRequired,
    setTechnologies: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
    members: membersSelector(state, props),
    clients: clientsSelector(state, props),
    technologies: technologiesSelector(state, props),
});

const mapDispatchToProps = dispatch => ({
    setMembers: params => dispatch(setMembersAction(params)),
    setClients: params => dispatch(setClientsAction(params)),
    setTechnologies: params => dispatch(setTechnologiesAction(params)),
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
        this.technologiesGetRequest = new TechnologiesGetRequest({
            setState: v => this.setState(v),
            setTechnologies: this.props.setTechnologies,
        });
    }

    componentDidMount() {
        this.membersGetRequest.init().start();
        this.clientsGetRequest.init().start();
        this.technologiesGetRequest.init().start();
    }

    componentWillUnmount() {
        this.membersGetRequest.stop();
        this.clientsGetRequest.stop();
        this.technologiesGetRequest.stop();
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
                {expertiseGroupList.map(eg => (
                    <div key={eg.id} className={styles.expertiseGroup}>
                        <ul>
                            {eg.items.map(e => (
                                <li key={e.id}>
                                    <img
                                        src={e.image}
                                        alt={e.title}
                                        title={e.title}
                                    />
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
                {clientList.map(sl => (
                    <div key={sl.id} className={styles.client}>
                        <img
                            src={sl.image}
                            alt={sl.title}
                            title={sl.title}
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
                members={teamList}
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
            technologies,
        } = this.props;

        console.warn(technologies);

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
