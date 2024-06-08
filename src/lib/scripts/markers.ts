import type { Marker } from '$lib/scripts/marker.js';

export function isAddMark(markers: readonly Marker[], lineNumber: number): boolean {
	return markers.some((marker) => marker.isMarked(lineNumber));
}
