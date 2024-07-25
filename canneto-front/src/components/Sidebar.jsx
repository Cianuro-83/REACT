const Sidebar = () => {
	return (
		<div className="rfc-Sidebar">
			<div>
				<button type="button" className="btn btn-primary nav-button fs-5">
					<a className="nav-link" href="#">
						ORARI
					</a>
				</button>
				<button type="button" className="btn btn-primary nav-button fs-5">
					<a className="nav-link" href="#">
						EDITORIA
					</a>
				</button>
				<button type="button" className="btn btn-primary nav-button fs-5">
					<a className="nav-link" href="#">
						INNI
					</a>
				</button>
				<button type="button" className="btn btn-primary nav-button fs-5">
					<a className="nav-link" href="#">
						OFFERTE
					</a>
				</button>
				<button type="button" className="btn btn-primary nav-button fs-5">
					<a className="nav-link" href="#">
						PELLEGRINAGGIO
					</a>
				</button>
				<button type="button" className="btn btn-primary nav-button fs-5">
					<a className="nav-link" href="#">
						INFO
					</a>
				</button>
			</div>
		</div>
	);
};

export default Sidebar;
