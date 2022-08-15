import React, { useEffect, useState } from "react";
import styled from "styled-components";
// @ts-expect-error
import AmazonEmber from "../../fonts/AmazonEmber/AmazonEmber_Rg.ttf";

const StyledContainer = styled.div`
	@font-face {
		font-family: AmazonEmber-Rg;
		src: url(${AmazonEmber});
	}
	font-family: "AmazonEmber-Rg", Trebuchet MS;
	margin: 0;

	${(props: { dark?: boolean }) =>
		props.dark
			? `--text-color: #fff;
				color: #fff;
				--bg-color: #000;
				& svg{
					fill: #fff
				}`
			: `--text-color: #000;
				color: #000;
			   --bg-color: #f7f7f7;
		`}
`;

export interface IContainer {
	children: JSX.Element | JSX.Element[];
	dark?: boolean;
	setDark?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Container: React.FC = ({ children }) => {
	const [dark, setDark] = useState<boolean>(false);

	useEffect(() => {
		document.body.style.backgroundColor = dark ? "#000" : "#f7f7f7";
	}, []);

	return (
		<StyledContainer setDark={setDark} dark={dark}>
			{children}
		</StyledContainer>
	);
};

export default Container;
