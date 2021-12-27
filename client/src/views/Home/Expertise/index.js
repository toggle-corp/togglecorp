import React from 'react';
import PropTypes from 'prop-types';

import aws from '#resources/img/aws.png';
import d3 from '#resources/img/d3.png';
import docker from '#resources/img/docker.png';
import django from '#resources/img/django.png';
import leaflet from '#resources/img/leaflet.png';
import gensim from '#resources/img/gensim.png';
import jquery from '#resources/img/jquery.png';
import mapbox from '#resources/img/mapbox.png';
import postgres from '#resources/img/postgres.png';
import r from '#resources/img/r.png';
import react from '#resources/img/react.png';
import reactNative from '#resources/img/react-native.png';
import sass from '#resources/img/sass.png';
import scikit from '#resources/img/scikit.png';
import tensorflow from '#resources/img/tensorflow.png';

import styles from './styles.scss';

const sections = [
    {
        id: 1,
        title: 'Web server',
        technologies: [
            {
                id: 1,
                title: 'Django',
                url: 'https://www.djangoproject.com/',
                image: django,
            },
            {
                id: 2,
                title: 'Postgres',
                url: 'https://www.postgresql.org/',
                image: postgres,
            },
            {
                id: 3,
                title: 'Docker',
                url: 'https://www.docker.com/',
                image: docker,
            },
            {
                id: 4,
                title: 'AWS',
                url: 'https://aws.amazon.com/',
                image: aws,
            },
        ],
    },
    {
        id: 2,
        title: 'Frontend',
        technologies: [
            {
                id: 5,
                title: 'React',
                url: 'https://reactjs.org/',
                image: react,
            },
            {
                id: 6,
                title: 'Jquery',
                url: 'https://jquery.com/',
                image: jquery,
            },
            {
                id: 7,
                title: 'Sass',
                url: 'https://sass-lang.com/',
                image: sass,
            },
            {
                id: 11,
                title: 'React Native',
                url: 'https://facebook.github.io/react-native/',
                image: reactNative,
            },
        ],
    },
    {
        id: 3,
        title: 'Visualization',
        technologies: [
            {
                id: 8,
                title: 'D3',
                url: 'https://d3js.org/',
                image: d3,
            },
            {
                id: 9,
                title: 'Mapbox',
                url: 'https://www.mapbox.com/',
                image: mapbox,
            },
            {
                id: 10,
                title: 'Leaflet',
                url: 'https://leafletjs.com/',
                image: leaflet,
            },
        ],
    },
    {
        id: 4,
        title: 'Data Analysis and Machine Learning',
        technologies: [
            {
                id: 12,
                title: 'scikit-learn',
                url: 'http://scikit-learn.org/',
                image: scikit,
            },
            {
                id: 13,
                title: 'TensorFlow',
                url: 'https://www.tensorflow.org/',
                image: tensorflow,
            },
            {
                id: 14,
                title: 'Gensim',
                url: 'https://radimrehurek.com/gensim/',
                image: gensim,
            },
            {
                id: 15,
                title: 'R',
                url: 'https://www.r-project.org/',
                image: r,
            },
        ],
    },
];

const Technology = ({ technology }) => (
    <li>
        <a
            href={technology.url}
            rel="noopener noreferrer"
            target="_blank"
        >
            <img
                src={technology.image}
                alt={technology.title}
                title={technology.title}
            />
        </a>
    </li>
);
Technology.propTypes = {
    technology: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const TechnologySection = ({ technologySection }) => (
    <div className={styles.expertiseGroup} >
        <ul>
            {technologySection.technologies.map(tech => (
                <Technology
                    key={tech.id}
                    technology={tech}
                />
            ))}
        </ul>
    </div>
);
TechnologySection.propTypes = {
    technologySection: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};


const propTypes = {
    className: PropTypes.string,
};

const defaultProps = {
    className: '',
};

export default class Expertise extends React.PureComponent {
    static propTypes = propTypes;
    static defaultProps = defaultProps;

    render() {
        const { className } = this.props;

        return (
            <section
                id="expertise"
                className={className}
            >
                <h2>
                    Our expertise
                </h2>
                <div className={styles.expertiseGroupList}>
                    {sections.map(section => (
                        <TechnologySection
                            key={section.id}
                            technologySection={section}
                        />
                    ))}
                </div>
            </section>
        );
    }
}
