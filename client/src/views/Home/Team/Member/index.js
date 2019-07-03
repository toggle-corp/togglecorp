import React from 'react';
import PropTypes from 'prop-types';
import { _cs } from '@togglecorp/fujs';

import ListView from '#rscv/List/ListView';
import AnchorLink from '#components/AnchorLink';

import styles from './styles.scss';


const propTypes = {
    member: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const keyExtractor = member => member.id;
const rendererParams = (key, memberUrl) => ({ memberUrl });

const MemberUrl = ({ memberUrl }) => (
    <AnchorLink
        key={memberUrl.id}
        href={memberUrl.url}
        target="_blank"
        rel="noopener noreferrer"
    >
        <span className={_cs(
            styles.link,
            'fa',
            `fa-${memberUrl.type.name}`,
        )}
        />
    </AnchorLink>
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
                <span className={styles.overlayMember} />
                <img
                    className={styles.image}
                    src={member.image}
                    alt={member.name}
                />
                <div className={styles.description} >
                    <div className={styles.name}>{member.name}</div>
                    <div className={styles.designation}>{member.designation}</div>
                    <ListView
                        className={styles.links}
                        data={member.membersUrls}
                        keyExtractor={keyExtractor}
                        renderer={MemberUrl}
                        rendererParams={rendererParams}
                    />
                </div>
            </div>
        );
    }
}
