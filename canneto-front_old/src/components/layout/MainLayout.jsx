import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from '../NavBar';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

const MainLayout = () => {
	const isDarkMode = useSelector((state) => state.darkMode.darkMode);

	return (
		<div
			className={`layout ${
				isDarkMode ? 'dark-mode' : 'light-mode'
			} main-layout`}
			style={{ height: '100vh' }}>
			<header className="header">
				<NavBar />
			</header>
			<main className="main">
				<aside className="sidebar">
					<Sidebar />
				</aside>
				<div className="content">
					<img
						className="intestazione"
						src="../img/frontespizio.webp"
						alt=""
					/>

					<Outlet />
				</div>
			</main>
			<footer className="footer">
				<Footer />
			</footer>
		</div>
	);
};

export default MainLayout;
