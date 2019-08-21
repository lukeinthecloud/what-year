import React from 'react';

import { Route }          from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute';

export default function RouteWithSubRoutes(route) {
	function _generateRouteType() {
		return route.requiresAuthentication ? _renderAuthenticatedRoute() : _renderRoute()
	}

	function _renderAuthenticatedRoute() {
		return (
			<AuthenticatedRoute path={route.path} routeComponent={route.component} routes={route.routes}/>
		)
	}

	function _renderRoute() {
		return (
			<Route
				exact={route.isExact}
				path={route.path}
				render={props => (
					<route.component exact={props.isExact} {...props} routes={route.routes}/>
				)}
			/>
		)
	}

	return (
		<>
			{_generateRouteType()}
		</>
	);
}
