import { describe, test, expect } from 'vitest';
import { Marker } from '$lib/scripts/marker.js';

describe('marker Tests', () => {
	test('is add mark Test', () => {
		const marker = new Marker(2, 3);

		expect(marker.isMarked(1)).toBeFalsy();
		expect(marker.isMarked(2)).toBeTruthy();
		expect(marker.isMarked(3)).toBeTruthy();
		expect(marker.isMarked(4)).toBeFalsy();
	});
});
