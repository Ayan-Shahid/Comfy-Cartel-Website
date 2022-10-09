import styled from "styled-components";

export const Wrapper = styled.article`
	width: 30rem;
	height: 16rem;
	flex: none;
	position: relative;
	cursor: pointer;
	&:hover {
		.image {
			transform: scale(1.2) rotate(5deg);
		}
		.button {
			transform: translateY(0%);
		}
	}
`;

export const Figure = styled.figure`
	position: relative;
	background: ${({ theme: { colors } }) => colors.secondary[200]};
	display: flex;
	border-radius: 1rem;
	height: 100%;
	width: 100%;
	margin: 0;
	box-shadow: 0 4px 16px rgba(128, 128, 171, 25);
	overflow: hidden;
	.image {
		transition: 0.2s ease-in-out;
	}
`;

export const Caption = styled.figcaption`
	background: ${({ theme: { colors } }) => colors.secondary[100].concat("8a")};
	width: 100%;
	height: fit-content;
	display: flex;
	backdrop-filter: blur(2px);
	z-index: 1;
	padding: 0.625rem 1.25rem;
	align-items: center;
	align-self: flex-end;
	justify-content: space-between;
	.button {
		transform: translateY(150%);
	}
`;

export const BoldSubtitle = styled.p`
	font-size: ${({ theme: { fonts } }) => fonts.subtitle};
	font-weight: ${({ theme: { weight } }) => weight.bold};
	margin: 0;
	@media screen and (max-width: 800px) {
		font-size: ${({ theme: { fonts } }) => fonts.details};
	}
`;
export const Small = styled.p`
	font-size: ${({ theme: { fonts } }) => fonts.small};
	margin: 0;
	@media screen and (max-width: 800px) {
		font-size: ${({ theme: { fonts } }) => fonts.xsmall};
	}
`;
