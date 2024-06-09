<!--
	@component

-->

<script lang="ts">
	import '$lib/reset.css';
	import hljs, { type HighlightResult } from 'highlight.js';
	import { onMount } from 'svelte';
	import { Language } from '$lib/scripts/language.js';
	import { highlightText, hljsRegisterLanguages } from '$lib/scripts/hljs.js';
	import { addedMarkersFrom } from '$lib/scripts/addedMarkersFrom.js';
	import { isAddMark } from '$lib/scripts/markers.js';
	import { removedLinesFrom } from '$lib/scripts/removedLinesFrom.js';
	import { isRemovedAfter } from '$lib/scripts/removeds.js';
	import HighlightedLine from '$lib/ui/HighlightedLine.svelte';
	import HighlightedRemovedLines from '$lib/ui/HighlightedRemovedLines.svelte';

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
	$: markers = old === undefined ? [] : addedMarkersFrom(old, text);
	$: maxDigitCount = lines.length.toString().length;
	$: removeds = old === undefined ? [] : removedLinesFrom(old, text);
</script>

<div class="scroll">
	<p class="highlighted">
		{#each lines as line, i}
			{@const lineNumber = i + 1}
			<span class="line">
				<HighlightedLine
					html={line}
					{lineNumber}
					isAdded={isAddMark(markers, lineNumber)}
					isRemovedAfter={isRemovedAfter(lineNumber, removeds)}
					{setNumber}
					maxNumberDigitCount={maxDigitCount}
				/>
			</span>
			{#if isRemovedAfter(lineNumber, removeds)}
				<span class="removed">
					<HighlightedRemovedLines />
				</span>
			{/if}
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
			padding: calc(var(--line-number-font-size, 14px) * 0.4) 0;
			white-space: nowrap;

			--omission-icon-size: calc(var(--line-number-font-size, 14px) * 0.8);
		}
	}
</style>
