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

export default class Home extends React.PureComponent {
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
            <div className={styles.rightBlock} />
        </section>
    )

    renderServices = () => (
        <section className={styles.services}>
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

    render() {
        return (
            <div className={styles.home}>
                {this.renderNav()}
                {this.renderHeader()}
                {this.renderServices()}
                {this.renderExpertise()}
            </div>
        );
    }
}
