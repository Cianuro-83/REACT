import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from '../NavBar';

const MainLayout = () => {
	const isDarkMode = useSelector((state) => state.darkMode.darkMode);

	return (
		<div className={`layout ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
			<header className="header">
				<NavBar />
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
