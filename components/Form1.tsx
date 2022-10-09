import React, { Dispatch, FunctionComponent, SetStateAction } from "react";
import * as Styled from "styles/Form.elements";
import Input from "./Input";
import Profile from "public/icons/profile.svg";
import CheckBox from "./CheckBox";
import Button from "./Button";
import RightCarrot from "public/icons/right-carrot.svg";
import Cancel from "public/icons/cancel.svg";

interface Form1Props {
	cancel?: () => void;
	active: "form1" | "form2" | "form3";
	setActive: Dispatch<SetStateAction<"form1" | "form2" | "form3">>;
}

const Form1: FunctionComponent<Form1Props> = ({
	cancel,
	active,
	setActive,
}: Form1Props) => {
	const closeForm = () => {
		if (cancel) cancel();
	};
	const nextForm = () => {
		setActive("form2");
	};
	return (
		<Styled.Wrapper className={active === "form1" ? "active" : "close"}>
			<Styled.HeadingBold>Tell us about yourself</Styled.HeadingBold>
			<Styled.Row>
				<Input placeholder="First Name" icon={<Profile />} />
				<Input placeholder="Last Name" icon={<Profile />} />
			</Styled.Row>
			<Styled.Column>
				<Styled.DetailsBold>Gender</Styled.DetailsBold>
				<Styled.Row>
					<CheckBox />
					<Styled.Small>Male</Styled.Small>
					<CheckBox />
					<Styled.Small>Female</Styled.Small>
				</Styled.Row>
			</Styled.Column>
			<Styled.Column>
				<Styled.DetailsBold>City</Styled.DetailsBold>
				<Styled.Row>
					<Input placeholder="Country" icon={<Profile />} />
					<Input placeholder="State" icon={<Profile />} />
					<Input placeholder="City" icon={<Profile />} />
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
