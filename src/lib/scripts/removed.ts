export class Removed {
	constructor(
		readonly afterNewLineNumber: number,
		readonly oldStartLineNumber: number,
		readonly oldEndLineNumber: number
	) {}

	isRemoved(lineNumber: number): boolean {
		return this.oldStartLineNumber <= lineNumber && lineNumber <= this.oldEndLineNumber;
	}
}
