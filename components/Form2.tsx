import React, { Dispatch, FunctionComponent, SetStateAction } from "react";
import * as Styled from "styles/Form.elements";
import Input from "./Input";
import Telephone from "public/icons/telephone.svg";
import Mail from "public/icons/mail.svg";

import Button from "./Button";
import RightCarrot from "public/icons/right-carrot.svg";
import Cancel from "public/icons/cancel.svg";

interface Form2Props {
	cancel?: () => void;
	active: "form1" | "form2" | "form3";
	setActive: Dispatch<SetStateAction<"form1" | "form2" | "form3">>;
}

const Form1: FunctionComponent<Form2Props> = ({
	cancel,
	active,
	setActive,
}: Form2Props) => {
	const closeForm = () => {
		if (cancel) cancel();
	};
	const nextForm = () => {
		setActive("form3");
	};
	return (
		<Styled.Wrapper className={active === "form2" ? "active" : "close"}>
			<Styled.HeadingBold>Contact Details</Styled.HeadingBold>
			<Styled.Row>
				<Input placeholder="Phone" icon={<Telephone />} />
			</Styled.Row>

			<Styled.Column>
				<Styled.DetailsBold>City</Styled.DetailsBold>
				<Styled.Row>
					<Input placeholder="Email" icon={<Mail />} />
				</Styled.Row>
			</Styled.Column>
			<Styled.Row>
				<Button
					onClick={nextForm}
					text="Submit"
					icon={<RightCarrot className="icon" />}
				/>
				<Button
					color="secondary"
					text="Cancel"
					onClick={closeForm}
					icon={<Cancel className="icon" />}
				/>
			</Styled.Row>
		</Styled.Wrapper>
	);
};

export default Form1;
