import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<>
			<div className="text-uppercase text-center fw-bolder titolo">
				<h1>
					basilica - santuario regionale <br />
					santa maria di canneto
				</h1>
			</div>
			<div className="holy">
				<img src="/img/MADONNA.webp" alt="" className="madonna" />
			</div>
			<div className="action">
				<button
					type="button"
					className="btn btn-warning text-uppercase fw-bolder me-5 btn-lg">
					orari
				</button>

				<Link to="/app/realhome">
					<button
						type="button"
						className="btn btn-primary text-uppercase fw-bolder btn-lg">
						entra nel sito
					</button>
				</Link>
			</div>
		</>
	);
}
