<script lang="ts">
	export let open = false;

	function toggle() {
		open = !open;
	}
</script>

<button class="omission-icon" class:open on:click={toggle} />

<style>
	.omission-icon {
		background-color: var(--omission-icon-border-color, white);
		--length: var(--size, 1em);
		--height: calc(var(--length) / 2 * tan(60deg));
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
</style>
