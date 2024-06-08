import { diffArrays } from 'diff';
import { Marker } from '$lib/scripts/marker.js';
import { Markers } from '$lib/scripts/markers.js';

export function addedMarkers(oldText: string, newText: string): Markers {
	const changes = diffArrays(oldText.split('\n'), newText.split('\n'));
	let lineNumber = 1;
	const markers: Marker[] = [];
	for (const change of changes) {
		if (change.count === undefined) continue;
		if (change.added === true) {
			markers.push(new Marker(lineNumber, lineNumber + change.count - 1));
		}
		lineNumber += change.count;
	}
	return new Markers(markers);
}
