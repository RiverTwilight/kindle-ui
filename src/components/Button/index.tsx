import React from "react";
import styled from "styled-components";

const Button = styled.button`
	border: 2px solid #000;
    width: 
`;

export interface IButton {
	children: JSX.Element | JSX.Element[];
}

export default ({ children }: IButton) => {
	return <Button>{children}</Button>;
};
