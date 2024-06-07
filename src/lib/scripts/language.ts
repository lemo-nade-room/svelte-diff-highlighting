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
import haskell from 'highlight.js/lib/languages/haskell';
import json from 'highlight.js/lib/languages/json';
import java from 'highlight.js/lib/languages/java';
import javascript from 'highlight.js/lib/languages/javascript';
import kotlin from 'highlight.js/lib/languages/kotlin';
import latex from 'highlight.js/lib/languages/latex';
import makefile from 'highlight.js/lib/languages/makefile';
import markdown from 'highlight.js/lib/languages/markdown';
import php from 'highlight.js/lib/languages/php';
import perl from 'highlight.js/lib/languages/perl';

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
	static readonly haskell = new Language('haskell', haskell, ['.hs']);
	static readonly json = new Language('json', json, ['.json']);
	static readonly java = new Language('java', java, ['.java']);
	static readonly javascript = new Language('javascript', javascript, [
		'.js',
		'.jsx',
		'.mjs',
		'.cjs'
	]);
	static readonly kotlin = new Language('kotlin', kotlin, ['.kt', '.kts']);
	static readonly latex = new Language('latex', latex, ['.tex']);
	static readonly makefile = new Language('makefile', makefile, ['Makefile']);
	static readonly markdown = new Language('markdown', markdown, ['.md']);
	static readonly php = new Language('php', php, ['.php']);
	static readonly perl = new Language('perl', perl, ['.plx', '.pls', '.pl', '.pm', '.xs']);

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
		this.xml,
		this.haskell,
		this.json,
		this.java,
		this.javascript,
		this.kotlin,
		this.latex,
		this.makefile,
		this.markdown,
		this.php
		this.php,
		this.perl,
	];
}
