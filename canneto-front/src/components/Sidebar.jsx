import { Link } from 'react-router-dom';

const Sidebar = () => {
	return (
		<div className="rfc-Sidebar">
			<div>
				<button type="button" className="btn btn-primary nav-button fs-5">
					<Link to="/orari/orari" className="nav-link" href="#">
						ORARI
					</Link>
				</button>

				<button type="button" className="btn btn-primary nav-button fs-5">
					<Link to="/app/editoria/home" className="nav-link" href="#">
						EDITORIA
					</Link>
				</button>
				<button type="button" className="btn btn-primary nav-button fs-5">
					<Link to="/app/inni/home" className="nav-link" href="#">
						INNI
					</Link>
				</button>
				<button type="button" className="btn btn-primary nav-button fs-5">
					<Link to="/app/offerte" className="nav-link" href="#">
						OFFERTE
					</Link>
				</button>
				<button type="button" className="btn btn-primary nav-button fs-5">
					<Link
						to="/app/pellegrinaggio/home"
						className="nav-link"
						href="#">
						PELLEGRINAGGIO
					</Link>
				</button>
				<button type="button" className="btn btn-primary nav-button fs-5">
					<Link to="/app/info/contatti" className="nav-link" href="#">
						INFO
					</Link>
				</button>
			</div>
		</div>
	);
};

export default Sidebar;
