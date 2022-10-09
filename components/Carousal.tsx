import React, { FunctionComponent, useState } from "react";
import * as Styled from "styles/Carousal.elements";
import LeftCarrot from "public/icons/left-carrot.svg";
import RightCarrot from "public/icons/right-carrot.svg";
import Image from "next/image";

const list = [
	"https://images.unsplash.com/photo-1664819241337-6010187573b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
	"https://images.unsplash.com/photo-1664361238207-164532d1934e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
	"https://images.unsplash.com/photo-1664261421791-c25c5760f577?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];

const Carousal: FunctionComponent = () => {
	const [current, setCurrent] = useState<number>(0);
	console.log(current);
	const next = () => {
		current < list.length - 1 ? setCurrent(current + 1) : setCurrent(0);
	};
	const previous = () => {
		current > 0 ? setCurrent(current - 1) : setCurrent(list.length - 1);
	};
	return (
		<Styled.Wrapper>
			<Styled.Button onClick={previous}>
				<LeftCarrot className="carrot" />
			</Styled.Button>
			<Styled.Main>
				<Styled.Figure>
					{list.map((item, index) => (
						<Image
							key={index}
							className={`${
								current === index ? "active" : "close"
							} carousal-image`}
							layout="fill"
							alt="carousal-image"
							src={item}
						/>
					))}
				</Styled.Figure>
				<Styled.Caption>
					{new Array(3).fill("").map((item, index) => (
						<Styled.Indicator
							className={current === index ? "active" : ""}
							key={index}
						/>
					))}
				</Styled.Caption>
			</Styled.Main>
			<Styled.Button onClick={next}>
				<RightCarrot className="carrot" />
			</Styled.Button>
		</Styled.Wrapper>
	);
};

export default Carousal;
