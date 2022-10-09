import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Space Mono', monospace;
    font-weight: 400;
  }
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme: { colors } }) => colors.secondary[100]};
    color: ${({ theme: { colors } }) => colors.secondary[500]};
    .wave {
      position: absolute;
      right: 0;
      z-index: -1;
    }
    .wave2 {
      position: absolute;
      left: -5rem;
      top: 250%;
      z-index: -1;
    }
  }
`;

export default GlobalStyles;
