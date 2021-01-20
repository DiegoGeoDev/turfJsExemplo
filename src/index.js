import { bufferAnimation } from './util/cluster';
import { voronoiAnalysis } from './util/voronoi';

// MAP
const BASIC_MAP = L.map('map', {
	center: [-23, -45],
	zoom: 5,
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: `
	&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors
	`,
}).addTo(BASIC_MAP);

// BUFFER
const POINT = turf.point([-48, -15]);
const POINT_LYR = L.geoJSON(POINT).addTo(BASIC_MAP);

POINT_LYR.on('click', () => bufferAnimation(POINT, BASIC_MAP));

// VORONI
const OPTIONS = { bbox: [-54, -23, -43, -20] };

const POINTS = turf.randomPoint(100, OPTIONS);
const POINTS_LYR = L.geoJSON(POINTS).addTo(BASIC_MAP);
POINTS_LYR.on('click', () => voronoiAnalysis(POINTS, OPTIONS, POINTS_LYR, BASIC_MAP));
