import React from 'react';
import PropTypes from 'prop-types';

import ListView from '#rscv/List/ListView';

import styles from './styles.scss';

const propTypes = {
    member: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const keyExtractor = member => member.id;
const rendererParams = (key, memberUrl) => ({ memberUrl });

const MemberUrl = ({ memberUrl }) => (
    <a
        key={memberUrl.id}
        href={memberUrl.url}
        target="_blank"
        rel="noopener noreferrer"
    >
        <span className={`${styles.link} fa fa-${memberUrl.type.name}`} />
    </a>
);
MemberUrl.propTypes = {
    memberUrl: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};


export default class Member extends React.PureComponent {
    static propTypes = propTypes;

    render() {
        const { member } = this.props;

        return (
            <div className={styles.member} >
                <img
                    className={styles.image}
                    src={member.image}
                    alt={member.name}
                />
                <div className={styles.description} >
                    <div className={styles.name}>{member.name}</div>
                    <div className={styles.designation}>{member.designation}</div>
                    {member.membersUrls.length > 0 && (
                        <ListView
                            className={styles.links}
                            data={member.membersUrls}
                            keyExtractor={keyExtractor}
                            renderer={MemberUrl}
                            rendererParams={rendererParams}
                        />
                    )}
                </div>
            </div>
        );
    }
}
