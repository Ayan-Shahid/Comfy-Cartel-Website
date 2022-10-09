import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 0.4rem;
	width: 100%;
	.row1 {
		width: 95%;
	}
`;

export const Circle = styled.span`
	height: 1.5rem;
	flex: none;
	width: 1.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${({ theme: { colors } }) => colors.primary[100]};
	border-radius: 100%;
	.timeline-icon {
		width: 1rem;
		height: 1rem;
		stroke: ${({ theme: { colors } }) => colors.secondary[100]};
	}
`;
export const Line = styled.span`
	height: 0.4rem;
	width: 100%;
	background: ${({ theme: { colors } }) => colors.secondary[200]};
	position: relative;
	&::before {
		content: "";
		position: absolute;
		width: 0%;
		height: 100%;
		background: ${({ theme: { colors } }) => colors.primary[100]};
		border-radius: 1rem;
	}
`;

export const Text = styled.p`
	margin: 0;
	font-size: ${({ theme: { fonts } }) => fonts.small};
	color: ${({ theme: { colors } }) => colors.secondary[500]};
	@media screen and (max-width: 1000px) {
		font-size: ${({ theme: { fonts } }) => fonts.xsmall};
	}
`;
export const Row = styled.span`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
