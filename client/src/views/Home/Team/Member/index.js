import React from 'react';
import PropTypes from 'prop-types';
import { _cs } from '@togglecorp/fujs';

import ListView from '#rscv/List/ListView';
import AnchorLink from '#components/AnchorLink';

import styles from './styles.scss';


const propTypes = {
    member: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
const emptyObject = {};
const keyExtractor = member => member.id;
const rendererParams = (key, memberUrl) => {
    const {
        id,
        url,
        type,
    } = memberUrl;
    return { id, url, type };
};

const MemberUrl = ({
    id,
    url,
    type,
}) => (
    <AnchorLink
        key={id}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
    >
        <span className={_cs(
            styles.link,
            'fa',
            `fa-${(type || emptyObject).name}`,
        )}
        />
    </AnchorLink>
);
MemberUrl.propTypes = {
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};


export default class Member extends React.PureComponent {
    static propTypes = propTypes;

    render() {
        const {
            member: {
                image,
                name,
                designation,
                membersUrls,
            },
        } = this.props;

        return (
            <div className={styles.member} >
                <span className={styles.overlayMember} />
                <img
                    className={styles.image}
                    src={image}
                    alt={name}
                />
                <div className={styles.description} >
                    <div className={styles.name}>
                        {name}
                    </div>
                    <div className={styles.designation}>
                        {designation}
                    </div>
                    <ListView
                        className={styles.links}
                        data={membersUrls}
                        keyExtractor={keyExtractor}
                        renderer={MemberUrl}
                        rendererParams={rendererParams}
                    />
                </div>
            </div>
        );
    }
}
