<!--
	@component

-->

<script lang="ts">
	import hljs, { type HighlightResult } from 'highlight.js';
	import { onMount } from 'svelte';
	import { Language } from '$lib/scripts/language.js';
	import { highlightText, hljsRegisterLanguages } from '$lib/scripts/hljs.js';

	export let text = '';
	export let languages: readonly Language[] = Language.allCases;
	export let language: Language | undefined;
	export let old: string | undefined = undefined;

	let highlighted: HighlightResult | undefined;

	onMount(async () => {
		if (import.meta.env.SSR) return;
		hljsRegisterLanguages(hljs, languages);
	});

	$: highlighted = import.meta.env.SSR ? undefined : highlightText(hljs, text, language);
	$: lines = highlighted?.value.split('\n') ?? [];
</script>

<div class="scroll">
	<p class="highlighted">
		{#each lines as line}
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			<span class="line">{@html line}</span>
		{/each}
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

			& > .line {
				display: block;
				box-sizing: content-box;
				line-height: var(--line-height, 1.4);
			}
		}
	}
</style>
