import type { LanguageFn } from 'highlight.js';

/**
 * Syntax Highlighting Code Language
 */
export class Language {

	/**
	 * @param name The name of the language
	 * @param fn The function that highlights the code
	 * @param extensions The file extensions that the language supports
	 */
	constructor(readonly name: string, readonly fn: LanguageFn, readonly extensions: readonly string[]) {}
}

