import { Link } from 'react-router-dom';

const EditoriaHome = () => {
	return (
		<div className="rfc-EditoriaHome">
			<h1 className="text-center text-uppercase fw-bolder">editoria</h1>
			<p>Il Santuario dispone di tre pubblicazioni</p>
			<div className="ms-5">
				<p className="fw-bolder fs-5">
					1. <br />
					<Link to="/app/editoria/bollettino">
						<p className="ms-3">
							<br />
							Il "Bollettino", che esce quadrimestralmente, per
							notificare l'attività del Santuario, i programmi e le
							iniziative. Ha carattere divulgativo perché i pellegrini
							possano essere messi costantemente a conoscenza di tutto
							ciò che avviene nella Valle di Canneto. <br />
							<button
								type="button"
								className="btn btn-primary text-uppercase">
								visualizza
							</button>
						</p>
					</Link>
				</p>
				<p className="fw-bolder fs-5 mt-5">
					2. <br />
					<Link to="/app/editoria/quaderni">
						<p className="ms-3">
							<br />I "Quaderni", che hanno uscita annuale e trattano di
							specifiche tematiche teologiche e mariologiche legate a
							ricorrenze fondamentali della Chiesa universale o della
							Chiesa locale. Sono diretti essenzialmente a sacerdoti,
							insegnanti, catechisti e operatori pastorali desiderosi di
							approfondimenti specialistici. <br />
							<button
								type="button"
								className="btn btn-primary text-uppercase">
								visualizza
							</button>
						</p>
					</Link>
				</p>
				<p className="fw-bolder fs-5 mt-5">
					3. <br />
					<Link to="/app/editoria/calendari">
						<p className="ms-3">
							<br />
							Il "Calendario", che viene realizzato per scandire le tappe
							dell'anno in corso alla luce di alcune foto storiche
							riguardanti il santuario. <br />
							<button
								type="button"
								className="btn btn-primary text-uppercase">
								visualizza
							</button>
						</p>
					</Link>
				</p>
				<Link to="/app/editoria/testi">
					<p className="fw-bolder fs-5 mt-5">
						Inoltre patrocina "Testi" riguardanti la storia, la
						spiritualità e le feste liturgiche del Santuario. <br />
						<button
							type="button"
							className="btn btn-primary text-uppercase">
							visualizza
						</button>
					</p>
				</Link>
				<p>
					Le entrate raccolte a sostegno di queste pubblicazioni vengono
					tutte deferite dall'Amministrazione del Santuario per sostenere
					l'attività di ristrutturazione e rifinitura.
				</p>
			</div>
		</div>
	);
};

export default EditoriaHome;
