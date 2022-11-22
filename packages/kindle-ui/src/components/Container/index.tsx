import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
	margin: 0;
	font-family: "Amazon Ember", "Bookerly";

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
