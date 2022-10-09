import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
	width: 100%;
`;

export const Figure = styled.figure`
	position: relative;
	width: 100%;
	height: 38rem;
	border-radius: 0.8rem;
	overflow: hidden;
	display: flex;
	@media screen and (max-width: 800px) {
		height: 30rem;
	}
	@media screen and (max-width: 650px) {
		height: 20rem;
	}
	margin: 0;
	.active {
		z-index: 5;
	}
	.close {
		z-index: 1;
	}
	.carousal-image {
		position: absolute;
	}
`;

export const Main = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	width: 100%;
	gap: 2rem;
`;

export const Caption = styled.figcaption`
	display: flex;
	align-items: center;
	align-self: center;
	gap: 1rem;
	justify-content: space-between;
	width: fit-content;
	flex: none;
	z-index: 5;
`;
export const Indicator = styled.span`
	width: 1rem;
	height: 1rem;
	border-radius: 100%;
	background: ${({ theme: { colors } }) => colors.secondary[200]};
	&.active {
		background: ${({ theme: { colors } }) => colors.primary[100]};
	}
`;

export const Button = styled.button`
	background: none;
	border-radius: 1rem;
	padding: 0.5rem;
	border: 0.1rem solid ${({ theme: { colors } }) => colors.secondary[500]};
	transition: 0.2s ease-in-out;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	.carrot {
		width: 1.5rem;
		height: 1.5rem;
		stroke: ${({ theme: { colors } }) => colors.secondary[500]};
		transition: 0.2s ease-in-out;
	}
	&:hover {
		background: ${({ theme: { colors } }) =>
			colors.secondary[500].concat("2a")};
	}
	&:active {
		background: ${({ theme: { colors } }) => colors.primary[100].concat("2a")};
		border: 0.1rem solid ${({ theme: { colors } }) => colors.primary[100]};
		.carrot {
			stroke: ${({ theme: { colors } }) => colors.primary[100]};
		}
	}
`;
