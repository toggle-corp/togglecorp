import React from 'react';

import { ParticlesRenderer, ParticleProps } from 'particles-renderer';


export default class ParticleText extends React.PureComponent {
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
            width,
            height,
        };
        const particleProps = {
            color: 'rgb(231, 76, 60)',
        };
        this.renderer = new ParticlesRenderer(canvas, rendererProps, particleProps);
        this.renderer.renderTextParticles('TC', 'Helvetica', 160);
        this.renderer.animate();
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
