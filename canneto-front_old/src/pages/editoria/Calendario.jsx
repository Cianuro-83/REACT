import 'bootstrap/dist/css/bootstrap.min.css';

const Calendario = () => {
	return (
		<div className="rfc-Calendario container">
			<h1 className="text-center text-uppercase fw-bolder my-4">
				calendario murale
			</h1>
			<p className="mb-4">
				Dal 2007 il Santuario, per ricordare ai devoti gli appuntamenti
				annuali e stimolare la preparazione spirituale in vista dei
				medesimi, realizza un calendario corredato da un ricco e vivace
				apparato fotografico. In primo piano vengono presentate le feste
				mariane celebrate dalla Chiesa universale; poi, nell'arco dei mesi
				sono scandite le ricorrenze e le feste più significative di tutte le
				Comunità del circondario. Il Calendario può essere acquistato in
				bigiotteria al prezzo di € 5.00 o richiesto alla Direzione del
				Santuario tramite spedizione postale.
			</p>
			<div className="row g-3">
				{[
					'2016',
					'2015',
					'2014',
					'2013',
					'2012',
					'2011',
					'2010',
					'2009',
					'2008',
					'2007',
				].map((year) => (
					<div className="col-12 col-sm-6 col-md-4 col-lg-3" key={year}>
						<img
							src={`/img/editoria/calendario ${year}.webp`}
							alt={`Calendario ${year}`}
							className="img-fluid"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Calendario;
