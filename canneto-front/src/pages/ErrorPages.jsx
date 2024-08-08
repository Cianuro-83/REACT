import { Link, useRouteError } from 'react-router-dom';

const ErrorPages = () => {
	const error = useRouteError();

	return (
		<div className="rfc-ErroPages">
			<h1> Qualcosa è andato storto...</h1>
			<p>
				Siamo spiacenti, ma durante il caricamento della pagina si è
				verificato il seguente errore:<strong>{error.message}</strong>
			</p>
			<Link to="/">torna alla home page</Link>
		</div>
	);
};

export default ErrorPages;
