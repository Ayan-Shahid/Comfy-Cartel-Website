import React, { FunctionComponent, useState } from "react";
import * as Styled from "styles/Main1.elements";
import Button from "./Button";
import Bag from "public/icons/bag.svg";
import Image from "next/image";
import MainForm from "./MainForm";

const Main1: FunctionComponent = () => {
	const [form, setForm] = useState<boolean>(false);
	const open = () => {
		setForm(true);
	};
	return (
		<Styled.Wrapper id="main1">
			<MainForm form={form} setForm={setForm} />
			<Styled.Column>
				<Styled.Heading>eget dui. lobortis</Styled.Heading>
				<Styled.Text>
					nibh tortor. orci vehicula, elementum elit id ultrices nec tincidunt
					vitae viverra est. Nunc laoreet in nibh tortor. orci vehicula,
					elementum elit id ultrices nec tincidunt vitae viverra est. Nunc
					laoreet in
				</Styled.Text>
				<Button onClick={open} text="Buy Now" icon={<Bag className="icon" />} />
			</Styled.Column>
			<Styled.Figure>
				<Image layout="fill" src="/images/Lights.png" alt="lights" />
			</Styled.Figure>
		</Styled.Wrapper>
	);
};

export default Main1;
