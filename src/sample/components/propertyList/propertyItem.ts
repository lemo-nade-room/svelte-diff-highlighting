export type PropertyItem =
	| {
			name: string;
			type: string;
			required: false;
			default: string;
			description: string;
	  }
	| {
			name: string;
			type: string;
			required: true;
			description: string;
	  };
