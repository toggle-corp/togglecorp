import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { _cs } from '@togglecorp/fujs';

import List from '#rscv/List';
import footerOverlay from '#resources/img/polka-bg-footer.png';
import AnchorLink from '#components/AnchorLink';

import Header from './Header';
import styles from './styles.scss';

const propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
};

const defaultProps = {
    className: '',
};

const footerMenuList = [
    {
        id: 1,
        title: 'Home',
        link: '#home',
    },
    {
        id: 2,
        title: 'Services',
        link: '#services',
    },
    {
        id: 3,
        title: 'Expertise',
        link: '#expertise',
    },
    {
        id: 4,
        title: 'Clients',
        link: '#clients',
    },
    {
        id: 5,
        title: 'Team',
        link: '#team',
    },
];

const socialList = [
    {
        id: 1,
        name: 'twitter',
        link: 'www.twitter.com',
        icon: 'fa fa-twitter',
    },
    {
        id: 2,
        name: 'facebook',
        link: 'www.facebook.com',
        icon: 'fa fa-facebook-f',
    },
    {
        id: 3,
        name: 'linkedin',
        link: 'www.linkedin.com',
        icon: 'fa fa-linkedin',
    },
];

const footerMenuKeyExtractor = footerMenu => footerMenu.id;
const footerMenuRendererParams = (key, footerMenu) => ({
    children: footerMenu.title,
    href: footerMenu.link,
});

const socialKeyExtractor = social => social.id;
const socialRendererParams = (key, social) => ({ social });
const socialRenderer = ({
    social: {
        link,
        icon,
    },
}) => (
    <AnchorLink href={link}>
        <i className={icon} />
    </AnchorLink>
);
socialRenderer.propTypes = {
    social: PropTypes.object.isRequired,
};

export default class Footer extends React.PureComponent {
    static propTypes = propTypes;
    static defaultProps = defaultProps;

    render() {
        const {
            className,
            title,
        } = this.props;

        return (
            <section
                id="team"
                className={_cs(
                    className,
                    styles.footerSection,
                )}
            >
                <div className={styles.overlayBlock}>
                    <img
                        src={footerOverlay}
                        alt="abstract overlay"
                    />
                </div>
                <div className={styles.containerBlock}>
                    <div className={styles.footerInner}>
                        <div className={styles.footerItem}>
                            <Header
                                title="Contact Information"
                            />
                            <p>
                                <i className="fa fa-map-marker" />
                                <span>
                                    Jawalakhel, Patan, Nepal
                                </span>
                            </p>
                            <p>
                                <i className={_cs('fa fa-envelope', styles.mails)} />
                                <span>
                                    <a href="mailto:info@togglecorp.com">
                                        info@togglecorp.com
                                    </a>
                                </span>
                            </p>
                            <p>
                                <i className="fa fa-mobile" />
                                <span>
                                    <a href="tel:+977-9841919399">
                                        +977-9841919399
                                    </a>
                                </span>
                            </p>
                        </div>
                        <div className={styles.footerItem}>
                            <Header
                                title="Quick Links"
                            />
                            <ul>
                                <List
                                    data={footerMenuList}
                                    keyExtractor={footerMenuKeyExtractor}
                                    renderer={AnchorLink}
                                    rendererParams={footerMenuRendererParams}
                                />
                            </ul>

                        </div>
                        <div className={styles.footerItem}>
                            <Header
                                title="Follow US"
                            />
                            <ul className={styles.horizontalList}>
                                <List
                                    className={styles.socialList}
                                    data={socialList}
                                    keyExtractor={socialKeyExtractor}
                                    renderer={socialRenderer}
                                    rendererParams={socialRendererParams}
                                />
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.footNote}>
                    ToggleCorp Solutions Pvt. Ltd | 2019
                </div>
            </section>
        );
    }
}
