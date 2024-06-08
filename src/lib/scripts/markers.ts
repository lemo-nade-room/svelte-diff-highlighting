import type { Marker } from '$lib/scripts/marker.js';

export class Markers {
	constructor(private readonly markers: Marker[]) {}

	isAddMark(lineNumber: number): boolean {
		return this.markers.some((marker) => marker.isAddMark(lineNumber));
	}
}
