import React from "react";
import styled from "styled-components";

const StyledMenuItem = styled.div`

	padding-top: 17px;
	padding-bottom: 17px;
	padding-left: 20px;
	font-size: 1.1rem;
`;

export interface IMenuItem {
	textPrimary?: string;
}

export default ({ textPrimary }: IMenuItem) => {
	return <StyledMenuItem>{textPrimary}</StyledMenuItem>;
};
