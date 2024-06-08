export class Marker {
	constructor(
		readonly startLineNumber: number,
		readonly endLineNumber: number
	) {}

	isMarked(lineNumber: number): boolean {
		return this.startLineNumber <= lineNumber && lineNumber <= this.endLineNumber;
	}
}
