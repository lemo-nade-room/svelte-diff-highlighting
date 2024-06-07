import type { LanguageFn } from 'highlight.js';
import applescript from 'highlight.js/lib/languages/applescript';

/**
 * Syntax Highlighting Code Language
 */
export class Language {
	/**
	 * @param name The name of the language
	 * @param fn The function that highlights the code
	 * @param extensions The file extensions that the language supports
	 */
	constructor(
		readonly name: string,
		readonly fn: LanguageFn,
		readonly extensions: readonly string[]
	) {}

	static readonly appleScript = new Language('applescript', applescript, [
		'.applescript',
		'.scpt',
		'.scptd'
	]);

	static readonly allCases: readonly Language[] = [this.appleScript];
}
