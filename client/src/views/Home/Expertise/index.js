import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { technologySectionsSelector } from '#redux';

import styles from './styles.scss';

const propTypes = {
    /* eslint-disable-next-line react/forbid-prop-types */
    technologySections: PropTypes.array.isRequired,
};

const mapStateToProps = (state, props) => ({
    technologySections: technologySectionsSelector(state, props),
});


@connect(mapStateToProps)
export default class Expertise extends React.PureComponent {
    static propTypes = propTypes;

    render() {
        const { technologySections } = this.props;

        return (
            <section
                id="expertise"
                className={styles.expertise}
            >
                <h2>
                    Our expertise
                </h2>
                <div className={styles.expertiseGroupList}>
                    {technologySections.map(eg => (
                        <div key={eg.id} className={styles.expertiseGroup}>
                            <ul>
                                {eg.technologies.map(e => (
                                    <li key={e.id}>
                                        <a
                                            href={e.url}
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            <img
                                                src={e.image}
                                                alt={e.name}
                                                title={e.name}
                                            />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}
