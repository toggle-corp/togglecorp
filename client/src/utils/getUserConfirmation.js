import React from 'react';
import ReactDOM from 'react-dom';
import Confirm from '#rscv/Modal/Confirm';

const getUserConfirmation = (message, confirm) => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    const confirmWithCleanup = (result) => {
        ReactDOM.unmountComponentAtNode(container);
        document.body.removeChild(container);
        confirm(result);
    };

    ReactDOM.render(
        <Confirm
            show
            onClose={(result) => { confirmWithCleanup(result); }}
        >
            <p>{ message }</p>
        </Confirm>,
        container,
    );
};

export default getUserConfirmation;
