import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import footerOverlay from '#resources/img/polka-bg-footer.png';
import AnchorLink from '#components/AnchorLink';

import Header from './Header';
import styles from './styles.scss';

const propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired, // eslint-disable-line react/forbid-prop-types
};

const defaultProps = {
    className: '',
};

const footerMenuList = [
    {
        id: 1,
        menuTitle: 'Home',
        menuLink: 'home',
    },
    {
        id: 2,
        menuTitle: 'Services',
        menuLink: 'services',
    },
    {
        id: 3,
        menuTitle: 'Expertise',
        menuLink: 'expertise',
    },
    {
        id: 4,
        menuTitle: 'Clients',
        menuLink: 'clients',
    },
    {
        id: 5,
        menuTitle: 'Team',
        menuLink: 'team',
    },
];

const socialList = [
    {
        id: 1,
        socialName: 'twitter',
        socialLink: 'www.twitter.com',
        socialIcon: 'fa fa-twitter',
    },
    {
        id: 2,
        socialName: 'facebook',
        socialLink: 'www.facebook.com',
        socialIcon: 'fa fa-facebook-f',
    },
    {
        id: 3,
        socialName: 'linkedin',
        socialLink: 'www.linkedin.com',
        socialIcon: 'fa fa-linkedin',
    },
];
const rendererParams = (key, member) => ({ member });

export default class Footer extends React.PureComponent {
    static propTypes = propTypes;
    static defaultProps = defaultProps;

    render() {
        const { className, title } = this.props;

        return (
            <section
                id="team"
                className={`${className} ${styles.footerSection}`}
            >
                <div className={styles.overlayBlock}>
                    <img src={footerOverlay} alt="abstract overlay" />
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
                                <i className="fa fa-envelope" />
                                <span>
                                    <a href="mailto:info@togglecorp.com">
                                        info@togglecorp.com
                                    </a>
                                </span>
                            </p>
                            <p>
                                <i className="fa fa-mobile" />
                                <span>
                                    <a href="tel:+977-9841969697">
                                        +977-9841969697
                                    </a>
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
                                {footerMenuList.map(menuItem => (
                                    <li key={menuItem.id}>
                                        <AnchorLink
                                            href={`#${menuItem.menuLink}`}
                                        >
                                            {menuItem.menuTitle}
                                        </AnchorLink>
                                    </li>
                                ))}
                            </ul>

                        </div>
                        <div className={styles.footerItem}>
                            <Header
                                title="Follow US"
                            />
                            <ul className={styles.horizontalList}>
                                {socialList.map(socialItem => (
                                    <li key={socialItem.id}>
                                        <AnchorLink
                                            className={styles.socialStyle}
                                            href={socialItem.socialList}
                                        >
                                            <i className={socialItem.socialIcon} />
                                        </AnchorLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
