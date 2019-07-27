import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Login from './Containers/Login';
import Home from './Containers/Home';
import GameRouter from './Containers/Game/GameRouter';
import AuthenticatedRoute from './Components/AuthenticatedRoute';

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

                <Route path="/" exact component={Home}/>
                <Route path="/login" component={Login}/>
                <AuthenticatedRoute path="/game" component={GameRouter}/>
            </div>
        </Router>
    );
}
