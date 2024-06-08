import { describe, test, expect } from 'vitest';
import { Marker } from '$lib/scripts/marker.js';
import { isAddMark } from '$lib/scripts/markers.js';

describe('Markers Tests', () => {
	test('is add mark Test', () => {
		const markers = [new Marker(2, 3), new Marker(5, 5), new Marker(9, 10)];

		expect(isAddMark(markers, 1)).toBeFalsy();
		expect(isAddMark(markers, 2)).toBeTruthy();
		expect(isAddMark(markers, 3)).toBeTruthy();
		expect(isAddMark(markers, 4)).toBeFalsy();
		expect(isAddMark(markers, 5)).toBeTruthy();
		expect(isAddMark(markers, 6)).toBeFalsy();
		expect(isAddMark(markers, 7)).toBeFalsy();
		expect(isAddMark(markers, 8)).toBeFalsy();
		expect(isAddMark(markers, 9)).toBeTruthy();
		expect(isAddMark(markers, 10)).toBeTruthy();
		expect(isAddMark(markers, 11)).toBeFalsy();
	});
});
