import type { LanguageFn } from 'highlight.js';
import applescript from 'highlight.js/lib/languages/applescript';
import bash from 'highlight.js/lib/languages/bash';
import csharp from 'highlight.js/lib/languages/csharp';
import c from 'highlight.js/lib/languages/c';
import cpp from 'highlight.js/lib/languages/cpp';
import css from 'highlight.js/lib/languages/css';
import dart from 'highlight.js/lib/languages/dart';
import dockerfile from 'highlight.js/lib/languages/dockerfile';
import fsharp from 'highlight.js/lib/languages/fsharp';
import go from 'highlight.js/lib/languages/go';
import xml from 'highlight.js/lib/languages/xml';

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
	static readonly bash = new Language('bash', bash, ['.sh', '.bash', '.zsh']);
	static readonly csharp = new Language('csharp', csharp, ['.cs']);
	static readonly c = new Language('c', c, ['.c']);
	static readonly cpp = new Language('cpp', cpp, ['.cpp', '.cxx', '.cc', '.h', '.hpp']);
	static readonly css = new Language('css', css, ['.css']);
	static readonly dart = new Language('dart', dart, ['.dart']);
	static readonly dockerfile = new Language('dockerfile', dockerfile, ['Dockerfile']);
	static readonly fsharp = new Language('fsharp', fsharp, ['.fs', '.fsx', '.fsi']);
	static readonly go = new Language('go', go, ['.go']);
	static readonly xml = new Language('xml', xml, ['.xml', '.html', '.xhtml', '.rss', '.atom']);

	static readonly allCases: readonly Language[] = [
		this.appleScript,
		this.bash,
		this.csharp,
		this.c,
		this.cpp,
		this.css,
		this.dart,
		this.dockerfile,
		this.fsharp,
		this.go,
		this.xml
	];
}
