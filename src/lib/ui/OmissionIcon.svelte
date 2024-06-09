<script lang="ts">
	export let open = false;

	function toggle() {
		open = !open;
	}
</script>

<button class="omission-icon" on:click={toggle}>
	<span class="omission" class:open />
</button>

<style>
	.omission-icon {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		--length: var(--size, 1em);
		--height: calc(var(--length) / 2 * tan(60deg));
		width: max(var(--height), 44px);
		height: var(--font-size, 14px);
		& > .omission {
			background-color: var(--omission-icon-border-color, white);
			height: var(--height);
			width: var(--length);
			clip-path: polygon(50% 0, 100% 100%, 0 100%);
			position: relative;
			transform: rotate(90deg);
			transform-origin: center calc(var(--height) / 3 * 2);
			transition: transform 0.3s;
			display: flex;
			justify-content: center;
			align-items: center;

			&:before {
				content: '';
				display: block;
				width: calc(100% - 2px);
				height: calc(100% - 2px);
				clip-path: polygon(50% 0, 100% 100%, 0 100%);
				background-color: var(--omission-icon-background-color, #ffb74c);
			}

			&.open {
				transform: rotate(180deg);
			}
		}
	}
</style>
