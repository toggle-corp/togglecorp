import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import {
    _cs,
    isDefined,
} from '@togglecorp/fujs';
import ReactMarkdown from 'react-markdown';

import Button from '#rsca/Button';

import styles from './styles.scss';

const CareerItem = ({
    title,
    url,
    description,
    isActive,
    setActive,
    dataKey,
}) => {
    const handleExpandClick = useCallback(() => {
        setActive(!isActive && dataKey);
    }, [isActive, setActive, dataKey]);

    const finalUrl = isDefined(url)
        ? url
        : `mailto:hr@togglecorp.com?subject=Application for ${title}`;

    return (
        <div className={styles.careerItem}>
            <Button
                className={styles.careerHeader}
                transparent
                onClick={handleExpandClick}
            >
                <h3 className={styles.careerHeading}>
                    {title}
                </h3>
                <span
                    className={_cs(
                        styles.button,
                        isActive ? 'ion-chevron-up' : 'ion-chevron-down',
                    )}
                />
            </Button>
            {isActive && (
                <React.Fragment>
                    <ReactMarkdown
                        className={styles.description}
                        source={description}
                    />
                    <div className={styles.footer}>
                        <a
                            className={styles.applyLink}
                            href={finalUrl}
                            target="_blank"
                            rel="noreferrer noopener"
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
    url: PropTypes.string,
    description: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    setActive: PropTypes.func.isRequired,
    dataKey: PropTypes.number.isRequired,
};

CareerItem.defaultProps = {
    url: undefined,
};

export default CareerItem;
