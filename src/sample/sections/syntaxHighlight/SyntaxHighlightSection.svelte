<script lang="ts">
	import Highlighted from '$lib/ui/Highlighted.svelte';
	import { Language } from '$lib/scripts/language.js';
	import { syntaxHighlightSamples } from '$sample/sections/syntaxHighlight/syntaxHighlightSamples.js';
	import 'highlight.js/styles/github.css';
	import BorderedSection from '$sample/components/section/BorderedSection.svelte';
	import SectionTitleText from '$sample/components/text/SectionTitleText.svelte';

	let selectedName = syntaxHighlightSamples[0].lang.name;

	$: selected = syntaxHighlightSamples.find((sample) => sample.lang.name === selectedName);
</script>

<BorderedSection>
	<div class="syntax-highlight-section">
		<div class="title">
			<SectionTitleText>Syntax Highlight</SectionTitleText>
		</div>
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
	</div>
</BorderedSection>
<section class="syntax-highlight"></section>

<style>
	.syntax-highlight-section {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		& > .title {
			width: 100%;
			margin-bottom: 24px;
		}

		& > form {
			& > select {
				width: 120px;
				height: 40px;
				box-shadow: var(--box-shadow);
				display: flex;
				justify-content: center;
				align-items: center;
				text-align: center;
				line-height: 24px;
			}
			margin-bottom: 16px;
		}

		& > .code {
			font-family: var(--code-font-family), monospace;
			font-size: 14px;
			font-optical-sizing: auto;
			font-weight: 400;
			font-style: normal;
			width: 480px;
			max-width: 90svw;
			box-shadow: var(--box-shadow);
			padding: 12px 24px;
		}
	}
</style>
