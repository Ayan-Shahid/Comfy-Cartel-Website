import React, { FunctionComponent } from "react";
import * as Styled from "styles/Main4.elements";
import Carousal from "./Carousal";

const Main4: FunctionComponent = () => {
	return (
		<Styled.Wrapper id="main4">
			<Styled.Heading>viverra non quam sodales. cursus </Styled.Heading>
			<Carousal />
		</Styled.Wrapper>
	);
};

export default Main4;
