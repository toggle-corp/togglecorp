import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { technologySectionsSelector } from '#redux';

import styles from './styles.scss';

const propTypes = {
    className: PropTypes.string,
    technologySections: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = (state, props) => ({
    technologySections: technologySectionsSelector(state, props),
});

const defaultProps = {
    className: '',
};

@connect(mapStateToProps)
export default class Expertise extends React.PureComponent {
    static propTypes = propTypes;
    static defaultProps = defaultProps;

    render() {
        const {
            className,
            technologySections,
        } = this.props;

        return (
            <section
                id="expertise"
                className={className}
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
