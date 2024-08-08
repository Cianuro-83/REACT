import { Link } from 'react-router-dom';

const InniHome = () => {
	return (
		<div className="rfc-InniHome">
			<h2 className="text-uppercase fw-bolder text-center mt-3">inni</h2>
			<table
				style={{
					border: 'none',
					width: '100%',
					borderCollapse: 'collapse',
				}}
				className="mt-4">
				<thead>
					<tr>
						<th
							style={{ border: 'none' }}
							className="text-uppercase text-center"></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<Link to="/app/inni/evvivamaria">
							<td
								style={{ border: 'none', padding: '20px 0' }}
								className="mt-3 fs-4">
								Evviva Maria (inno ufficiale della Basilica-Santuario)
								<span
									className="fs-2"
									style={{
										verticalAlign: 'middle',
										marginLeft: '10px',
									}}>
									👁️
								</span>
							</td>
						</Link>
					</tr>
					<tr>
						<Link to="/app/inni/incoronazione">
							<td
								style={{ border: 'none', padding: '20px 0' }}
								className="mt-3 fs-4">
								Inno Incoronazione
								<span
									className="fs-2"
									style={{
										verticalAlign: 'middle',
										marginLeft: '10px',
									}}>
									👁️
								</span>
							</td>
						</Link>
					</tr>
					<tr>
						<Link to="/app/inni/messaggera">
							<td
								style={{ border: 'none', padding: '20px 0' }}
								className="mt-3 fs-4">
								La Celeste Messaggera
								<span
									className="fs-2"
									style={{
										verticalAlign: 'middle',
										marginLeft: '10px',
									}}>
									👁️
								</span>
							</td>
						</Link>
					</tr>
					<tr>
						<Link to="/app/inni/aquino">
							<td
								style={{ border: 'none', padding: '20px 0' }}
								className="mt-3 fs-4">
								Affetti e pensieri (Aquino)
								<span
									className="fs-2"
									style={{
										verticalAlign: 'middle',
										marginLeft: '10px',
									}}>
									👁️
								</span>
							</td>
						</Link>
					</tr>
					<tr>
						<Link to="/app/inni/gemmiti">
							<td
								style={{ border: 'none', padding: '20px 0' }}
								className="mt-3 fs-4">
								Madonna di Canneto
								<span
									className="fs-2"
									style={{
										verticalAlign: 'middle',
										marginLeft: '10px',
									}}>
									👁️
								</span>
							</td>
						</Link>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default InniHome;
