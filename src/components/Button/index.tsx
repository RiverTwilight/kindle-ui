import React from "react";
import styled from "styled-components";
import hover from "../../utils/hover"

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
	overflow: hidden;
	${hover}
`;

export interface IButton {
	children: JSX.Element | JSX.Element[];
	onClick?: (e: any) => void
}

export default ({ children, onClick }: IButton) => {
	return <Button onClick={onClick}>{children}</Button>;
};
