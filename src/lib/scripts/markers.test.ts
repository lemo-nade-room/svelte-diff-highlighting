import { describe, test, expect } from 'vitest';
import { Marker } from '$lib/scripts/marker.js';
import { Markers } from '$lib/scripts/markers.js';

describe('Markers Tests', () => {
	test('is add mark Test', () => {
		const markers = new Markers([new Marker(2, 3), new Marker(5, 5), new Marker(9, 10)]);

		expect(markers.isAddMark(1)).toBeFalsy();
		expect(markers.isAddMark(2)).toBeTruthy();
		expect(markers.isAddMark(3)).toBeTruthy();
		expect(markers.isAddMark(4)).toBeFalsy();
		expect(markers.isAddMark(5)).toBeTruthy();
		expect(markers.isAddMark(6)).toBeFalsy();
		expect(markers.isAddMark(7)).toBeFalsy();
		expect(markers.isAddMark(8)).toBeFalsy();
		expect(markers.isAddMark(9)).toBeTruthy();
		expect(markers.isAddMark(10)).toBeTruthy();
		expect(markers.isAddMark(11)).toBeFalsy();
	});
});
