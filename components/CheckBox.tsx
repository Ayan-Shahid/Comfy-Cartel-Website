import React, { FunctionComponent, useState } from "react";
import Check from "public/icons/check.svg";
import * as Styled from "styles/CheckBox.elements";

const CheckBox: FunctionComponent = () => {
	const [open, setOpen] = useState(false);
	const toggle = () => {
		setOpen(!open);
	};
	return (
		<Styled.Button className={open ? "" : "close"} onClick={toggle}>
			<Check className="icon" />
		</Styled.Button>
	);
};

export default CheckBox;
