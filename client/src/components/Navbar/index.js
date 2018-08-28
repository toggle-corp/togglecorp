import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.scss';


export default ({ className }) => (
    <nav className={`${className} ${styles.navbar}`}>
        <h1>
            <span>Toggle</span><span>corp</span>
        </h1>
    </nav>
);
