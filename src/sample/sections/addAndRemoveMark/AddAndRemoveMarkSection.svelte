<script lang="ts">
	import Highlighted from '$lib/ui/Highlighted.svelte';
	import { Language } from '$lib/scripts/language.js';
	import 'highlight.js/styles/xcode.css';
	import BorderedSection from '$sample/components/section/BorderedSection.svelte';
	import SectionTitleText from '$sample/components/text/SectionTitleText.svelte';

	const oldText = `func fizzbuzz(number: Int) -> String {
	if number % 15 == 0 {
		return "FizzBuzz"
	}
	if number % 3 == 0 {
		return "Fizz"
	}
	if number % 5 == 0 {
		return "Buzz"
	}
	return String(number)
}`;
	const newText = `extension Int {
	divisible(by divisor: Int) -> Bool {
		self % divisor == 0
	}
}

func fizzbuzz(number: Int) -> String {
	if number.divisible(by: 15) {
		return "FizzBuzz"
	}
	if number.divisible(by: 3) {
		return "Fizz"
	}
	if number.divisible(by: 5) {
		return "Buzz"
	}
	return String(number)
}`;
</script>

<BorderedSection>
	<div class="add-and-remove-mark-section">
		<div class="title">
			<SectionTitleText>Add and Remove Code Diff</SectionTitleText>
		</div>
		<div class="targets">
			<div class="old target">
				<h3>Old Code</h3>
				<div class="code">
					<Highlighted setNumber text={oldText} language={Language.swift} />
				</div>
			</div>
			<div class="new target">
				<h3>New Code</h3>
				<div class="code">
					<Highlighted setNumber text={newText} language={Language.swift} />
				</div>
			</div>
		</div>

		<div class="diff">
			<h3>Difference</h3>
			<div class="code">
				<Highlighted setNumber text={newText} language={Language.swift} old={oldText} />
			</div>
		</div>
	</div>
</BorderedSection>

<style>
	.add-and-remove-mark-section {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;

		& > .title {
			margin-bottom: 32px;
			width: 100%;
		}

		& > .targets {
			width: 90svw;
			display: flex;
			align-items: flex-start;
			justify-content: space-between;
			margin-bottom: 24px;

			& > .target {
				width: calc(45svw - 6px);

				& > h3 {
					width: 100%;
					font-size: 18px;
					font-weight: 600;
					margin-bottom: 4px;
				}

				& > .code {
					font-family: var(--code-font-family), monospace;
					font-size: 14px;
					font-optical-sizing: auto;
					font-weight: 400;
					font-style: normal;
					box-shadow: var(--box-shadow);
					padding: 12px 0;
					border-radius: 4px;
				}
			}
		}

		& > .diff {
			width: 90svw;
			& > h3 {
				width: 100%;
				font-size: 18px;
				font-weight: 600;
				margin-bottom: 4px;
			}

			& > .code {
				width: 100%;
				font-family: var(--code-font-family), monospace;
				font-size: 14px;
				font-optical-sizing: auto;
				font-weight: 400;
				font-style: normal;
				max-width: 90svw;
				box-shadow: var(--box-shadow);
				padding: 12px 0;
			}
		}
	}
</style>
