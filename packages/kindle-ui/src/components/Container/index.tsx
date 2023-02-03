import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
	margin: 0;
	font-family: "Amazon Ember", "Bookerly";

	--text-color-secondary: #9d9797;
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
		`};
`;

export interface IContainer {
	children: JSX.Element | JSX.Element[];
	deviceFrame?: React.ElementType;
	dark?: boolean;
	setDark?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Container: React.FC<IContainer> = ({ children, deviceFrame, dark }) => {
	if (deviceFrame) {
		let DeviceFrame = deviceFrame;
		return (
			<StyledContainer dark={dark}>
				<DeviceFrame dark={dark}>{children}</DeviceFrame>
			</StyledContainer>
		);
	}

	return <StyledContainer dark={dark}>{children}</StyledContainer>;
};

export default Container;
