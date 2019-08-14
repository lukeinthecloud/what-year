import React from 'react';
import {Link} from 'react-router-dom';

import LogoutButton from '../../Components/Logout';
import RouteWithSubRoutes from '../../Components/RouteWithSubRouter';

export default function Game({routes}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Game Home</h5>
                            <Link to="/game/new">Game New</Link>
                            <LogoutButton/>
                        </div>
                    </div>
                </div>
            </div>


            {
                routes.map((route, index) => (
                        <RouteWithSubRoutes key={index} {...route} />
                    )
                )
            }
        </div>
    );
}
