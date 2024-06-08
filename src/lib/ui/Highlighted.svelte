<!--
	@component

-->

<script lang="ts">
	import hljs, { type HighlightResult } from 'highlight.js';
	import { onMount } from 'svelte';
	import { Language } from '$lib/scripts/language.js';
	import { highlightText, hljsRegisterLanguages } from '$lib/scripts/hljs.js';
	import { difference } from '$lib/scripts/diff.js';
	import { Markers } from '$lib/scripts/markers.js';

	export let text = '';
	export let languages: readonly Language[] = Language.allCases;
	export let language: Language | undefined;
	export let old: string | undefined = undefined;
	export let setNumber = false;

	let highlighted: HighlightResult | undefined;

	onMount(async () => {
		if (import.meta.env.SSR) return;
		hljsRegisterLanguages(hljs, languages);
	});

	$: highlighted = import.meta.env.SSR ? undefined : highlightText(hljs, text, language);
	$: lines = highlighted?.value.split('\n') ?? [];
	$: markers = old === undefined ? new Markers([]) : difference(old, text);
	$: maxDigitCount = lines.length.toString().length;
</script>

<div class="scroll">
	<p class="highlighted">
		{#each lines as line, i}
			{@const lineNumber = i + 1}
			<span class="line" class:added={markers.isAddMark(lineNumber)}>
				{#if setNumber}
					<span class="line-number" style:width={`${maxDigitCount}em`}>{lineNumber}</span>
				{/if}
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html line}
			</span>
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
			min-width: 100%;
			width: var(--content-width, max-content);
			height: var(--content-height, max-content);

			& > .line {
				min-width: 100%;
				display: block;
				box-sizing: content-box;
				line-height: var(--line-height, 1.4);

					& > .line-number {
							display: inline-block;
							text-align: var(--line-number-text-align, right);
					}

				&.added {
					background-color: var(--added-background, #eaf3ffff);
				}
			}
		}
	}
</style>
