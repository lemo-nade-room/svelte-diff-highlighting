# Svelte Diff Highlighting

## Overview

This library is a Svelte component library for syntax highlighting and showing differences in source code.

## Usage

```shell
npm install svelte-diff-highlighting highlight.js
```

```svelte
<script lang="ts">
	import { Highlighted, Language } from 'svelte-diff-highlighting';
	import 'highlight.js/styles/github-dark.css';

	const sourceCode = `public static void main(String[] args) {
		System.out.println("Hello, World!");
	}`;
</script>

<Highlighted text={sourceCode} language={Language.java} />
```

## Homepage

https://lemo-nade-room.github.io/svelte-diff-highlighting

## NPM Registry

https://www.npmjs.com/package/svelte-diff-highlighting

## License

This software is released under the MIT License. For more details, please refer to the [LICENSE](./LICENSE) file.

Portions of this code are protected under copyright and are used under the terms of the BSD 3-Clause License:

[highlight.js](https://github.com/highlightjs/highlight.js/blob/main/LICENSE)
