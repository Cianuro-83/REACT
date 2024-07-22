const Clock = () => {
	const date = new Date();
	return <h2>Oggi è il {date.toLocaleString()}</h2>;
};

export default Clock;
