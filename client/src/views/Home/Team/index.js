import React from 'react';
import PropTypes from 'prop-types';

import Member from './Member';

import styles from './styles.scss';

const propTypes = {
    className: PropTypes.string,
    members: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

const defaultProps = {
    className: '',
};

export default class Team extends React.PureComponent {
    static propTypes = propTypes;
    static defaultProps = defaultProps;

    render() {
        const {
            className,
            members = [],
        } = this.props;

        return (
            <section
                id="team"
                className={className}
            >
                <h2>
                    Our team
                </h2>
                <div className={styles.members}>
                    {members.map(member => (
                        <Member
                            key={member.id}
                            member={member}
                        />
                    ))}
                </div>
            </section>
        );
    }
}
