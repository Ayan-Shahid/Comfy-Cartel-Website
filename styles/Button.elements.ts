/* eslint-disable indent */
import styled from "styled-components";

export const Button = styled.button`
	border: none;
	display: flex;
	align-items: center;
	width: fit-content;
	cursor: pointer;
	background: ${({ theme: { colors } }) => colors.primary[100]};
	&.primary {
		background: ${({ theme: { colors } }) => colors.primary[100]};
	}
	&.secondary {
		background: ${({ theme: { colors } }) => colors.secondary[200]};
		&:hover {
			background: ${({ theme: { colors } }) => colors.secondary[300]};
			box-shadow: 0px 8px 16px rgba(128, 128, 171, 25);
			transform: scale(1.02);
		}
		&:active {
			background: ${({ theme: { colors } }) => colors.secondary[400]};
			box-shadow: 0px 2px 4px rgba(128, 128, 171, 25);
			transform: scale(0.98);
		}
		&:disabled {
			background: ${({ theme: { colors } }) =>
				colors.secondary[500].concat("dd")};
		}
	}
	padding: 1.125rem 2.25rem;
	border-radius: 0.5rem;

	@media screen and (max-width: 800px) {
		font-size: ${({ theme: { fonts } }) => fonts.xsmall};
		padding: 0.875rem 1.75rem;
		border-radius: 0.5rem;
	}
	@media screen and (max-width: 500px) {
		font-size: ${({ theme: { fonts } }) => fonts.xsmall};
		padding: 0.625rem 1.25rem;
		border-radius: 0.5rem;
	}
	transition: 0.2s ease-in-out;
	gap: 0.5rem;
	justify-content: center;
	color: ${({ theme: { colors } }) => colors.secondary[100]};
	font-size: ${({ theme: { fonts } }) => fonts.small};
	box-shadow: 0px 4px 8px rgba(128, 128, 171, 25);
	&:hover {
		background: ${({ theme: { colors } }) => colors.primary[300]};
		box-shadow: 0px 8px 16px rgba(128, 128, 171, 25);
		transform: scale(1.02);
	}
	&:active {
		background: ${({ theme: { colors } }) => colors.primary[400]};
		box-shadow: 0px 2px 4px rgba(128, 128, 171, 25);
		transform: scale(0.98);
	}
	&:disabled {
		background: ${({ theme: { colors } }) => colors.primary[100].concat("dd")};
	}
	.icon {
		stroke: ${({ theme: { colors } }) => colors.secondary[100]};
		width: 1rem;
		height: 1rem;
	}
`;

export const Text = styled.p`
	color: ${({ theme: { colors } }) => colors.secondary[100]};
	font-size: ${({ theme: { fonts } }) => fonts.small};
	margin: 0;
`;
