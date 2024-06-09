import { diffArrays } from 'diff';
import { Marker } from '$lib/scripts/marker.js';

export function addedMarkersFrom(oldText: string, newText: string): readonly Marker[] {
	const changes = diffArrays(oldText.split('\n'), newText.split('\n'));
	let lineNumber = 1;
	const markers: Marker[] = [];
	for (const change of changes) {
		if (change.count === undefined) continue;
		if (change.removed === true) continue;
		if (change.added === true) {
			markers.push(new Marker(lineNumber, lineNumber + change.count - 1));
		}
		lineNumber += change.count;
	}
	return markers;
}
