<script lang="ts">
	import type { PropertyItem } from '$sample/components/propertyList/propertyItem.js';

	export let item: PropertyItem;
</script>

<li class="property-item">
	<h4 class="name" translate="no">{item.name}</h4>
	<p class="attribute">
		<span class="type" translate="no">{item.type}</span>
		<span class="is-option">{item.required ? 'Required' : 'Optional'}</span>
		{#if !item.required}
			<span class="default" translate="no">default: {item.default}</span>
		{/if}
	</p>
	<p class="description">{item.description}</p>
</li>

<style>
	.property-item {
		padding: 12px 0;
		& > .name {
			font-weight: bold;
			font-size: 18px;
			margin-bottom: 8px;
		}
		& > .attribute {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			font-size: 14px;
			margin-bottom: 8px;
			margin-left: 12px;
			& > .type {
				display: block;
				padding: 0 8px;
				width: fit-content;
				font-weight: bold;
				font-size: 14px;
				color: white;
				background-color: #b1b1b3;
				border-radius: 5px;
			}
		}
		& > .description {
			font-size: 18px;
			margin-left: 12px;
		}
	}
</style>
