<script lang="ts">
	import OmissionIcon from '$lib/ui/OmissionIcon.svelte';
	import HighlightedLine from '$lib/ui/HighlightedLine.svelte';
	import type { Removed } from '$lib/scripts/removed.js';

	export let open = false;
	export let oldLines: readonly string[];
	export let removed: Removed;
	export let setNumber: boolean;
	export let maxNumberDigitCount: number;
</script>

<div class="highlighted-removed-line">
	<div class="closed">
		<span class="omission-icon"><OmissionIcon /></span>
		<span class="removed-line" />
	</div>
	<div class="opened">
		{#each removed.lineNumbers as lineNumber}
			<span class="line">
				<HighlightedLine
					{lineNumber}
					html={oldLines[lineNumber - 1]}
					{setNumber}
					{maxNumberDigitCount}
					marker
				/>
			</span>
		{/each}
	</div>
</div>

<style>
	.highlighted-removed-line {
		& > .closed {
			height: 1px;
			width: 100%;
			position: relative;
			--omission-icon-size: calc(var(--line-number-font-size, 14px) * 0.8);
			& > .omission-icon {
				display: block;
				--size: var(--omission-icon-size);
				height: var(--omission-icon-size);
				position: absolute;
				left: var(--omission-icon-left, 0);
				top: 50%;
				transform: translateY(calc(-50% - 1px));
				z-index: 1;
			}
			& > .removed-line {
				&:before {
					content: '';
					display: block;
					width: calc(100% - var(--omission-icon-size));
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
		& > .opened {
			& > .line {
				--marker-border-color: var(--removed-marker-border-color, #ffb74c);
				--marker-border-width: var(--removed-marker-border-width, var(--marker-border-width, 4px));
				--marker-background-color: var(--removed-marker-background-color, #fff7ea);
			}
		}
	}
</style>
