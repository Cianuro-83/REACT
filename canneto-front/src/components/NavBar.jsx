const NavBar = () => {
	return (
		<div className="rfc-NavBar">
			<nav className="navbar navbar-expand-lg">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						<img src="/img/Madonna-nav.webp" className="logo" alt="" />
					</a>
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
									<a
										className="nav-link active fs-5"
										aria-current="page"
										href="#">
										Home
									</a>
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
										<li>
											<a className="dropdown-item" href="#">
												Cenni storici
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												Culto Pagano
											</a>
										</li>
										<li>
											<hr className="dropdown-divider" />
										</li>
										<li>
											<a className="dropdown-item" href="#">
												Culto Mariano
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												La Pia Leggenda
											</a>
										</li>
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
							</li>
							<li className="nav-item me-3 mb-md-3">
								<button
									type="button"
									className="btn btn-primary nav-button fs-5">
									<a className="nav-link" href="#">
										STATUA
									</a>
								</button>
							</li>
							<li className="nav-item me-3 mb-md-3">
								<button
									type="button"
									className="btn btn-primary nav-button fs-5">
									<a className="nav-link" href="#">
										S.ANNA
									</a>
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
												Canada
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												Stati Uniti
											</a>
										</li>
										<li>
											<hr className="dropdown-divider" />
										</li>
										<li>
											<a className="dropdown-item" href="#">
												India
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												Messico
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												Perù
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
