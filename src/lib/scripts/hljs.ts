import hljsLibrary, { type AutoHighlightResult } from 'highlight.js';
import type { Language } from '$lib/scripts/language.js';
type Hljs = typeof hljsLibrary;

export function hljsRegisterLanguages(hljs: Hljs, languages: readonly Language[]) {
	for (const language of languages) {
		hljs.registerLanguage(language.name, language.fn);
	}
}

export function highlightText(hljs: Hljs, text: string, language?: Language): AutoHighlightResult {
	if (language === undefined) {
		return hljs.highlightAuto(text);
	}
	return hljs.highlight(text, { language: language.name });
}
