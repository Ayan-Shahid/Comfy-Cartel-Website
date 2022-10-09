import styled from "styled-components";

export const Wrapper = styled.article`
	display: flex;
	flex-direction: column;
	background: ${({ theme: { colors } }) => colors.secondary[100]};
	border-radius: 1rem;
	gap: 2rem;
	&.active {
		display: flex;
	}
	&.close {
		display: none;
	}
`;

export const HeadingBold = styled.p`
	margin: 0;
	color: ${({ theme: { colors } }) => colors.secondary[500]};
	font-size: ${({ theme: { fonts } }) => fonts.header};
	font-weight: ${({ theme: { weight } }) => weight.bold};
	@media screen and (max-width: 1000px) {
		font-size: ${({ theme: { fonts } }) => fonts.title};
	}
	@media screen and (max-width: 800px) {
		font-size: ${({ theme: { fonts } }) => fonts.subtitle};
	}
`;

export const Row = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
	flex: 1;
`;
export const Column = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 1rem;
`;

export const DetailsBold = styled.p`
	margin: 0;
	color: ${({ theme: { colors } }) => colors.secondary[500]};
	font-size: ${({ theme: { fonts } }) => fonts.details};
	font-weight: ${({ theme: { weight } }) => weight.bold};
	@media screen and (max-width: 1000px) {
		font-size: ${({ theme: { fonts } }) => fonts.small};
	}
`;
export const Small = styled.p`
	margin: 0;
	color: ${({ theme: { colors } }) => colors.secondary[500]};
	font-size: ${({ theme: { fonts } }) => fonts.small};
	@media screen and (max-width: 1000px) {
		font-size: ${({ theme: { fonts } }) => fonts.xsmall};
	}
`;
