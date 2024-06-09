<script lang="ts">
	import OmissionIcon from '$lib/ui/OmissionIcon.svelte';

	export let open = false;
</script>

<div class="highlighted-removed-line">
	<div class="closed">
		<span class="omission-icon"><OmissionIcon /></span>
		<span class="removed-line" />
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
	}
</style>
