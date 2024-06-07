<script lang="ts">
	import Highlighted from '$lib/ui/Highlighted.svelte';
	import { Language } from '$lib/scripts/language.js';

	interface Sample {
		code: string;
		lang: Language;
	}

	const samples: readonly Sample[] = [
		{
			code: `if myItem = 0 then
	display dialog "I don't have something to bring" buttons {"OK"} default button "OK"
end if`,
			lang: Language.appleScript
		},
		{
			code: `[ -r ~/.profile ] && . ~/.profile             # set up environment, once, Bourne-sh syntax only
if [ -n "$PS1" ] ; then                       # are we interactive?
   [ -r ~/.bashrc     ] && . ~/.bashrc        # tty/prompt/function setup for interactive shells
   [ -r ~/.bash_login ] && . ~/.bash_login    # any at-login tasks for login shell only
fi                                            # End of "if" block`,
			lang: Language.bash
		},
	];

	let selectedName = samples[0].lang.name;

	$: {
		console.log(selectedName, selected?.code)
	}

	$: selected = samples.find((sample) => sample.lang.name === selectedName);
</script>

<section class="page">
	<form>
		<select bind:value={selectedName}>
			{#each samples as sample}
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
	.page {
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
			--overflow-x: scroll;
		}
	}
</style>
