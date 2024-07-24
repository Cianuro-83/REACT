import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="rfc-Home">
			<div className="bande">
				<h2 className="text-uppercase text-center mt-5 fw-bolder">
					basilica - santuario regionale
				</h2>
			</div>
			<div className="centrale">
				<button
					type="button"
					className="btn btn-success btn-lg orari text-uppercase fw-bolder">
					<img src="/img/orari.webp" alt="" className="icona-home" />
					<br /> orari
				</button>

				<Link to="/app/realhome">
					<div className="img-container">
						<img
							src="/img/MADONNA.webp"
							alt="Madonna"
							className="sfondo"
						/>
					</div>
					<button
						type="button"
						className="btn btn-success btn-lg entra text-uppercase fw-bolder">
						<img src="/img/entra.WEBP" alt="" className="icona-home" />{' '}
						<br />
						entra
					</button>
				</Link>
			</div>
			<div className="bande py-3">
				<h2 className="text-uppercase text-center mb-5 fw-bolder">
					Santa maria di canneto
				</h2>
			</div>
		</div>
	);
};

export default Home;
