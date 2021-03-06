import React, { useState } from 'react';
import { connect }         from 'react-redux'

import { setAuthenticated }       from '../redux/actions/authenticated.action';
import * as authenticationService from '../services/authentication/authentication.service';

function Login(props) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	async function loginClickHandler(e) {
		e.preventDefault();
		const response = await authenticationService.registerUser({
			username,
			password
		});

		console.log(response);
	}

	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
					<div className="card card-signin my-5">
						<div className="card-body">
							<h5 className="card-title text-center">Sign In</h5>
							<form className="form-signin">
								<div className="form-label-group">
									<input type="email"
									       id="inputEmail"
									       className="form-control"
									       placeholder="Email address"
									       value={username}
									       onChange={e => setUsername(e.target.value)}
									       required
									       autoFocus/>
									<label htmlFor="inputEmail">Email address</label>
								</div>

								<div className="form-label-group">
									<input type="password"
									       id="inputPassword"
									       className="form-control"
									       placeholder="Password"
									       value={password}
									       onChange={e => setPassword(e.target.value)}
									       required/>
									<label htmlFor="inputPassword">Password</label>
								</div>

								<div className="custom-control custom-checkbox mb-3">
									<input type="checkbox" className="custom-control-input" id="customCheck1"/>
									<label className="custom-control-label" htmlFor="customCheck1">Remember
										password</label>
								</div>
								<button onClick={loginClickHandler}
								        className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">
									Sign in
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function mapStateToProps({authenticated}) {
	return {authenticated}
}

export default connect(
	mapStateToProps,
	{
		setAuthenticated
	}
)(Login);
