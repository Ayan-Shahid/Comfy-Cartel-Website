import styled from "styled-components";

export const Wrapper = styled.section`
	height: fit-content;
	display: flex;
	padding: 3rem 5rem;
	justify-content: space-between;
	align-items: center;
	gap: 5rem;
	@media screen and (max-width: 650px) {
		flex-direction: column;
		align-items: flex-start;
	}
	@media screen and (max-width: 650px) {
		padding: 3rem 2rem;
	}
`;

export const Aside = styled.aside`
	position: relative;
	width: 100%;
	height: 100%;

	margin: 0;
	@media screen and (max-width: 650px) {
		width: fit-content;
	}
`;

export const Figure1 = styled.figure`
	position: relative;
	width: 20rem;
	margin: 0;
	height: 25rem;
	border-radius: 1rem;
	overflow: hidden;
	@media screen and (max-width: 800px) {
		width: 15rem;
		height: 20rem;
	}

	@media screen and (max-width: 650px) {
		width: 20rem;
		height: 25rem;
	}
	@media screen and (max-width: 500px) {
		width: 15rem;
		height: 20rem;
	}
`;

export const Figure2 = styled(Figure1)`
	width: 15rem;
	height: 20rem;
	bottom: -2rem;
	right: -2rem;
	position: absolute;
	@media screen and (max-width: 800px) {
		width: 10rem;
		height: 15rem;
	}
	@media screen and (max-width: 650px) {
		width: 15rem;
		height: 20rem;
	}
	@media screen and (max-width: 500px) {
		width: 10rem;
		height: 15rem;
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
	word-break: break-all;
	@media screen and (max-width: 800px) {
		font-size: ${({ theme: { fonts } }) => fonts.xsmall};
	}
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	width: fit-content;
	gap: 2rem;
`;
