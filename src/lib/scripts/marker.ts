export class Marker {
	constructor(
		readonly kind: MarkerKind,
		readonly startLineNumber: number,
		readonly endLineNumber: number
	) {}
}

export class MarkerKind {
	private constructor(private readonly name: string) {}

	static readonly added = new MarkerKind('added');
	static readonly removed = new MarkerKind('removed');
}
