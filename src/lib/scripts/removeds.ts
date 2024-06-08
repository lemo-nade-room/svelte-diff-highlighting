import type { Removed } from '$lib/scripts/removed.js';

export function isRemoved(removeds: readonly Removed[], lineNumber: number): boolean {
	return removeds.some((removed) => removed.isRemoved(lineNumber));
}
