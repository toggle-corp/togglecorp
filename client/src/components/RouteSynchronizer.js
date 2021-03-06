import Helmet from 'react-helmet';
import React, { Fragment } from 'react';

import Bundle from '#rscg/Bundle';

export default ({ name, ...otherProps }) => (
    <Fragment>
        <Helmet>
            <meta charSet="utf-8" />
            <title>
                Togglecorp
            </title>
        </Helmet>
        <Bundle name={name} {...otherProps} />
    </Fragment>
);
