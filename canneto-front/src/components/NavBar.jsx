import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleMenu = () => {
		setIsExpanded(!isExpanded);
	};

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
						aria-expanded={isExpanded}
						aria-label="Toggle navigation"
						onClick={toggleMenu}>
						<span className="navbar-toggler-icon">
							{isExpanded ? (
								<span>&times;</span> // X icon
							) : (
								<span className="navbar-toggler-icon" /> // Hamburger icon
							)}
						</span>
					</button>
					<div
						className={`collapse navbar-collapse ${
							isExpanded ? 'show' : ''
						}`}
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
											<Link to="chiesa/dal-719-al-xix-secolo">
												<a className="dropdown-item" href="#">
													Dal origini al XIX secolo
												</a>
											</Link>
										</li>
										<li>
											<Link to="chiesa/xx-secolo">
												<a className="dropdown-item" href="#">
													Il XX secolo
												</a>
											</Link>
										</li>
										<li>
											<Link to="chiesa/xxi-secolo">
												<a className="dropdown-item" href="#">
													il XXI secolo
												</a>
											</Link>
										</li>

										<li>
											<hr className="dropdown-divider" />
										</li>
										<Link to="chiesa/casa-pellegrino">
											<a className="dropdown-item" href="#">
												Casa del Pellegrino
											</a>
										</Link>
									</ul>
								</button>
							</li>

							<li className="nav-item me-3 mb-md-3 ">
								<button
									type="button"
									className="btn btn-primary nav-button">
									<Link
										to="/app/statua"
										className="nav-link  fs-5"
										aria-current="page"
										href="#">
										STATUA
									</Link>
								</button>
							</li>
							<li className="nav-item me-3 mb-md-3 ">
								<button
									type="button"
									className="btn btn-primary nav-button">
									<Link
										to="/app/sant-anna"
										className="nav-link fs-5"
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
