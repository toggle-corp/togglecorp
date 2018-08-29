import PropTypes from 'prop-types';
import React from 'react';


const propTypes = {
    className: PropTypes.string,
};

const defaultProps = {
    className: '',
};

const getSignedRandom = () => ((Math.random() * 2) - 1);
const toRadians = degrees => (degrees * Math.PI) / 180;
const manhattanDistance = (a, b) => Math.abs(a.x - b.x) + Math.abs(a.y - b.y);

const createParticles = ({ width, height, count, shape }) => {
    const particles = [];

    for (let i = 0; i < count; i += 1) {
        // Position
        const x = Math.random() * width;
        const y = Math.random() * height;
        const vx = getSignedRandom() * 0.5;
        const vy = getSignedRandom() * 0.5;

        // Angle
        const a = Math.random() * 360;
        const va = getSignedRandom() * 1.23;

        // Scale
        const sy = 0.7 / window.devicePixelRatio;
        const sx = 0.7 / window.devicePixelRatio;

        // Transparency
        const t = Math.random() * 0.5;
        const vt = 0.004 * 0.5;

        const canConnect = i % 4 === 0;

        particles.push({
            x,
            y,
            vx,
            vy,
            a,
            va,
            sx,
            sy,
            t,
            vt,
            shape: shape || (parseInt(Math.random() * 5, 10) + 3),
            canConnect,
        });
    }

    return particles;
};

const updateParticle = (particle, width, height) => {
    const newParticle = {
        ...particle,
        x: particle.x + particle.vx,
        y: particle.y + particle.vy,
        a: particle.a + particle.va,
        t: particle.t + particle.vt,
    };

    if (newParticle.x < 0 || newParticle.x >= width) {
        newParticle.vx *= -1;
    }
    if (newParticle.y < 0 || newParticle.y >= height) {
        newParticle.vy *= -1;
    }
    if (newParticle.t < 0 || newParticle.t >= 0.5) {
        newParticle.vt *= -1;
    }

    return newParticle;
};


export default class ParticleBackground extends React.PureComponent {
    static propTypes = propTypes;
    static defaultProps = defaultProps;

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.containerRef = React.createRef();
    }

    componentDidMount() {
        this.canvas = this.canvasRef.current;
        this.context = this.canvas.getContext('2d');

        setTimeout(() => {
            this.resize();
            this.drawAllParticles();
        }, 50);

        window.addEventListener('resize', this.resize, false);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
        clearTimeout(this.drawTimeout);
    }

    init = () => {
        this.particles = createParticles({
            width: this.canvas.width,
            height: this.canvas.height,
            count: 40,
        });
    }

    resize = () => {
        const { width, height } = this.containerRef.current.getBoundingClientRect();
        this.canvas.width = width;
        this.canvas.height = height;
        this.init();
    }

    drawAllParticles = () => {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.particles.forEach(this.drawParticle);
        this.particles.forEach(this.drawConnectors);
        this.particles = this.particles.map(
            particle => updateParticle(particle, this.canvas.width, this.canvas.height),
        );
        this.drawTimeout = setTimeout(this.drawAllParticles, 1000 / 60);
    }

    drawParticle = (particle) => {
        const { context } = this;

        context.save();

        context.translate(particle.x, particle.y);
        context.rotate(toRadians(particle.a));
        context.scale(particle.sx, particle.sy);

        context.beginPath();
        context.moveTo(
            8 * Math.cos(0),
            8 * Math.sin(0),
        );
        for (let k = 1; k <= particle.shape; k += 1) {
            context.lineTo(
                8 * Math.cos((k * 2 * Math.PI) / particle.shape),
                8 * Math.sin((k * 2 * Math.PI) / particle.shape),
            );
        }

        context.fillStyle = `rgba(231, 76, 60, ${particle.t})`;
        context.fill();

        context.restore();
    }

    drawConnectors = (particle) => {
        if (!particle.canConnect) {
            return;
        }

        const { context, particles } = this;
        const connections = 3;

        // Bucket this to improve efficiency
        const closestParticles = particles
            .map(p => ({
                ...p,
                dist: manhattanDistance(p, particle),
            }))
            .sort((p1, p2) => p1.dist - p2.dist)
            .slice(0, connections);

        context.beginPath();
        context.strokeStyle = 'rgba(231, 76, 60, 0.05)';

        closestParticles
            .forEach((p) => {
                context.moveTo(particle.x, particle.y);
                context.lineTo(p.x, p.y);
            });

        context.stroke();
    }

    render() {
        const { className } = this.props;

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
