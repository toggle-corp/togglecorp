import React, { Fragment } from 'react';
import {
    Switch,
    Route,
    withRouter,
} from 'react-router-dom';

import {
    pathNames,
    routesOrder,
    routes,
    views,
} from '#constants';

const ROUTE = {
    public: 'public',
};

// NOTE: withRouter is required here so that link change are updated

@withRouter
export default class Multiplexer extends React.PureComponent {
    renderRoutes = () => (
        routesOrder.map((routeId) => {
            const view = views[routeId];
            if (!view) {
                console.error(`Cannot find view associated with routeID: ${routeId}`);
                return null;
            }
            const path = pathNames[routeId];
            const { type } = routes[routeId];

            switch (type) {
                case ROUTE.public:
                    return (
                        <Route
                            component={view}
                            key={routeId}
                            path={path}
                            exact
                        />
                    );
                default:
                    console.error(`Invalid route type ${type}`);
                    return null;
            }
        })
    )

    render() {
        return (
            <Fragment>
                <div className="no-nav" />
                <div className="main-content">
                    <Switch>
                        { this.renderRoutes() }
                    </Switch>
                </div>
            </Fragment>
        );
    }
}
