import { Outlet } from 'react-router-dom';

const MainLayout = () => {
	return (
		<div className="rfc-Layout">
			<header> </header>
			<p>ciao</p>
			<main>
				<Outlet />
			</main>
			<footer></footer>
		</div>
	);
};

export default MainLayout;
