import { describe, test, expect } from 'vitest';
import { Removed } from '$lib/scripts/removed.js';
import { isRemoved } from '$lib/scripts/removeds.js';

describe('Removeds Tests', () => {
	test('is removed Test', () => {
		const removeds = [new Removed(1, 2, 3), new Removed(2, 5, 5), new Removed(3, 9, 10)];

		expect(isRemoved(removeds, 1)).toBeFalsy();
		expect(isRemoved(removeds, 2)).toBeTruthy();
		expect(isRemoved(removeds, 3)).toBeTruthy();
		expect(isRemoved(removeds, 4)).toBeFalsy();
		expect(isRemoved(removeds, 5)).toBeTruthy();
		expect(isRemoved(removeds, 6)).toBeFalsy();
		expect(isRemoved(removeds, 7)).toBeFalsy();
		expect(isRemoved(removeds, 8)).toBeFalsy();
		expect(isRemoved(removeds, 9)).toBeTruthy();
		expect(isRemoved(removeds, 10)).toBeTruthy();
		expect(isRemoved(removeds, 11)).toBeFalsy();
	});
});
