import type { Removed } from '$lib/scripts/removed.js';

export function isRemovedOldLines(removeds: readonly Removed[], lineNumber: number): boolean {
	return removeds.some((removed) => removed.isRemoved(lineNumber));
}

export function isRemovedAfter(lineNumber: number, removeds: readonly Removed[]): boolean {
	return removeds.some((removed) => removed.afterNewLineNumber === lineNumber);
}
