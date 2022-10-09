import React, {
	FunctionComponent,
	InputHTMLAttributes,
	ReactNode,
} from "react";
import * as Styled from "styles/Input.elements";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	icon?: ReactNode;
}

const Input: FunctionComponent<InputProps> = ({
	icon,
	...props
}: InputProps) => {
	return (
		<Styled.Wrapper>
			{icon}
			<Styled.Input {...props} />
		</Styled.Wrapper>
	);
};

export default Input;
