export function voronoiAnalysis(points, options, pointsLayer, map) {
	map.removeLayer(pointsLayer);

	const VORONOI_POLYGONS = turf.voronoi(points, options);

	const POLYGONS = VORONOI_POLYGONS.features.map((feature) => {
		const AREA = turf.area(feature);
		if (AREA < 4000000000) {
			return L.geoJSON(feature, { color: '#0f0' });
		} else if (AREA < 8000000000) {
			return L.geoJSON(feature, { color: '#f00' });
		} else {
			return L.geoJSON(feature, { color: '#00f' });
		}
	});

	L.layerGroup(POLYGONS).addTo(map);
}
