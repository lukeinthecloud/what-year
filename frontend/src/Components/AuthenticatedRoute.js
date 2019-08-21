import React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';
import RouteWithSubRoutes          from './RouteWithSubRouter';

import { getAuthenticatedState } from '../redux/selectors/authenticated.selectors';
import { connect }               from 'react-redux';

function AuthenticatedRoute({routes, ...rest}) {
	const isAuthenticated = rest.authenticated;

	function _canProceed(props) {
		return isAuthenticated ? (_renderMainRouteAndSubRoutes()) : (_redirectToLogin(props))
	}

	function _renderMainRouteAndSubRoutes() {
		return (
			<Switch>
				<Route exact path={`${rest.path}`} component={rest.routeComponent}/>
				{
					routes.map((route, index) => (
						<RouteWithSubRoutes key={index} {...route} />
					))
				}
			</Switch>
		)
	}

	function _redirectToLogin(props) {
		return (
			<Redirect
				to={{
					pathname: '/login',
					state: {from: props.location}
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
