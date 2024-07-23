import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { toggleDarkMode } from '../store/slices/darkMode';

const DarkMode = () => {
	const isDarkMode = useSelector((state) => state.darkMode.darkMode);
	const dispatch = useDispatch();

	useEffect(() => {
		const darkModeSetting = localStorage.getItem('darkMode');
		if (darkModeSetting) {
			dispatch(toggleDarkMode());
		}
	}, [dispatch]);

	const handleDarkMode = () => {
		dispatch(toggleDarkMode());
		console.log(isDarkMode);
	};

	return (
		<div className="rfc-dark-mode">
			<button onClick={handleDarkMode}>
				{isDarkMode ? (
					<img src="/img/lightMode.svg" alt="Light Mode" />
				) : (
					<img src="/img/darkMode.svg" alt="Dark Mode" />
				)}
			</button>
		</div>
	);
};

export default DarkMode;
