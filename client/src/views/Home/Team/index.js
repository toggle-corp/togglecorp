import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { membersSelector } from '#redux';

import styles from './styles.scss';

const propTypes = {
    members: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = (state, props) => ({
    members: membersSelector(state, props),
});

@connect(mapStateToProps)
export default class Team extends React.PureComponent {
    static propTypes = propTypes;

    renderTeamMembers = ({
        members,
        className,
    }) => {
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
                                {
                                    m.membersUrls.map(url => (
                                        <a
                                            key={url.id}
                                            href={url.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span className={`${styles.link} fa fa-${url.type.name}`} />
                                        </a>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    render() {
        const { members } = this.props;
        const TeamMembers = this.renderTeamMembers;

        return (
            <section
                id="team"
                className={styles.team}
            >
                <h2>
                    Our team
                </h2>
                <TeamMembers
                    members={members}
                    className={styles.teamList}
                />
            </section>
        );
    }
}
