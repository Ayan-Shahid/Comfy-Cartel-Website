import React, { FunctionComponent } from "react";
import * as Styled from "styles/Main5.elements";
import Pricing from "./Pricing";

const Main5: FunctionComponent = () => {
	return (
		<Styled.Wrapper id="main5">
			<Styled.Heading>viverra non quam sodales. cursus </Styled.Heading>
			<Styled.Row>
				<Pricing />
				<Pricing />
				<Pricing />
			</Styled.Row>
		</Styled.Wrapper>
	);
};

export default Main5;
