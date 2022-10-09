import Image from "next/image";
import React, { FunctionComponent } from "react";
import * as Styled from "styles/Card.elements";
import Button from "./Button";
import Bag from "public/icons/bag.svg";

const Card: FunctionComponent = () => {
	return (
		<Styled.Wrapper>
			<Styled.Figure>
				<Image
					src="https://images.unsplash.com/photo-1664629341121-4d727322c91a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
					layout="fill"
					alt="card-picture"
					className="image"
				/>
				<Styled.Caption>
					<div>
						<Styled.BoldSubtitle>Modern Interior</Styled.BoldSubtitle>
						<Styled.Small>Check out this modern interior design.</Styled.Small>
					</div>
					<Button icon={<Bag />} className="button" text="Discover" />
				</Styled.Caption>
			</Styled.Figure>
		</Styled.Wrapper>
	);
};

export default Card;
