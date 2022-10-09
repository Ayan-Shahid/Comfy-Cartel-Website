import styled from "styled-components";

export const Wrapper = styled.article`
	display: flex;
	flex-direction: column;
	width: fit-content;
	padding: 3rem 2.5rem;
	box-shadow: 0 4px 16px rgba(128, 128, 171, 25);
	gap: 2rem;
	border-radius: 1rem;
	transition: 0.2s ease-in-out;
	&.close {
		opacity: 0;
		z-index: -100;
	}
	&.active {
		opacity: 1;
		z-index: 100;
	}
	position: fixed;
	top: 50%;
	background: ${({ theme: { colors } }) => colors.secondary[100]};
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 100;
`;

export const Row = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50%;
	align-self: center;
	@media screen and (max-width: 1000px) {
		width: 100%;
	}
`;
