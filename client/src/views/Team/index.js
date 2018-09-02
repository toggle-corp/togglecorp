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
                        key={m.id}
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
                                {m.linkedin &&
                                <a
                                    href={m.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className={`${styles.link} fa fa-linkedin`} />
                                </a>
                                }
                                {m.github &&
                                <a
                                    href={m.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className={`${styles.link} fa fa-github`} />
                                </a>
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
