import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { _cs } from '@togglecorp/fujs';

import clientsOverlay from '#resources/img/spikes-building-bg.png';

import ListView from '#rscv/List/ListView';

import { clientsSelector } from '#redux';

import styles from './styles.scss';

const propTypes = {
    className: PropTypes.string,
    clients: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = (state, props) => ({
    clients: clientsSelector(state, props),
});

const defaultProps = {
    className: '',
};

const KeyExtractor = member => member.id;
const RendererParams = (key, value) => {
    const {
        id,
        url,
        image,
        name,
    } = value;
    return { id, url, image, name };
};

const Client = ({
    id,
    url,
    image,
    name,
}) => (
    <div
        key={id}
        className={styles.client}
    >
        <div className={styles.clientInner}>
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
    </div>
);
Client.propTypes = {
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};


@connect(mapStateToProps)
export default class Clients extends React.PureComponent {
    static propTypes = propTypes;
    static defaultProps = defaultProps;

    render() {
        const {
            className,
            clients,
        } = this.props;

        return (
            <section
                id="clients"
                className={_cs(
                    className,
                    styles.clientsSection,
                )}
            >
                <div className={styles.overlayBlock}>
                    <img
                        src={clientsOverlay}
                        alt="spike background"
                    />
                </div>
                <div className={styles.containerBlock}>
                    <h2>
                        {'Organizations we\'ve worked with'}
                    </h2>
                    <ListView
                        className={styles.clientList}
                        data={clients}
                        keyExtractor={KeyExtractor}
                        renderer={Client}
                        rendererParams={RendererParams}
                    />
                </div>
            </section>
        );
    }
}
