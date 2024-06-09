# Svelte Diff Highlighting

## 概要

このライブラリは、ソースコードのSyntax Highlightingや差分表示を行うためのSvelteコンポーネントライブラリです。

## 使用方法

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

## ホームページ

https://lemo-nade-room.github.io/svelte-diff-highlighting

## NPMレジストリ

https://www.npmjs.com/package/svelte-diff-highlighting

## License

This software is released under the MIT License. For more details, please refer to the [LICENSE](./LICENSE) file.

Portions of this code are protected under copyright and are used under the terms of the BSD 3-Clause License:

[highlight.js](https://github.com/highlightjs/highlight.js/blob/main/LICENSE)
