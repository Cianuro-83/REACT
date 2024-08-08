import { Link } from 'react-router-dom';

const StatiUniti = () => {
	return (
		<div className="rfc-StatiUniti">
			<h1 className="text-center text-uppercase fw-bolder">
				stati uniti d'america
			</h1>
			stati uniti d'america
			<div className="box-container">
				<Link to="/app/usa/broks">
					<div className="box">
						<img src="/img/usa.png" alt="usa" />
						<p>Bronks</p>
					</div>
				</Link>
				<Link to="/app/usa/milford">
					<div className="box">
						<img src="/img/usa.png" alt="usa" />
						<p>Milford</p>
					</div>
				</Link>
				<Link to="/app/usa/new-canaan">
					<div className="box">
						<img src="/img/usa.png" alt="usa" />
						<p>New Canaan</p>
					</div>
				</Link>
				<Link to="/app/usa/stanford">
					<div className="box">
						<img src="/img/usa.png" alt="usa" />
						<p>Stanford</p>
					</div>
				</Link>
				<Link to="/app/usa/whitestone">
					<div className="box">
						<img src="/img/usa.png" alt="usa" />
						<p>Whitestone</p>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default StatiUniti;
