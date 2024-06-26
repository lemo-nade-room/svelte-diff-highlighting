import type { LanguageFn, Mode } from 'highlight.js';

export const terraform: LanguageFn = (hljs) => {
	const NUMBERS: Mode = {
		className: 'number',
		begin: '\\b\\d+(\\.\\d+)?',
		relevance: 0
	};

	const STRINGS: Mode = {
		className: 'string',
		begin: '"',
		end: '"',
		contains: [
			{
				className: 'variable',
				begin: '\\${',
				end: '\\}',
				relevance: 9,
				contains: [
					{
						className: 'string',
						begin: '"',
						end: '"'
					},
					{
						className: 'meta',
						begin: '[A-Za-z_0-9]*' + '\\(',
						end: '\\)',
						contains: [
							NUMBERS,
							{
								className: 'string',
								begin: '"',
								end: '"',
								contains: [
									{
										className: 'variable',
										begin: '\\${',
										end: '\\}',
										contains: [
											{
												className: 'string',
												begin: '"',
												end: '"',
												contains: [
													{
														className: 'variable',
														begin: '\\${',
														end: '\\}'
													}
												]
											},
											{
												className: 'meta',
												begin: '[A-Za-z_0-9]*' + '\\(',
												end: '\\)'
											}
										]
									}
								]
							},
							'self'
						]
					}
				]
			}
		]
	};

	return {
		aliases: ['tf', 'hcl'],
		keywords: 'resource variable provider output locals module data terraform|10',
		literal: 'false true null',
		contains: [hljs.COMMENT('\\#', '$'), NUMBERS, STRINGS]
	};
};
