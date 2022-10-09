import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			primary: {
				100: string;
				200: string;
				300: string;
				400: string;
				500: string;
			};
			secondary: {
				100: string;
				200: string;
				300: string;
				400: string;
				500: string;
			};
		};
		fonts: {
			xsmall: string;
			small: string;
			details: string;
			body: string;
			subtitle: string;
			title: string;
			header: string;
		};
		weight: {
			regular: number;
			bold: number;
		};
	}
}
