import React from 'react';
import PropTypes from 'prop-types';

import { ParticlesRenderer } from 'particles-renderer';

const propTypes = {
    className: PropTypes.string.isRequired,
};

export default class ParticleText extends React.PureComponent {
    static propTypes = propTypes;

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.containerRef = React.createRef();
    }

    componentDidMount() {
        setTimeout(this.init, 300);
        window.addEventListener('resize', this.init, false);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.init);
    }

    getClassName = () => {
        const { className } = this.props;
        const classNames = [
            className,
            'particle-text',
        ];

        return classNames.join(' ');
    }

    init = () => {
        if (this.renderer) {
            this.renderer.cleanUp();
        }
        const container = this.containerRef.current;
        const canvas = this.canvasRef.current;

        const { width, height } = container.getBoundingClientRect();
        const rendererProps = {
            fps: 60,
            bgColor: 'white',
            particlesSpacing: 5,
            width,
            height,
        };
        const particleProps = {
            color: 'rgb(231, 76, 60)',
            restless: false,
        };
        this.renderer = new ParticlesRenderer(canvas, rendererProps, particleProps);
        this.renderer.renderTextParticles('TC', 'Helvetica', 200);
        this.renderer.start();
    }

    render() {
        const className = this.getClassName();
        return (
            <div
                className={className}
                ref={this.containerRef}
            >
                <canvas ref={this.canvasRef} />
            </div>
        );
    }
}
