import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
                className={className}
            >
                <h2>
                    Our team
                </h2>
                {members.length > 0 && (
                    <ListView
                        className={styles.members}
                        data={members}
                        keyExtractor={keyExtractor}
                        renderer={Member}
                        rendererParams={rendererParams}
                    />
                )}
            </section>
        );
    }
}
