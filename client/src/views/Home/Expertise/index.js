import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { _cs } from '@togglecorp/fujs';

import ListView from '#rscv/List/ListView';
import List from '#rscv/List';

import { technologySectionsSelector } from '#redux';

import styles from './styles.scss';

const keyExtractor = row => row.id;
// Technology Renderer Params
const tRendererParams = (key, technology) => ({ technology });
// Technology Section Renderer Params
const tsRendererParams = (key, technologySection) => ({ technologySection });

const Technology = ({
    technology: {
        url,
        name,
        image,
    },
}) => (
    <div className={styles.listInner}>
        <a
            href={url}
            rel="noopener noreferrer"
            target="_blank"
        >
            <img
                src={image}
                alt={name}
                title={name}
            />
        </a>
    </div>
);
Technology.propTypes = {
    technology: PropTypes.object.isRequired,
};

const TechnologySection = ({ technologySection }) => (
    <List
        data={technologySection.technologies}
        keyExtractor={keyExtractor}
        renderer={Technology}
        rendererParams={tRendererParams}
    />
);
TechnologySection.propTypes = {
    technologySection: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};


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
                className={_cs(className, styles.expertiseSection)}
            >
                <div className={styles.containerBlock}>
                    <h2>
                        Our expertise
                    </h2>
                    <ListView
                        className={styles.expertiseGroupList}
                        data={technologySections}
                        keyExtractor={keyExtractor}
                        renderer={TechnologySection}
                        rendererParams={tsRendererParams}
                    />
                </div>
            </section>
        );
    }
}
