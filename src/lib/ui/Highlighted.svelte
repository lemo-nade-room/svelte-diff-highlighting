<!--
	@component

-->

<script lang="ts">
	import hljs, { type HighlightResult } from 'highlight.js';
	import 'highlight.js/styles/github.css';
	import { onMount } from 'svelte';
	import type { Language } from '$lib/scripts/language.js';

	export let text = '';
	export let languages: readonly Language[];
	export let language: Language | undefined;

	let highlighted: HighlightResult | undefined;
	onMount(async () => {
		if (import.meta.env.SSR) return;
		for (const language of languages) {
			hljs.registerLanguage(language.name, language.fn);
		}
		if (language === undefined) {
			highlighted = hljs.highlightAuto(text);
		} else {
			highlighted = hljs.highlight(text, { language: language.name });
		}
	});
</script>

<div class="scroll">
	<p class="highlighted">
		{#if highlighted !== undefined}
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html highlighted.value}
		{/if}
	</p>
</div>

<style>
	.scroll {
		width: var(--width, 100%);
		max-width: var(--max-width, 100%);
		height: var(--height, 100%);
		max-height: var(--max-height, 100%);
		overflow-x: var(--overflow-x, auto);
		overflow-y: var(--overflow-y, auto);
		background: var(--background, none);
		margin: var(--margin, 0);
		padding: var(--padding, 0);
		white-space: var(--white-space, pre-wrap);
		tab-size: var(--tab-size, 2);
		box-sizing: var(--box-sizing, border-box);
		scrollbar-width: var(--scrollbar-width, thin);
		scrollbar-color: var(--scrollbar-color, auto);
		& > .highlighted {
			width: var(--content-width, max-content);
			height: var(--content-height, max-content);
		}
	}
</style>
