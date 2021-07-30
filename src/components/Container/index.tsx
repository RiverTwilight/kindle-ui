import styled, { css } from "styled-components";
import React from "react";
// @ts-expect-error
import AmazonEmber from "../../fonts/AmazonEmber/AmazonEmber_Rg.ttf";

const Container = styled.div`
	@font-face {
		font-family: AmazonEmber-Rg;
		src: url(${AmazonEmber});
	}
	font-family: "AmazonEmber-Rg", Trebuchet MS;
`;

export interface IContainer {
	children: JSX.Element | JSX.Element[];
}

export default ({ children }: IContainer) => {
	return <Container>{children}</Container>;
};
