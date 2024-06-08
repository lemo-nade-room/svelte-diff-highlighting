import { describe, expect, test } from 'vitest';
import { removedLinesFrom } from '$lib/scripts/removedLinesFrom.js';
import { Removed } from '$lib/scripts/removed.js';

describe('addedMarkersFrom Tests', () => {
	test('remove first, middle and last', () => {
		const oldText = [
			'0', // 0, 1: removed
			'1',
			'1.1', // 1, 3 removed
			'1.2', // 1, 4 removed
			'1.3', // 1, 5 removed
			'2',
			'3',
			'4',
			'5',
			'6', // 5, 10 removed
			'7' // 5, 11 removed
		].join('\n');
		const newText = ['1', '2', '3', '4', '5'].join('\n');

		const actual = removedLinesFrom(oldText, newText);

		expect(actual).toEqual([new Removed(0, 1, 1), new Removed(1, 3, 5), new Removed(5, 10, 11)]);
	});

	test('remove only middle', () => {
		const oldText = [
			'1',
			'1.1', // 1, 2 removed
			'1.2', // 1, 3 removed
			'1.3', // 1, 4 removed
			'2',
			'2.8', // 2, 6 removed
			'2.9', // 2, 7 removed
			'3',
			'3.5', // 3, 9 removed
			'4',
			'5'
		].join('\n');
		const newText = ['1', '2', '3', '4', '5'].join('\n');

		const actual = removedLinesFrom(oldText, newText);

		expect(actual).toEqual([new Removed(1, 2, 4), new Removed(2, 6, 7), new Removed(3, 9, 9)]);
	});
});
