<script lang="ts">
	import Highlighted from '$lib/ui/Highlighted.svelte';
	import { Language } from '$lib/scripts/language.js';
	import 'highlight.js/styles/github.css';

	const oldText = `func fizzbuzz(number: Int) -> String {
	if number % 3 == 0 {
		return "Fizz"
	}
	return String(number)
}`;
	const newText = `func fizzbuzz(number: Int) -> String {
	if number % 3 == 0 {
		return "Fizz"
	}
	if number % 5 == 0 {
		return "Buzz"
	}
	return String(number)
}`;
</script>

<section class="additional-mark-section">
	<h2>Additional Code Diff</h2>
	<div class="targets">
		<div class="old target">
			<h3>Old Code</h3>
			<div class="code">
				<Highlighted text={oldText} language={Language.swift} />
			</div>
		</div>
		<div class="new target">
			<h3>New Code</h3>
			<div class="code">
				<Highlighted text={newText} language={Language.swift} />
			</div>
		</div>
	</div>

	<div class="diff">
		<h3>Difference</h3>
		<Highlighted text={newText} language={Language.swift} old={oldText} />
	</div>
</section>

<style>
	.additional-mark-section {
		width: 100svw;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		& > .targets {
			max-width: 90svw;
			display: flex;
			align-items: flex-start;

			& > .target {
				& > h3 {
					width: 100%;
					font-size: 18px;
					font-weight: 600;
					margin-bottom: 12px;
				}

				font-family: var(--code-font-family), monospace;
				font-size: 14px;
				font-optical-sizing: auto;
				font-weight: 400;
				font-style: normal;
				box-shadow: var(--box-shadow);
				padding: 12px 24px;
				border-radius: 4px;
			}

			& > .new {
				margin-left: 24px;
			}
		}

		& > .diff {
			& > h3 {
				width: 100%;
				font-size: 18px;
				font-weight: 600;
				margin-bottom: 12px;
			}
			margin-top: 24px;
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
