<header>
	<h1>Svelte Diff Highlighting</h1>
	<nav>
		<a href="/">Docs</a>
		<a href="/api">API</a>
	</nav>
</header>

<style>
    header {
        color: var(--header-on-base-color);
        background-color: var(--header-base-color);

        display: flex;
        justify-content: space-between;
        align-items: center;

				height: 48px;
				width: 100svw;

				padding: 0 24px;

				& > h1 {
					font-size: 24px;
					font-weight: 600;
				}

				& > nav {
						width: 80px;
						display: flex;
						justify-content: space-between;
						align-items: center;
						font-size: 20px;
				}
    }
</style>