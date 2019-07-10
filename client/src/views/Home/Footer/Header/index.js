import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

export default class Header extends React.PureComponent {
    static propTypes = {
        title: PropTypes.string,
    };
    static defaultProps = {
        title: '',
    };

    render() {
        const { title } = this.props;
        return (
            <h3 className={styles.menuTitle}>
                {title}
            </h3>
        );
    }
}
