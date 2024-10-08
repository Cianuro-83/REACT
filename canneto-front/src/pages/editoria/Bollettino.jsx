import React from 'react';

const Bollettino = () => {
	const openFloatingWindow = (e) => {
		e.preventDefault();
		window.open(
			'https://mega.nz/file/DGZgiCIK#PMhokYYZn7zv_nJ5IozqNzhGlWCpgV483Zty_MrEReI',
			'Bollettino',
			'width=800,height=600,scrollbars=yes,resizable=yes'
		);
	};

	return (
		<div className="rfc-Bollettino">
			<h1 className="text-center text-uppercase fw-bolder">
				Bollettino quadrimestrale illustrato
			</h1>
			<p>
				Dopo una pausa di silenzio, per la tipografia Arte Stampa Editore
				(Roccasecca – Fr), dal dicembre 2003, è tornato a far sentire forte
				la sua voce “Il Santuario di Canneto. Bollettino illustrato
				quadrimestrale”. Esso vuole essere uno strumento di dialogo e di
				comunicazione non solo per creare una più attiva e consapevole
				partecipazione alle molteplici iniziative che si svolgono nel
				Santuario ma per aiutare anche tutti coloro che vogliono realizzare
				in pienezza l’esperienza del pellegrinaggio - e quindi - della fede,
				della speranza e della carità.
			</p>
			<div className="d-flex justify-content-center">
				<a
					href="https://mega.nz/file/DGZgiCIK#PMhokYYZn7zv_nJ5IozqNzhGlWCpgV483Zty_MrEReI"
					onClick={openFloatingWindow}
					target="_blank"
					rel="noopener noreferrer">
					<img
						src="/img/editoria/bollettino 56-57.webp"
						style={{ height: '300px' }}
						alt="Bollettino"
						className="bollettino-img"
					/>
				</a>
			</div>
		</div>
	);
};

export default Bollettino;
