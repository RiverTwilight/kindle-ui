export default (): string => {
	const now = new Date();
	return `${now.getHours()}:${
		now.getMinutes() < 10 ? 0 : ""
	}${now.getMinutes()}`;
};
