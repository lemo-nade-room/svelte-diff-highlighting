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

	const cssProperties: readonly PropertyItem[] = [
		{
			name: '--width',
			type: 'width',
			required: false,
			default: '100%',
			description: 'Overall width of the component'
		},
		{
			name: '--max-width',
			type: 'max-width',
			required: false,
			default: '100%',
			description: 'Maximum width of the component'
		},
		{
			name: '--height',
			type: 'height',
			required: false,
			default: '100%',
			description: 'Overall height of the component'
		},
		{
			name: '--overflow-x',
			type: 'overflow-x',
			required: false,
			default: 'auto',
			description: 'Behavior when source code overflows horizontally. Defaults to scrollable'
		},
		{
			name: '--overflow-y',
			type: 'overflow-y',
			required: false,
			default: 'auto',
			description: 'Behavior when source code overflows vertically. Defaults to scrollable'
		},
		{
			name: '--background',
			type: 'background',
			required: false,
			default: 'none',
			description: 'Background of the entire component'
		},
		{
			name: '--margin',
			type: 'margin',
			required: false,
			default: '0',
			description: 'Margin setting for the entire component'
		},
		{
			name: '--padding',
			type: 'padding',
			required: false,
			default: '0',
			description:
				'Padding setting inside the scrollable area. Can reduce the display area for the source code'
		},
		{
			name: '--scrollbar-width',
			type: 'scrollbar-width',
			required: false,
			default: 'thin',
			description: 'Width of the scrollbar'
		},
		{
			name: '--scrollbar-color',
			type: 'scrollbar-color',
			required: false,
			default: 'auto',
			description: 'Color of the scrollbar'
		},
		{
			name: '--content-width',
			type: 'width',
			required: false,
			default: 'max-content',
			description: 'Width of the source code'
		},
		{
			name: '--content-height',
			type: 'height',
			required: false,
			default: 'max-content',
			description: 'Height of the source code'
		},
		{
			name: '--line-number-font-size',
			type: 'font-size',
			required: false,
			default: '14px',
			description: 'Font size of the line numbers'
		},
		{
			name: '--white-space',
			type: 'white-space',
			required: false,
			default: 'nowrap',
			description: 'White-space setting for the source code'
		},
		{
			name: '--added-marker-border-color',
			type: 'background-color',
			required: false,
			default: '#4ca9ffff',
			description: 'Color of the left border marker for added lines'
		},
		{
			name: '--added-marker-border-width',
			type: 'width',
			required: false,
			default: '4px',
			description: 'Width of the left border marker for added lines'
		},
		{
			name: '--added-marker-background-color',
			type: 'background-color',
			required: false,
			default: '#eaf3ffff',
			description: 'Background color of the marker for added lines'
		},
		{
			name: '--line-height',
			type: 'line-height',
			required: false,
			default: '1.4',
			description: 'Line-height for the source code'
		},
		{
			name: '--line-number-text-align',
			type: 'text-align',
			required: false,
			default: 'right',
			description: 'Text alignment for the line numbers'
		},
		{
			name: '--line-number-color',
			type: 'color',
			required: false,
			default: '#6e6e73ff',
			description: 'Text color of the line numbers'
		},
		{
			name: '--line-number-font-weight',
			type: 'font-weight',
			required: false,
			default: 'normal',
			description: 'Font weight of the line numbers'
		},
		{
			name: '--line-number-font-size',
			type: 'font-size',
			required: false,
			default: '14px',
			description: 'Font size of the line numbers'
		},
		{
			name: '--line-number-font-family',
			type: 'font-family',
			required: false,
			default: 'monospace',
			description: 'Font of the line numbers'
		},
		{
			name: '--line-number-margin-right',
			type: 'margin-right',
			required: false,
			default: '1em',
			description: 'Margin between the line numbers and the source code'
		},
		{
			name: '--line-number-margin-left',
			type: 'margin-left',
			required: false,
			default: '0.5em',
			description: 'Distance from the left edge of the line numbers'
		},
		{
			name: '--omission-icon-color',
			type: 'background-color',
			required: false,
			default: '#ffb74c',
			description: 'Color of the toggle button for omitted lines'
		},
		{
			name: '--removed-marker-border-color',
			type: 'background-color',
			required: false,
			default: '#ffb74c',
			description: 'Color of the left border marker for removed lines'
		},
		{
			name: '--removed-marker-border-width',
			type: 'width',
			required: false,
			default: '4px',
			description: 'Width of the left border marker for removed lines'
		},
		{
			name: '--removed-marker-background-color',
			type: 'background-color',
			required: false,
			default: '#fff7ea',
			description: 'Background color of the marker for removed lines'
		}
	];
</script>

<BorderedSection>
	<SectionTitleText>Highlighted Component</SectionTitleText>
	<h3>Svelte Properties</h3>
	<PropertyList {properties} />
	<h3>CSS Custom Properties</h3>
	<PropertyList properties={cssProperties} />
</BorderedSection>

<style>
	h3 {
		margin-top: 24px;
		font-size: 20px;
		font-weight: bold;
	}
</style>
