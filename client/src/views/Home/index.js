import React from 'react';

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
import danish from '#resources/images/clients/danish.jpg';
import okular from '#resources/images/clients/okular.webp';
import unhcr from '#resources/images/clients/unhcr.png';
import dfid from '#resources/images/clients/dfid.png';
import smtm from '#resources/images/clients/smtm.png';
import idmc from '#resources/images/clients/idmc.png';
import ocha from '#resources/images/clients/ocha.jpg';
import ifrc from '#resources/images/clients/ifrc.png';
import pin from '#resources/images/clients/pin.jpg';

import TeamMembers from '../Team';

import styles from './styles.scss';


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
        id: 'okular',
        title: 'Okular Analytics',
        image: okular,
    },
    {
        id: 'dfid',
        title: 'DFID Nepal',
        image: dfid,
    },
    {
        id: 'acaps',
        title: 'ACAPS',
        image: acaps,
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

const teamMembers = [
    {
        id: 1,
        name: 'Ankit Mehta',
        image: fh,
        designation: 'Co-founder / CEO',
    },
    {
        id: 2,
        name: 'Aditya Khatri',
        image: aditya,
        designation: 'Co-founder / Developer',
    },
    {
        id: 3,
        name: 'Prabesh Pathak',
        image: prabesh,
        designation: 'Co-founder / Developer',
    },
    {
        id: 4,
        name: 'Bibek Dahal',
        image: bibekDahal,
        designation: 'Co-founder / Developer',
    },
    {
        id: 11,
        name: 'Ewan Oglethorpe',
        image: ewan,
        designation: 'Advisor',
    },
    {
        id: 5,
        name: 'Navin Ayer',
        image: navin,
        designation: 'Developer',
    },
    {
        id: 6,
        name: 'Safar Ligal',
        image: safar,
        designation: 'Developer',
    },
    {
        id: 7,
        name: 'Sameer Shakten Rai',
        image: sameer,
        designation: 'Developer',
    },
    {
        id: 10,
        name: 'Bibek Pandey',
        image: pandey,
        designation: 'Developer',
    },
    {
        id: 8,
        name: 'Nagma Mathema',
        image: nagma,
        designation: 'Analyst',
    },
    {
        id: 9,
        name: 'Kriti Chhetri',
        image: kriti,
        designation: 'Analyst',
    },
    {
        id: 12,
        name: 'Shweta Khatri',
        image: shweta,
        designation: 'Analyst',
    },
];

export default class Home extends React.PureComponent {
    handleDownButtonClick = () => {
        const servicesContainer = document.getElementsByClassName(styles.services)[0];

        if (servicesContainer) {
            servicesContainer.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
            });
        }
    }

    renderNav = () => (
        <nav>
            <ul>
                <li> home </li>
                <li> products </li>
                <li> blog </li>
                <li> contact </li>
            </ul>
        </nav>
    )

    renderHeader = () => (
        <section className={styles.header}>
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
                <button
                    className={`
                        ${styles.downButton}
                        ion-ios-arrow-down
                    `}
                    onClick={this.handleDownButtonClick}
                />
            </div>
        </section>
    )

    renderServices = () => (
        <section className={styles.services} >
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
        <section className={styles.expertise}>
            <h2>
                Our expertise
            </h2>
            <div className={styles.expertiseGroupList}>
                {expertiseGroupList.map(eg => (
                    <div key={eg.id} className={styles.expertiseGroup}>
                        <ul>
                            <h3 className={styles.groupTitle}>{eg.title}</h3>
                            {eg.items.map(e => (
                                <li key={e.id}>
                                    <img src={e.image} alt={e.title} />
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )

    renderClients = () => (
        <section className={styles.clients} >
            <h2>
                Organizations we have worked with
            </h2>
            <div className={styles.clientList}>
                {clientList.map(sl => (
                    <div key={sl.id} className={styles.client}>
                        <img src={sl.image} alt={sl.title} />
                    </div>
                ))}
            </div>
        </section>
    )

    renderTeam = () => (
        <section className={styles.team}>
            <h2>
                Our team
            </h2>
            <TeamMembers
                members={teamMembers}
                className={styles.teamList}
            />
        </section>
    )

    renderContact = () => (
        <section className={styles.contact} >
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
                {/* this.renderNav() */}
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
