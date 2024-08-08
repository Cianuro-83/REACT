import { useState } from 'react';

const Orari = () => {
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [fullscreenImageIndex, setFullscreenImageIndex] = useState(null);
	const [zoomLevel, setZoomLevel] = useState(1);
	const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
	const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
	const [dragging, setDragging] = useState(false);

	const toggleFullscreen = (index) => {
		if (fullscreenImageIndex === index) {
			setIsFullscreen(false);
			setFullscreenImageIndex(null);
			setZoomLevel(1);
			setDragOffset({ x: 0, y: 0 });
		} else {
			setIsFullscreen(true);
			setFullscreenImageIndex(index);
		}
	};

	const handleWheel = (event) => {
		if (!isFullscreen) return;

		event.preventDefault();
		setZoomLevel((prevZoomLevel) => {
			const newZoomLevel = prevZoomLevel + event.deltaY * -0.01;
			return Math.min(Math.max(newZoomLevel, 1), 3); // Limita il livello di zoom tra 1 e 3
		});
	};

	const handleMouseDown = (event) => {
		if (!isFullscreen) return;

		setDragging(true);
		setDragStart({ x: event.clientX, y: event.clientY });
	};

	const handleMouseMove = (event) => {
		if (!isFullscreen || !dragging) return;

		setDragOffset((prevDragOffset) => ({
			x: prevDragOffset.x + event.clientX - dragStart.x,
			y: prevDragOffset.y + event.clientY - dragStart.y,
		}));
		setDragStart({ x: event.clientX, y: event.clientY });
	};

	const handleMouseUp = () => {
		setDragging(false);
	};

	const images = [
		{
			src: '/img/orari/manifesto feste 2024.webp',
			title: 'FESTE DI CANNETO 2024',
		},
		{ src: '/img/orari/ORARI AGOSTO 2024.webp', title: 'ORARI AGOSTO 2024' },
	];

	return (
		<div className="orari-container" onWheel={handleWheel}>
			{images.map((image, index) => (
				<div key={index} className="image-wrapper">
					{isFullscreen &&
						fullscreenImageIndex === index &&
						zoomLevel === 1 && (
							<div className="instructions fw-bolder text-uppercase">
								<p>Usa la rotella del mouse per ingrandire.</p>
								<p>Trascina l'immagine per spostarla.</p>
								<p>Clicca per uscire.</p>
							</div>
						)}
					<img
						src={image.src}
						alt={image.title}
						className={
							isFullscreen && fullscreenImageIndex === index
								? 'fullscreen'
								: 'responsive'
						}
						onClick={() => toggleFullscreen(index)}
						onMouseDown={handleMouseDown}
						onMouseMove={handleMouseMove}
						onMouseUp={handleMouseUp}
						style={
							isFullscreen && fullscreenImageIndex === index
								? {
										transform: `scale(${zoomLevel}) translate(${dragOffset.x}px, ${dragOffset.y}px)`,
								  }
								: {}
						}
					/>
					<p className="fw-bolder mt-3 ">{image.title}</p>
				</div>
			))}
		</div>
	);
};

export default Orari;
