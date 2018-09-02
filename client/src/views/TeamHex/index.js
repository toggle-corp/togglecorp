import React from 'react';

import styles from './styles.scss';

export default class TeamMembers extends React.PureComponent {
    render() {
        const {
            members,
        } = this.props;

        return (
            <div className={styles.members} >
                <div className={styles.row}>
                    {members.slice(0, 4).map(m => (
                        <div
                            key={m.key}
                            className={styles.member}
                        >
                            <img
                                className={styles.image}
                                src={m.image}
                                alt={m.name}
                            />
                        </div>
                    ))}
                </div>
                <div className={styles.row}>
                    {members.slice(4, 9).map(m => (
                        <div
                            key={m.key}
                            className={styles.member}
                        >
                            {m.id === 'new' ? (
                                <div className={styles.addContainer} >
                                    <span className={`${styles.addIcon} ion-plus`} />
                                </div>
                            ) : (
                                <img
                                    className={styles.image}
                                    src={m.image}
                                    alt={m.name}
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div className={styles.row}>
                    {members.slice(9, 13).map(m => (
                        <div
                            key={m.key}
                            className={styles.member}
                        >
                            <img
                                className={styles.image}
                                src={m.image}
                                alt={m.name}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
