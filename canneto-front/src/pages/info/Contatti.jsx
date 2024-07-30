import 'bootstrap/dist/css/bootstrap.min.css';

const Contatti = () => {
	const openGoogleMaps = () => {
		// Coordinate esatte per il luogo di arrivo
		const destination = '41.678319,13.908228';
		const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
		window.open(url, 'Google Maps', 'width=800,height=600');
	};

	return (
		<div className="container rfc-Contatti py-5">
			<h1 className="text-center text-uppercase fw-bolder mb-4">Contatti</h1>
			<div className="contact-info">
				<div className="row mb-3">
					<div className="col text-center">
						<strong>SANTUARIO DIOCESANO MARIA SS.MA DI CANNETO</strong>
					</div>
				</div>
				<div className="row mb-3">
					<div className="col text-center">
						Via Valle di Canneto n°1 - 03040 Settefrati (FR)
					</div>
				</div>
				<div className="row mb-3">
					<div className="col text-center">
						Tel e Fax: 0776/695462 - 0776/691106
					</div>
				</div>
				<div className="row mb-3">
					<div className="col text-center">
						Abitazione invernale del Rettore: 0776/695041
					</div>
				</div>
				<div className="row mb-3">
					<div className="col text-center">
						Email: info@madonnadicanneto.it{' '}
						<button type="button" className="btn btn-primary">
							<a
								href="mailto:info@madonnadicanneto.it"
								className="text-uppercase text-white text-decoration-none">
								Invia Email
							</a>
						</button>
					</div>
				</div>
				<div className="row mb-3">
					<div className="col text-center">
						PEC: madonnadicanneto@arcmediapec.it{' '}
						<button type="button" className="btn btn-primary">
							<a
								href="mailto:madonnadicanneto@arcmediapec.it"
								className="text-uppercase text-white text-decoration-none">
								Invia PEC
							</a>
						</button>
					</div>
				</div>
				{/* Come Raggiungerci */}
				<div className="row mt-4">
					<div className="col text-center">
						<p>
							Clicca sul bottone qui sotto per aprire Google Maps e
							ottenere indicazioni per raggiungere la Basilica-Santuario
							Regionale Maria Santissima di Canneto.
						</p>
						<button
							type="button"
							className="btn btn-primary"
							onClick={openGoogleMaps}>
							Crea percorso
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contatti;
