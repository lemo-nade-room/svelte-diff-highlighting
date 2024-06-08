import { Removed } from '$lib/scripts/removed.js';
import { diffArrays } from 'diff';

export function removedLinesFrom(oldText: string, newText: string): readonly Removed[] {
	const oldLines = oldText.split('\n');
	const newLines = newText.split('\n');
	const changes = diffArrays(oldLines, newLines);
	let newLineNumber = 0;
	let oldLineNumber = 1;
	const removedLines: Removed[] = [];
	for (const change of changes) {
		if (change.count === undefined) continue;
		if (change.removed === true) {
			removedLines.push(
				new Removed(newLineNumber, oldLineNumber, oldLineNumber + change.count - 1)
			);
			oldLineNumber += change.count;
			continue;
		}
		if (change.added === true) {
			newLineNumber += change.count;
			continue;
		}
		oldLineNumber += change.count;
		newLineNumber += change.count;
	}
	return removedLines;
}
