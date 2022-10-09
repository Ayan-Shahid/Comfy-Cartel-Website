import React, { FunctionComponent } from "react";
import * as Styled from "styles/Main3.elements";
import Card from "./Card";

const Main3: FunctionComponent = () => {
	return (
		<Styled.Wrapper id="main3">
			<Styled.Heading>viverra non quam sodales. cursus </Styled.Heading>
			<Styled.List>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</Styled.List>
		</Styled.Wrapper>
	);
};

export default Main3;
