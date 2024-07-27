import { useState } from 'react';

const Orari = () => {
	const [isFullscreen, setIsFullscreen] = useState(false);

	const toggleFullscreen = () => {
		setIsFullscreen(!isFullscreen);
	};

	return (
		<div className="orari-container">
			<img
				src="../img/orari/ORARI AGOSTO 2024.webp"
				alt="Descrizione dell'immagine"
				className={isFullscreen ? 'fullscreen' : 'responsive'}
				onClick={toggleFullscreen}
			/>
		</div>
	);
};

export default Orari;
