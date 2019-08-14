import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

import RouteWithSubRoutes from './Components/RouteWithSubRouter';
import {routes} from './routers.config';

export default function AppRouter() {
    return (
        <Router>
            <div className='container-fluid'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <span className="navbar-brand">What Year</span>
                    <div className="navbar" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/">Home</Link>
                                <Link to="/game">Game</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                {
                    routes.map((route, index) => (
                            <RouteWithSubRoutes key={index} {...route} />
                        )
                    )
                }
            </div>
        </Router>
    );
}
