import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthLayout from '../pages/_layouts/auth';
import DefaulLayout from '../pages/_layouts/default';

export default function RouteWrapper({
    isPrivate,
    component: Component,
    ...rest
}) {
    const signed = false;

    if (!signed && isPrivate) {
        return <Redirect to="/" />;
    }

    if (signed && !isPrivate) {
        return <Redirect to="/dashboard" />;
    }

    const Layout = signed ? DefaulLayout : AuthLayout;

    return (
        <Route
            {...rest}
            render={props => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    );
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
        .isRequired
};

RouteWrapper.defaultProps = {
    isPrivate: false
};