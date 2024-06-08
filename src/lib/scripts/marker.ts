export class Marker {
	constructor(
		readonly kind: MarkerKind,
		readonly startLineNumber: number,
		readonly endLineNumber: number
	) {}

	isAddMark(lineNumber: number): boolean {
		if (this.kind !== MarkerKind.added) return false;
		return this.startLineNumber <= lineNumber && lineNumber <= this.endLineNumber;
	}
}

export class MarkerKind {
	private constructor(private readonly name: string) {}

	static readonly added = new MarkerKind('added');
	static readonly removed = new MarkerKind('removed');
}
