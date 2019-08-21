import React    from 'react';
import { Link } from 'react-router-dom';

export default function GameNew() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
					<div className="card card-signin my-5">
						<div className="card-body">
							<h5 className="card-title text-center">New Game</h5>
							<Link to="/game/123">123</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
