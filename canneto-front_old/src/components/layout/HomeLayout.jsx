import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
	return (
		<div className="rfc-home-Layout">
			<header></header>

			<main>
				<Outlet />
			</main>
			<footer></footer>
		</div>
	);
};

export default HomeLayout;
