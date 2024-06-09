<script lang="ts">
	import type { PropertyItem as Item } from '$sample/components/propertyList/propertyItem.js';
	import PropertyItem from './PropertyItem.svelte';

	export let properties: readonly Item[];
</script>

<ul class="property-list">
	{#each properties as property}
		<PropertyItem item={property} />
	{/each}
</ul>

<style>
	.property-list {
		list-style: none;
		padding: 0 24px;
	}
</style>
