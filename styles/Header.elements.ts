import styled from "styled-components";

export const Wrapper = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0;
`;

export const Logo = styled.h1`
	margin: 0;
	font-size: ${({ theme: { fonts } }) => fonts.header};
	font-weight: ${({ theme: { weight } }) => weight.bold};
	padding: 1rem 2rem;
	color: ${({ theme: { colors } }) => colors.secondary[500]};
	@media screen and (max-width: 800px) {
		font-size: ${({ theme: { fonts } }) => fonts.title};
	}
`;
export const Row = styled.div`
	display: flex;
	align-items: center;
	padding: 0 3rem;
	gap: 3rem;
	@media screen and (max-width: 650px) {
		display: none;
	}
`;

export const Link = styled.a`
	margin: 0;
	font-size: ${({ theme: { fonts } }) => fonts.small};
	color: ${({ theme: { colors } }) => colors.secondary[500]};
	transition: 0.2s ease-in-out;
	cursor: pointer;
	user-select: none;
	@media screen and (max-width: 800px) {
		font-size: ${({ theme: { fonts } }) => fonts.xsmall};
	}
	&:hover {
		color: ${({ theme: { colors } }) => colors.primary[100]};
	}
`;
