import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({component: Component, restricted,appProps,...rest}) => {
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            appProps.isAuthenticated && restricted ?
                <Redirect to="#" />
            : <Component {...props} {...appProps} />
        )} />
    );
};

export default PublicRoute;