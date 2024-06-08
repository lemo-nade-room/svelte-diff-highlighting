<script lang="ts">
	export let open = false;

	function toggle() {
		open = !open;
	}
</script>

<button class="omission-icon" class:open on:click={toggle}>
	<span class="circle"></span>
</button>

<style>
	.omission-icon {
		background-color: var(--background-color, #d90005);
		--length: var(--size, 1em);
		--height: calc(var(--length) / 2 * tan(60deg));
		height: var(--height);
		width: var(--length);
		clip-path: polygon(50% 0, 100% 100%, 0 100%);
		position: relative;
		transform: rotate(90deg);
		transform-origin: center calc(var(--height) / 3 * 2);
		transition: transform 0.1s;

		&.open {
			transform: rotate(180deg);
		}
	}
</style>
