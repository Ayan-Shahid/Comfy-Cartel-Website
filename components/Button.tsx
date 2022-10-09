import React, {
	ButtonHTMLAttributes,
	FunctionComponent,
	ReactNode,
} from "react";
import * as Styled from "styles/Button.elements";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon?: ReactNode;
	text?: string;
	color?: "primary" | "secondary";
}

const Button: FunctionComponent<ButtonProps> = ({
	icon,
	text,
	color,
	...props
}: ButtonProps) => {
	return (
		<Styled.Button {...props} className={`${props.className} ${color}`}>
			{icon}
			<Styled.Text>{text}</Styled.Text>
		</Styled.Button>
	);
};

export default Button;
