import React from 'react';

import seImg from '#resources/images/se.png';
import dsImg from '#resources/images/ds.png';
import csImg from '#resources/images/cs.png';
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

    render() {
        return (
            <div className={styles.home}>
                {this.renderNav()}
                {this.renderHeader()}
                {this.renderServices()}
            </div>
        );
    }
}
