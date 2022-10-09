import React, { Dispatch, FunctionComponent, SetStateAction } from "react";
import * as Styled from "styles/Form.elements";

import Button from "./Button";
import LeftCarrot from "public/icons/left-carrot.svg";

interface Form3Props {
	cancel?: () => void;
	active: "form1" | "form2" | "form3";
	setActive: Dispatch<SetStateAction<"form1" | "form2" | "form3">>;
}

const Form1: FunctionComponent<Form3Props> = ({
	cancel,
	active,
	setActive,
}: Form3Props) => {
	const closeForm = () => {
		if (cancel) cancel();
		setActive("form1");
	};

	return (
		<Styled.Wrapper className={active === "form3" ? "active" : "close"}>
			<Styled.HeadingBold>Contact Details</Styled.HeadingBold>
			<Styled.Small>
				non tincidunt vehicula, tincidunt ex nec id Cras Morbi In Ut tempor
				volutpat ac elit sit lorem. diam sit Sed libero, luctus
			</Styled.Small>
			<Styled.Row>
				<Button
					onClick={closeForm}
					text="Go Back"
					icon={<LeftCarrot className="icon" />}
				/>
			</Styled.Row>
		</Styled.Wrapper>
	);
};

export default Form1;
