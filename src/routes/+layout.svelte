<script lang="ts">
	import './reset.css';
	import Header from '$sample/header/Header.svelte';
</script>

<main>
	<Header />
	<slot />
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Assistant:wght@200..800&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');

	main {
		font-family: 'Assistant', sans-serif;
		font-weight: normal;

		--base-color: #ffffff;
		--on-base-color: #1d1d1f;
		--surface-color: #e8e8ef;
		--box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		--code-font-family: 'JetBrains Mono';

		--header-base-color: #f5f5f7;
		--header-on-base-color: #1d1d1f;

		color: var(--on-base-color);
		background-color: var(--base-color);
	}
</style>
