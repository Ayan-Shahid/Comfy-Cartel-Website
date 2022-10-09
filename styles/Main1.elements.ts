import styled from "styled-components";

export const Wrapper = styled.section`
	display: flex;
	align-items: center;
	height: 70vh;
	padding: 5rem;
	position: relative;
	margin: 0;
	justify-content: flex-start;
	@media screen and (max-width: 650px) {
		padding: 2rem;
	}
`;

export const Figure = styled.figure`
	position: absolute;
	width: 20rem;
	right: 5rem;
	margin: 0;
	height: 20rem;
	@media screen and (max-width: 800px) {
		width: 15rem;
		height: 15rem;
	}
	@media screen and (max-width: 650px) {
		display: none;
	}
`;
export const Column = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	flex: 0.5;
	@media screen and (max-width: 650px) {
		flex: 1;
	}
`;
export const Heading = styled.h1`
	margin: 0;
	font-size: ${({ theme: { fonts } }) => fonts.header};
	font-weight: ${({ theme: { weight } }) => weight.bold};

	color: ${({ theme: { colors } }) => colors.secondary[500]};
	@media screen and (max-width: 800px) {
		font-size: ${({ theme: { fonts } }) => fonts.title};
	}
	@media screen and (max-width: 500px) {
		font-size: ${({ theme: { fonts } }) => fonts.subtitle};
	}
`;
export const Text = styled.p`
	margin: 0;
	font-size: ${({ theme: { fonts } }) => fonts.small};
	color: ${({ theme: { colors } }) => colors.secondary[500]};
	@media screen and (max-width: 800px) {
		font-size: ${({ theme: { fonts } }) => fonts.xsmall};
	}
`;
