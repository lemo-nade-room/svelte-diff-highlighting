<script lang="ts">
	import Highlighted from '$lib/ui/Highlighted.svelte';
	import { Language } from '$lib/scripts/language.js';
	import { syntaxHighlightSamples } from '$sample/sections/syntaxHighlight/syntaxHighlightSamples.js';
	import 'highlight.js/styles/github.css';

	let selectedName = syntaxHighlightSamples[0].lang.name;

	$: selected = syntaxHighlightSamples.find((sample) => sample.lang.name === selectedName);
</script>

<section class="syntax-highlight">
	<form>
		<select bind:value={selectedName}>
			{#each syntaxHighlightSamples as sample}
				<option value={sample.lang.name}>{sample.lang.name}</option>
			{/each}
		</select>
	</form>

	<div class="code">
		{#if selected !== undefined}
			<Highlighted text={selected.code} languages={Language.allCases} language={selected.lang} />
		{/if}
	</div>
</section>

<style>
    .syntax-highlight {
        width: 100svw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 40px;

        & > form {
            & > select {
                width: 120px;
                height: 40px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                line-height: 24px;
            }

            padding: 24px;
        }

        & > .code {
            font-family: 'JetBrains Mono', monospace;
            font-size: 14px;
            font-optical-sizing: auto;
            font-weight: 400;
            font-style: normal;
            width: 480px;
            max-width: 90svw;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 12px 24px;
        }
    }
</style>
