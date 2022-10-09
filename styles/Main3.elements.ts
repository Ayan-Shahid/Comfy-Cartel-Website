import styled from "styled-components";

export const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	padding: 5rem;
	gap: 5rem;
	@media screen and (max-width: 650px) {
		padding: 2rem;
	}
`;
export const List = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
	gap: 5rem;
	overflow: scroll;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
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
