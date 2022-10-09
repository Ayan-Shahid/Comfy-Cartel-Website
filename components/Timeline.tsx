import React, { FunctionComponent } from "react";
import * as Styled from "styles/Timeline.elements";
import Check from "public/icons/check.svg";
import Cross from "public/icons/cross.svg";

const Timeline: FunctionComponent = () => {
	return (
		<Styled.Wrapper>
			<Styled.Row className="row1">
				<Styled.Circle>
					<Check className="timeline-icon" />
				</Styled.Circle>
				<Styled.Line />
				<Styled.Circle>
					<Check className="timeline-icon" />
				</Styled.Circle>
				<Styled.Line />
				<Styled.Circle>
					<Cross className="timeline-icon" />
				</Styled.Circle>
			</Styled.Row>
			<Styled.Row>
				<Styled.Text>Step 1</Styled.Text>
				<Styled.Text>Step 2</Styled.Text>
				<Styled.Text>Step 3</Styled.Text>
			</Styled.Row>
		</Styled.Wrapper>
	);
};

export default Timeline;
