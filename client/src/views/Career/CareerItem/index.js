import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import Button from '#rsca/Button';

import styles from './styles.scss';

const CareerItem = ({
    title,
    description,
    isActive,
    setActive,
    dataKey,
}) => {
    const handleExpandClick = useCallback(() => {
        setActive(!isActive && dataKey);
    }, [isActive, setActive, dataKey]);

    return (
        <div className={styles.careerItem}>
            <header className={styles.careerHeader}>
                <h3 className={styles.careerHeading}>
                    {title}
                </h3>
                <Button
                    className={styles.button}
                    iconName={isActive ? 'ion-chevron-up' : 'ion-chevron-down'}
                    transparent
                    onClick={handleExpandClick}
                />
            </header>
            {isActive && (
                <React.Fragment>
                    <ReactMarkdown
                        className={styles.description}
                        source={description}
                    />
                    <div className={styles.footer}>
                        <a
                            className={styles.applyLink}
                            href={`mailto:hr@togglecorp.com?subject=Application for ${title}`}
                        >
                            Apply
                        </a>
                    </div>
                </React.Fragment>
            )}
        </div>
    );
};

CareerItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    setActive: PropTypes.func.isRequired,
    dataKey: PropTypes.number.isRequired,
};

export default CareerItem;
