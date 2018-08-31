import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const propTypes = {
    members: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
    className: PropTypes.string,
};

const defaultProps = {
    className: '',
};

export default class TeamMembers extends React.PureComponent {
    static propTypes = propTypes;
    static defaultProps = defaultProps;

    render() {
        const {
            members,
            className,
        } = this.props;

        const classNames = [styles.members, className];

        return (
            <div className={classNames.join(' ')} >
                {members.map(m => (
                    <div
                        key={m.key}
                        className={styles.member}
                    >
                        <img
                            className={styles.image}
                            src={m.image}
                            alt={m.name}
                        />
                        <div className={styles.description} >
                            <div className={styles.name}>{m.name}</div>
                            <div className={styles.designation}>{m.designation}</div>
                            <div className={styles.links}>
                                <span className={`${styles.link} fa fa-linkedin`} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
