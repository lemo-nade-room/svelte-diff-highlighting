import { type AutoHighlightResult, type HLJSApi } from 'highlight.js';
import type { Language } from '$lib/scripts/language.js';

export function hljsRegisterLanguages(hljs: HLJSApi, languages: readonly Language[]) {
	for (const language of languages) {
		hljs.registerLanguage(language.name, language.fn);
	}
}

export function highlightText(
	hljs: HLJSApi,
	text: string,
	language?: Language
): AutoHighlightResult {
	if (language === undefined) {
		return hljs.highlightAuto(text);
	}
	return hljs.highlight(text, { language: language.name });
}
