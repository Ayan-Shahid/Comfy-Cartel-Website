import styled from "styled-components";

export const Wrapper = styled.article`
	display: flex;
	align-items: center;
	position: relative;
	flex: 1;
	& > svg {
		position: absolute;
		margin-left: 0.8rem;
		width: 1rem;
		height: 1rem;
		stroke: ${({ theme: { colors } }) => colors.secondary[500]};
		stroke-width: 0.1rem;
	}
`;

export const Input = styled.input`
	background: none;
	width: 100%;
	border: none;
	outline: none;
	border: 0.1rem solid ${({ theme: { colors } }) => colors.secondary[500]};
	border-radius: 0.5rem;
	color: ${({ theme: { colors } }) => colors.secondary[500]};
	font-size: ${({ theme: { fonts } }) => fonts.small};
	gap: 0.5rem;
	transition: 0.2s ease-in-out;
	padding: 1.125rem;
	padding-left: 2.4rem;

	@media screen and (max-width: 800px) {
		font-size: ${({ theme: { fonts } }) => fonts.xsmall};
		padding: 0.875rem;
		padding-left: 2.4rem;
	}
	@media screen and (max-width: 500px) {
		font-size: ${({ theme: { fonts } }) => fonts.xsmall};
		padding: 0.625rem;
		padding-left: 2.4rem;
	}
	&:hover {
		background: ${({ theme: { colors } }) =>
			colors.secondary[200].concat("4a")};
	}
	&:focus {
		border: 0.1rem solid ${({ theme: { colors } }) => colors.primary[100]};
	}
	&::placeholder {
		color: ${({ theme: { colors } }) => colors.secondary[300]};
	}
`;
