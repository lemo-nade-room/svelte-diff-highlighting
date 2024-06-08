import { describe, test, expect } from 'vitest';
import { Marker, MarkerKind } from '$lib/scripts/marker.js';

describe('marker Tests', () => {
	test('is add mark Test', () => {
		const marker = new Marker(MarkerKind.added, 2, 3);

		expect(marker.isAddMark(1)).toBeFalsy();
		expect(marker.isAddMark(2)).toBeTruthy();
		expect(marker.isAddMark(3)).toBeTruthy();
		expect(marker.isAddMark(4)).toBeFalsy();
	});
});
