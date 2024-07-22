import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const PrincipalRouter = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				{/* INSERISCI ALTRE */}

				{/* rotta errore 404 DEVE SEMPRE essere l'ultima */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
};

export default PrincipalRouter;
