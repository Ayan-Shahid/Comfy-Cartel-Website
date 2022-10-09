import { Form2, Form3 } from "components";
import React, {
	Dispatch,
	FunctionComponent,
	SetStateAction,
	useState,
} from "react";
import * as Styled from "styles/MainForm.elements";
import Form1 from "./Form1";

interface MainFormProps {
	setForm?: Dispatch<SetStateAction<boolean>>;
	form?: boolean;
}

const MainForm: FunctionComponent<MainFormProps> = ({
	setForm,
	form,
}: MainFormProps) => {
	const [activeForm, setActiveForm] = useState<"form1" | "form2" | "form3">(
		"form1"
	);
	const closeForm = () => {
		if (setForm) setForm(false);
	};
	return (
		<Styled.Wrapper className={form ? "active" : "close"}>
			<Form1 active={activeForm} setActive={setActiveForm} cancel={closeForm} />
			<Form2 active={activeForm} setActive={setActiveForm} cancel={closeForm} />
			<Form3 active={activeForm} setActive={setActiveForm} cancel={closeForm} />
		</Styled.Wrapper>
	);
};

export default MainForm;
