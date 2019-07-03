import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { _cs } from '@togglecorp/fujs';

import teamOverlay from '#resources/img/triangular-spikes-bg.png';
import ListView from '#rscv/List/ListView';

import { membersSelector } from '#redux';

import Member from './Member';

import styles from './styles.scss';

const propTypes = {
    className: PropTypes.string,
    members: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = (state, props) => ({
    members: membersSelector(state, props),
});

const defaultProps = {
    className: '',
};

const keyExtractor = member => member.id;
const rendererParams = (key, member) => ({ member });


@connect(mapStateToProps)
export default class Team extends React.PureComponent {
    static propTypes = propTypes;
    static defaultProps = defaultProps;

    render() {
        const {
            className,
            members,
        } = this.props;

        return (
            <section
                id="team"
                className={_cs(className, styles.teamSection)}
            >
                <div className={styles.overlayBlock}>
                    <img src={teamOverlay} alt="abstract overlay" />
                </div>
                <div className={styles.containerBlock}>
                    <h2>
                        Our team
                    </h2>
                    <ListView
                        className={styles.members}
                        data={members}
                        keyExtractor={keyExtractor}
                        renderer={Member}
                        rendererParams={rendererParams}
                    />
                </div>
            </section>
        );
    }
}
