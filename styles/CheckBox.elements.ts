import styled from "styled-components";

export const Button = styled.button`
	border: none;
	outline: none;
	background: ${({ theme: { colors } }) => colors.primary[100]};
	border-radius: 0.6rem;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 1.4rem;
	cursor: pointer;
	height: 1.4rem;
	transition: 0.3s ease-in-out;
	&:hover {
		transform: scale(1.2);
	}
	&:active {
		transform: scale(1);
	}
	&.close {
		background: none;
		border: 0.16rem solid ${({ theme: { colors } }) => colors.primary[100]};
	}
	.icon {
		stroke: ${({ theme: { colors } }) => colors.secondary[100]};
		width: 1rem;
		height: 1rem;
	}
`;
