export class RemovedLines {
	constructor(
		readonly afterNewLineNumber: number,
		readonly oldStartLineNumber: number,
		readonly oldEndLineNumber: number
	) {}
}
