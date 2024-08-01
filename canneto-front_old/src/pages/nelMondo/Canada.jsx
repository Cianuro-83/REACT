import { Link } from 'react-router-dom';

const Canada = () => {
	return (
		<div className="rfc-Canada">
			<div className="box-container">
				<Link to="/app/canada/windsor">
					<div className="box">
						<img src="/img/canada.png" alt="canada" />
						<p>Windsor</p>
					</div>
				</Link>
				<Link to="/app/canada/toronto">
					<div className="box">
						<img src="/img/canada.png" alt="canada" />
						<p>Toronto</p>
					</div>
				</Link>
				<Link to="/app/canada/montreal">
					<div className="box">
						<img src="/img/canada.png" alt="canada" />
						<p>Montreal</p>
					</div>
				</Link>
				<Link to="/app/canada/sainte-marguerite-du-lac-masson">
					<div className="box">
						<img src="/img/canada.png" alt="canada" />
						<p>Sainte-Marguerite-duLac-Masson</p>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Canada;
