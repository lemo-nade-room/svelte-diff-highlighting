export class Removed {
	constructor(
		readonly afterNewLineNumber: number,
		readonly oldStartLineNumber: number,
		readonly oldEndLineNumber: number
	) {}

	isRemoved(lineNumber: number): boolean {
		return this.oldStartLineNumber <= lineNumber && lineNumber <= this.oldEndLineNumber;
	}

	get lineNumbers(): readonly number[] {
		const lineNumbers: number[] = [];
		for (let i = this.oldStartLineNumber; i <= this.oldEndLineNumber; i++) {
			lineNumbers.push(i);
		}
		return lineNumbers;
	}
}
