import styled from "styled-components";

export const Wrapper = styled.article`
	display: flex;
	align-items: center;
	box-shadow: 0 4px 16px rgba(128, 128, 171, 25);
	flex-direction: column;
	width: fit-content;
	background: ${({ theme: { colors } }) => colors.secondary[100]};
	padding: 1.25rem 2.5rem;
	gap: 1.25rem;
	height: fit-content;
	justify-content: center;
	border-radius: 0.625rem;
	cursor: pointer;
	transition: 0.2s ease-in-out;
	&:hover {
		transform: scale(1.05);
		box-shadow: 0 8px 32px rgba(128, 128, 171, 25);
	}
	@media screen and (max-width: 500px) {
		width: 100%;
	}
`;

export const SubTitle = styled.p`
	font-size: ${({ theme: { fonts } }) => fonts.subtitle};
	margin: 0;
	@media screen and (max-width: 800px) {
		font-size: ${({ theme: { fonts } }) => fonts.details};
	}
`;

export const Header = styled.h1`
	font-size: ${({ theme: { fonts } }) => fonts.header};
	margin: 0;
	@media screen and (max-width: 800px) {
		font-size: ${({ theme: { fonts } }) => fonts.title};
	}
`;

export const Small = styled.p`
	font-size: ${({ theme: { fonts } }) => fonts.small};
	margin: 0;
	@media screen and (max-width: 800px) {
		font-size: ${({ theme: { fonts } }) => fonts.xsmall};
	}
`;
