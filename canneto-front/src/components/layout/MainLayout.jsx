import { Outlet } from 'react-router-dom';
import DarkMode from '../DarkMode';
import { useSelector } from 'react-redux';

const MainLayout = () => {
	const isDarkMode = useSelector((state) => state.darkMode.darkMode);

	return (
		<div className={`layout ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
			<header className="header">
				Header
				<DarkMode />
			</header>
			<main className="main">
				<aside className="sidebar">Sidebar</aside>
				<div className="content">
					MAIN
					<Outlet />
				</div>
			</main>
			<footer className="footer">Footer</footer>
		</div>
	);
};

export default MainLayout;
