import React from 'react';
import LogoutButton from '../../Components/Logout';

export default function Game() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Game Home</h5>
                            <LogoutButton/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
