export function bufferAnimation(point, map) {
	const options = [
		{
			distance: 100,
			color: '#00f',
		},
		{
			distance: 200,
			color: '#0f0',
		},
		{
			distance: 300,
			color: '#f00',
		},
	];

	let interval = setInterval(
		(generator) => {
			const { value, done } = generator.next();
			done
				? clearInterval(interval)
				: ((option) => {
						const BUFFER = turf.buffer(point, option.distance, { units: 'kilometers' });
						const BUFFER_LYR = L.geoJSON(BUFFER, { color: option.color }).addTo(map);
						setTimeout(() => map.removeLayer(BUFFER_LYR), 500);
				  })(value);
		},
		1000,
		options[Symbol.iterator]()
	);
}
