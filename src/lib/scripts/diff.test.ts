import { describe, expect, test } from 'vitest';
import { addedMarkers } from '$lib/scripts/diff.js';
import { Marker } from '$lib/scripts/marker.js';
import { Markers } from '$lib/scripts/markers.js';

describe('diff Tests', () => {
	test('add first, middle and last', () => {
		const oldText = '1\n2\n3\n4\n5';
		const newText =
			'0' + // 1: added
			'\n1' +
			'\n1.1' + // 3 added
			'\n1.2' + // 4 added
			'\n1.3' + // 5 added
			'\n2' +
			'\n3' +
			'\n4' +
			'\n5' +
			'\n6' + // 10 added
			'\n7'; // 11 added

		const markers = addedMarkers(oldText, newText);

		expect(markers).toEqual(new Markers([new Marker(1, 1), new Marker(3, 5), new Marker(10, 11)]));
	});

	test('add only middle', () => {
		const oldText = '1\n2\n3\n4\n5';
		const newText =
			'1' +
			'\n1.1' + // 2 added
			'\n1.2' + // 3 added
			'\n1.3' + // 4 added
			'\n2' +
			'\n2.8' + // 6 added
			'\n2.9' + // 7 added
			'\n3' +
			'\n3.5' + // 9 added
			'\n4' +
			'\n5';

		const markers = addedMarkers(oldText, newText);

		expect(markers).toEqual(new Markers([new Marker(2, 4), new Marker(6, 7), new Marker(9, 9)]));
	});

	// test('remove first, middle and last', () => {
	// 	const oldText =
	// 		'0' + // 0-1: removed
	// 		'\n1' +
	// 		'\n1.1' + // 1-2 removed
	// 		'\n1.2' + // 1-2 removed
	// 		'\n1.3' + // 1-2 removed
	// 		'\n2' +
	// 		'\n3' +
	// 		'\n4' +
	// 		'\n5' +
	// 		'\n6' + // 5-6 removed
	// 		'\n7'; // 5-6 removed
	// 	const newText = '1\n2\n3\n4\n5';
	//
	// 	const markers = addDifference(oldText, newText);
	//
	// 	expect(markers).toEqual(
	// 		new Markers([
	// 			new Marker(MarkerKind.removed, 0, 1),
	// 			new Marker(MarkerKind.removed, 1, 2),
	// 			new Marker(MarkerKind.removed, 4, 6)
	// 		])
	// 	);
	// });
});
