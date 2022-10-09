import Image from "next/image";
import React, { FunctionComponent } from "react";
import * as Styled from "styles/Main2.elements";

const Main2: FunctionComponent = () => {
	return (
		<Styled.Wrapper id="main2">
			<Styled.Aside>
				<Styled.Figure1>
					<Image
						alt="figure1"
						src="https://images.unsplash.com/photo-1664140703011-f35e6e3c1b64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
						layout="fill"
					/>
				</Styled.Figure1>
				<Styled.Figure2>
					<Image
						alt="figure1"
						src="https://images.unsplash.com/photo-1663811397374-a51d5ae11b73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
						layout="fill"
					/>
				</Styled.Figure2>
			</Styled.Aside>
			<Styled.Column>
				<Styled.Heading>viverra non quam sodales. cursus</Styled.Heading>
				<Styled.Text>
					lobortis, quam elementum nibh nisi ex Nunc non sapien vitae faucibus
					nisi lacus, viverra sit non ex id non urna. tempor lacus eu libero,
					felis, sed ex Nullam vitae Praesent convallis. risus tincidunt vitae
					tincidunt Cras id libero, Nunc lorem. Lorem leo. non nec diam risus
					faucibus
				</Styled.Text>
			</Styled.Column>
		</Styled.Wrapper>
	);
};

export default Main2;
