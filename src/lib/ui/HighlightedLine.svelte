<script lang="ts">
	export let html: string;
	export let lineNumber: number;
	export let marker = false;
	export let setNumber: boolean;
	export let maxNumberDigitCount: number;
</script>

<span class="highlighted-line" class:marker>
	{#if setNumber}
		<span class="line-number" style:width={`${maxNumberDigitCount}em`}>{lineNumber}</span>
	{/if}
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	<span class="html">{@html html}</span>
</span>

<style>
	.highlighted-line {
		min-width: 100%;
		height: 100%;
		display: block;
		box-sizing: content-box;
		line-height: var(--line-height, 1.4);
		position: relative;
		white-space: pre;

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

		&.marker {
			background-color: var(--marker-background-color);

			&:before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				background-color: var(--marker-border-color);
				display: inline-block;
				width: var(--marker-border-width, 4px);
				height: 100%;
			}
		}

		& > .html {
			user-select: text;
			-webkit-user-select: text;
		}

		/***
		The new CSS reset - version 1.11.2 (last updated 15.11.2023)
		GitHub page: https://github.com/elad2412/the-new-css-reset
***/

		/*
					Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property
					- The "symbol *" part is to solve Firefox SVG sprite bug
					- The "html" element is excluded, otherwise a bug in Chrome breaks the CSS hyphens property (https://github.com/elad2412/the-new-css-reset/issues/36)
			 */
		& *:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {
			all: unset;
			display: revert;
		}

		/* Preferred box-sizing value */
		& *,
		*::before,
		*::after {
			box-sizing: border-box;
		}

		/* Reapply the pointer cursor for anchor tags */
		& a,
		button {
			cursor: revert;
		}

		/* Remove list styles (bullets/numbers) */
		& ol,
		ul,
		menu,
		summary {
			list-style: none;
		}

		/* For images to not be able to exceed their container */
		& img {
			max-inline-size: 100%;
			max-block-size: 100%;
		}

		/* removes spacing between cells in tables */
		& table {
			border-collapse: collapse;
		}

		/* revert the 'white-space' property for textarea elements on Safari */
		& textarea {
			white-space: revert;
		}

		/* minimum style to allow to style meter element */
		& meter {
			-webkit-appearance: revert;
			appearance: revert;
		}

		/* preformatted text - use only for this feature */
		& :where(pre) {
			all: revert;
			box-sizing: border-box;
		}

		/* reset default text opacity of input placeholder */
		& ::placeholder {
			color: unset;
		}

		/* fix the feature of 'hidden' attribute.
				 display:revert; revert to element instead of attribute */
		& :where([hidden]) {
			display: none;
		}

		/* revert for bug in Chromium browsers
				 - fix for the content editable attribute will work properly.
				 - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element*/
		& :where([contenteditable]:not([contenteditable='false'])) {
			-moz-user-modify: read-write;
			-webkit-user-modify: read-write;
			overflow-wrap: break-word;
		}

		/* apply back the draggable feature - exist only in Chromium and Safari */
		& :where([draggable='true']) {
			-webkit-user-drag: element;
		}

		/* Remove details summary webkit styles */
		& ::-webkit-details-marker {
			display: none;
		}
	}
</style>
