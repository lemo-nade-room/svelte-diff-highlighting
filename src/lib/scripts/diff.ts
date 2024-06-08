import { diffArrays } from 'diff';
import { Marker, MarkerKind } from '$lib/scripts/marker.js';
import { Markers } from '$lib/scripts/markers.js';

export function difference(oldText: string, newText: string): Markers {
	const changes = diffArrays(oldText.split('\n'), newText.split('\n'));
	let line = 1;
	const markers: Marker[] = [];
	for (const change of changes) {
		if (change.count === undefined) continue;
		if (change.added === true) {
			markers.push(new Marker(MarkerKind.added, line, line + change.count - 1));
		}
		line += change.count;
	}
	return new Markers(markers);
}
