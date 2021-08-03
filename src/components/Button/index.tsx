import React from "react";
import styled from "styled-components";

/**
 * Button
 * @author rivertwilight
 */

const Button = styled.button`
	border: 3px solid #000;
	min-width: 70px;
	height: 50px;
	background: #fff;
	font-weight: 600;
	font-size: 1rem;
	padding: 0 30px;
	overflow: hidden
`;

export interface IButton {
	children: JSX.Element | JSX.Element[];
}

export default ({ children }: IButton) => {
	return <Button>{children}</Button>;
};
