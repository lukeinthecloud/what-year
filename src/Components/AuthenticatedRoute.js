import React from 'react';

import {Redirect, Route} from 'react-router-dom';

import {getAuthenticatedState} from '../redux/selectors/authenticated.selectors';
import {connect} from 'react-redux';

function AuthenticatedRoute({component: Component, ...rest}) {
    const isAuthenticated = rest.authenticated;

    function _canProceed(props) {
        return isAuthenticated ? (
            <Component {...props} />
        ) : (
            <Redirect
                to={{
                    pathname: '/login',
                    state: { from: props.location }
                }}
            />
        )
    }

    return (
        <Route
            {...rest}
            render={_canProceed}
        />
    )
}

export default connect(
    getAuthenticatedState
)(AuthenticatedRoute);
