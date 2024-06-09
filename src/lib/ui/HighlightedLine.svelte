<script lang="ts">
	export let html: string;
	export let lineNumber: number;
	export let isAdded = false;
	export let setNumber: boolean;
	export let maxNumberDigitCount: number;
</script>

<span class="highlighted-line" class:added={isAdded}>
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

		& > .html {
			user-select: text;
			-webkit-user-select: text;
		}
	}
</style>
