import React from 'react';


export default class AnchorLink extends React.PureComponent {
    handleClick = (e) => {
        const { href } = this.props;
        if (!href || !href.startsWith('#')) {
            return;
        }

        e.preventDefault();
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth',
        });
    }

    render() {
        const { href, children, ...otherProps } = this.props;
        return (
            <a
                {...otherProps}
                href={href}
                onClick={this.handleClick}
            >
                {children}
            </a>
        );
    }
}
