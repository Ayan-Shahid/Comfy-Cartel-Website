import styled from "styled-components";

export const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	padding: 5rem;
	height: 100%;
	justify-content: center;
	gap: 5rem;
	align-items: center;
	@media screen and (max-width: 650px) {
		padding: 2rem;
	}
`;

export const Row = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 6rem;
	width: 100%;
	justify-content: center;
	@media screen and (max-width: 500px) {
		gap: 2rem;
	}
`;

export const Heading = styled.h1`
	margin: 0;
	align-self: flex-start;
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
