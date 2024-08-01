import { Link } from 'react-router-dom';
const NavBar = () => {
	return (
		<div className="rfc-NavBar">
			<nav className="navbar navbar-expand-lg">
				<div className="container-fluid">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-center">
							<li className="nav-item me-3 mb-md-3 ">
								<button
									type="button"
									className="btn btn-primary nav-button">
									<Link
										to="/app/realhome"
										className="nav-link active fs-5"
										aria-current="page"
										href="#">
										Home
									</Link>
								</button>
							</li>
							<li className="nav-item dropdown me-3 mb-md-3">
								<button
									type="button"
									className="btn btn-primary nav-button">
									<a
										className="nav-link dropdown-toggle fs-5"
										href="#"
										id="navbarDropdown"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false">
										STORIA
									</a>
									<ul
										className="dropdown-menu"
										aria-labelledby="navbarDropdown">
										<Link
											to="/app/storia/cenni-storici"
											className="nav-link active fs-5"
											aria-current="page"
											href="#">
											<li>
												<a className="dropdown-item" href="#">
													Cenni storici
												</a>
											</li>
										</Link>
										<Link
											to="/app/storia/culto-pagano"
											className="nav-link active fs-5"
											aria-current="page"
											href="#">
											<li>
												<a className="dropdown-item" href="#">
													Culto Pagano
												</a>
											</li>
										</Link>
										<Link
											to="/app/storia/culto-mariano"
											className="nav-link active fs-5"
											aria-current="page"
											href="#">
											<li>
												<a className="dropdown-item" href="#">
													Culto Mariano
												</a>
											</li>
										</Link>
										<Link
											to="/app/storia/pia-leggenda"
											className="nav-link active fs-5"
											aria-current="page"
											href="#">
											<li>
												<a className="dropdown-item" href="#">
													La Pia Leggenda
												</a>
											</li>
										</Link>
									</ul>
								</button>
							</li>
							<li className="nav-item dropdown me-3 mb-md-3">
								<button
									type="button"
									className="btn btn-primary nav-button">
									<a
										className="nav-link dropdown-toggle fs-5"
										href="#"
										id="navbarDropdown"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false">
										CHIESA
									</a>
									<ul
										className="dropdown-menu"
										aria-labelledby="navbarDropdown">
										<li>
											<a className="dropdown-item" href="#">
												Il vecchio edificio
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												Il nuovo edificio
											</a>
										</li>
										<li>
											<hr className="dropdown-divider" />
										</li>
										<li>
											<a className="dropdown-item" href="#">
												La casa del Pellegrino
											</a>
										</li>
									</ul>
								</button>
								<button
									type="button"
									className="btn btn-primary nav-button">
									<Link
										to="/app/statua"
										className="btn btn-primary nav-button fs-5"
										aria-current="page"
										href="#">
										STATUA
									</Link>
								</button>
								<button
									type="button"
									className="btn btn-primary nav-button">
									<Link
										to="/app/sant-anna"
										className="btn btn-primary nav-button fs-5"
										aria-current="page"
										href="#">
										S. ANNA
									</Link>
								</button>
							</li>

							<li className="nav-item dropdown">
								<button
									type="button"
									className="btn btn-primary nav-button">
									<a
										className="nav-link dropdown-toggle fs-5"
										href="#"
										id="navbarDropdown"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false">
										NEL MONDO
									</a>
									<ul
										className="dropdown-menu"
										aria-labelledby="navbarDropdown">
										<li>
											<a className="dropdown-item" href="#">
												<Link to="/app/canada">Canada</Link>
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												<Link to="/app/stati-uniti">
													Stati Uniti
												</Link>
											</a>
										</li>
										<li>
											<hr className="dropdown-divider" />
										</li>
										<li>
											<a className="dropdown-item" href="#">
												<Link to="/app/india">India</Link>
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												<Link to="/app/messico">Messico</Link>
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												<Link to="/app/peru">Perù</Link>
											</a>
										</li>
									</ul>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
