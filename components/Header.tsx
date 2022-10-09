import React, { FunctionComponent } from "react";
import * as Styled from "styles/Header.elements";

const Header: FunctionComponent = () => {
	const scrollIntoView = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<Styled.Wrapper>
			<Styled.Logo>Logo</Styled.Logo>
			<Styled.Row>
				<Styled.Link onClick={() => scrollIntoView("main1")}>Home</Styled.Link>
				<Styled.Link onClick={() => scrollIntoView("main2")}>About</Styled.Link>
				<Styled.Link onClick={() => scrollIntoView("main4")}>
					Products
				</Styled.Link>
				<Styled.Link onClick={() => scrollIntoView("main5")}>
					Pricing
				</Styled.Link>
				<Styled.Link onClick={() => scrollIntoView("main3")}>
					Contact Us
				</Styled.Link>
			</Styled.Row>
		</Styled.Wrapper>
	);
};

export default Header;
