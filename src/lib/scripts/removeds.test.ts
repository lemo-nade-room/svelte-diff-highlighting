import { describe, test, expect } from 'vitest';
import { Removed } from '$lib/scripts/removed.js';
import { isRemovedAfter, isRemovedOldLines } from '$lib/scripts/removeds.js';

describe('Removeds Tests', () => {
	test('is removed old lines Test', () => {
		const removeds = [new Removed(1, 2, 3), new Removed(2, 5, 5), new Removed(3, 9, 10)];

		expect(isRemovedOldLines(removeds, 1)).toBeFalsy();
		expect(isRemovedOldLines(removeds, 2)).toBeTruthy();
		expect(isRemovedOldLines(removeds, 3)).toBeTruthy();
		expect(isRemovedOldLines(removeds, 4)).toBeFalsy();
		expect(isRemovedOldLines(removeds, 5)).toBeTruthy();
		expect(isRemovedOldLines(removeds, 6)).toBeFalsy();
		expect(isRemovedOldLines(removeds, 7)).toBeFalsy();
		expect(isRemovedOldLines(removeds, 8)).toBeFalsy();
		expect(isRemovedOldLines(removeds, 9)).toBeTruthy();
		expect(isRemovedOldLines(removeds, 10)).toBeTruthy();
		expect(isRemovedOldLines(removeds, 11)).toBeFalsy();
	});

	test('is removed after Test', () => {
		const removeds = [new Removed(1, 2, 3), new Removed(5, 5, 5)];

		expect(isRemovedAfter(1, removeds)).toBeTruthy();
		expect(isRemovedAfter(2, removeds)).toBeFalsy();
		expect(isRemovedAfter(3, removeds)).toBeFalsy();
		expect(isRemovedAfter(4, removeds)).toBeFalsy();
		expect(isRemovedAfter(5, removeds)).toBeTruthy();
		expect(isRemovedAfter(6, removeds)).toBeFalsy();
	});
});
