import React, { FunctionComponent, ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
	colors: {
		primary: {
			100: "#6100FF",
			200: "#6128FF",
			300: "#6150FF",
			400: "#6178FF",
			500: "#618CFF",
		},
		secondary: {
			100: "#EAEAFF",
			200: "#8E8EA3",
			300: "#494959",
			400: "#16181B",
			500: "#0C0C0E",
		},
	},
	fonts: {
		xsmall: "0.875rem",
		small: "1rem",
		details: "1.125rem",
		body: "1.25rem",
		subtitle: "1.5rem",
		title: "2.375rem",
		header: "3rem",
	},
	weight: {
		regular: 400,
		bold: 700,
	},
};

const Theme: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
