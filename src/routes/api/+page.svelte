<script lang="ts">
	import BorderedSection from '$sample/components/section/BorderedSection.svelte';
	import SectionTitleText from '$sample/components/text/SectionTitleText.svelte';
	import PropertyList from '$sample/components/propertyList/PropertyList.svelte';
	import type { PropertyItem } from '$sample/components/propertyList/propertyItem.js';

	const properties: readonly PropertyItem[] = [
		{
			name: 'text',
			type: 'string',
			required: false,
			default: "''",
			description: 'The string to be syntax highlighted'
		},
		{
			name: 'old',
			type: 'string',
			required: false,
			default: 'undefined',
			description: 'Used only when a diff display is needed.'
		},
		{
			name: 'languages',
			type: 'readonly Language[]',
			required: false,
			default: 'Language.allCases',
			description:
				'List of languages registered with Highlight.js. If using a language not available in this library, create a custom Language instance and combine it with Language.allCases in the property'
		},
		{
			name: 'language',
			type: 'Language',
			required: false,
			default: 'undefined',
			description:
				'The language to be highlighted by Highlight.js. Specify a language included in languages. If not specified, the language of the text will be automatically determined.'
		},
		{
			name: 'setNumber',
			type: 'boolean',
			required: false,
			default: 'false',
			description: 'Whether to display line numbers or not'
		}
	];
</script>

<BorderedSection>
	<SectionTitleText>Highlighted</SectionTitleText>
	<h3>Svelte Properties</h3>
	<PropertyList {properties} />
</BorderedSection>
