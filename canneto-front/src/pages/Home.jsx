export default function Home() {
	return (
		<>
			<div className="text-uppercase text-center fw-bolder titolo">
				<img src="/img/OMBRELLO.svg" alt="" />
				<h1>
					basilica - santuario regionale <br />
					santa maria di canneto
				</h1>
				<img src="/img/OMBRELLO.svg" alt="" />
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

				<button
					type="button"
					className="btn btn-primary text-uppercase fw-bolder btn-lg">
					entra nel sito
				</button>
			</div>
		</>
	);
}
