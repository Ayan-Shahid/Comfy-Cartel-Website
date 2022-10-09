import React, { FunctionComponent } from "react";
import * as Styled from "styles/Pricing.elements";
import Button from "./Button";

const Pricing: FunctionComponent = () => {
	return (
		<Styled.Wrapper>
			<Styled.SubTitle>Basic</Styled.SubTitle>
			<Styled.Header>25$</Styled.Header>
			<Styled.SubTitle>Basic</Styled.SubTitle>
			<Styled.Small>lorem ipusm lorem ipsum</Styled.Small>
			<Styled.Small>lorem ipusm lorem ipsum</Styled.Small>
			<Styled.Small>lorem ipusm lorem ipsum</Styled.Small>
			<Styled.Small>lorem ipusm lorem ipsum</Styled.Small>
			<Button size="large" text="Buy Subscription" />
		</Styled.Wrapper>
	);
};

export default Pricing;
