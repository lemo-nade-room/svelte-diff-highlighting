import { describe, test, expect } from 'vitest';
import { Removed } from '$lib/scripts/removed.js';

describe('Removed Lines Tests', () => {
	test('is removed Test', () => {
		const removed = new Removed(1, 2, 3);

		expect(removed.isRemoved(1)).toBeFalsy();
		expect(removed.isRemoved(2)).toBeTruthy();
		expect(removed.isRemoved(3)).toBeTruthy();
		expect(removed.isRemoved(4)).toBeFalsy();
	});

	test('lineNumbers 2~4 Test', () => {
		const removed = new Removed(1, 2, 4);

		expect(removed.lineNumbers).toEqual([2, 3, 4]);
	});

	test('lineNumbers 1~1 Test', () => {
		const removed = new Removed(1, 1, 1);

		expect(removed.lineNumbers).toEqual([1]);
	});
});
