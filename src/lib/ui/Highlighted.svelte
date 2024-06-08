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
	import OmissionIcon from '$lib/ui/OmissionIcon.svelte';

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
			{#if lineNumber === 1 && isRemovedAfter(0, removeds)}<!--
			--><span
					class="removed-line"
				/><!--
			-->{/if}<!--
			--><span class="line" class:added={isAddMark(markers, lineNumber)}>
				{#if lineNumber === 1 && isRemovedAfter(0, removeds)}
					<span class="omission-icon first"><OmissionIcon /></span>
				{/if}
				{#if isRemovedAfter(lineNumber, removeds)}
					<span class="omission-icon"><OmissionIcon /></span>
				{/if}
				{#if setNumber}
					<span class="line-number" style:width={`${maxDigitCount}em`}>{lineNumber}</span>
				{/if}
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html line}
			</span><!--
			-->{#if isRemovedAfter(lineNumber, removeds)}<!--
			--><span
					class="removed-line"
				/><!--
			-->{/if}
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

			--omission-icon-size: calc(var(--line-number-font-size, 14px) * 0.8);
			& > .line {
				min-width: 100%;
				height: 100%;
				display: block;
				box-sizing: content-box;
				line-height: var(--line-height, 1.4);
				position: relative;

				& > .omission-icon {
					position: absolute;
					left: var(--omission-icon-left, 1em);
					top: 100%;
					--size: var(--omission-icon-size);
					height: var(--size);
					transform: translateY(-50%);
					z-index: 1;

					&.first {
						top: auto;
						bottom: 100%;
						transform: translateY(calc(50% - 1px));
					}
				}

				& > .line-number {
					display: inline-block;
					text-align: var(--line-number-text-align, right);
					color: var(--line-number-color, #6e6e73ff);
					font-weight: var(--line-number-font-weight, normal);
					font-size: var(--line-number-font-size, 14px);
					font-family: var(--line-number-font-family), monospace;
					margin-right: var(--line-number-margin-right, 1em);
					margin-left: var(--line-number-margin-left, 0.5em);
				}

				&.added {
					background-color: var(--added-background, #eaf3ffff);

					&:before {
						content: '';
						position: absolute;
						top: 0;
						left: 0;
						background-color: var(--added-marker-border-color, #4ca9ffff);
						display: inline-block;
						width: var(--added-marker-border-width, 4px);
						height: 100%;
					}
				}
			}
			& > .removed-line {
				&:before {
					content: '';
					display: block;
					width: calc(100% - var(--omission-icon-left, 1em) - var(--omission-icon-size));
					height: 100%;
					background-color: var(--removed-line-color, #ffb74c);
				}
				display: flex;
				justify-content: flex-end;
				align-items: center;
				width: 100%;
				height: 1px;
				text-align: right;
			}
		}
	}
</style>
