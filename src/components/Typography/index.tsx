import styled from "styled-components";
import React from "react";
// @ts-expect-error
import Bookerly from "../../fonts/Bookerly/@font-face/663c911905498d27729fe0a7f1ca2cc4.woff";

interface typoStyle {
	// px
	lineHeight: number;
}

interface ITypography extends typoStyle {
	children: JSX.Element | JSX.Element[];
}

const Typography = styled.article`
	padding: 15px;
	max-width: 1000px;
	@font-face {
		font-family: "Bookerly";
		src: url(${Bookerly})
	}
	& ::selection {
		background-color: #000;
		color: #fff;
	}
	p {
		font-family: Bookerly;
		line-height: ${(props: typoStyle) => props.lineHeight}px;
        letter-spacing: .051rem;
	}
	h1,
	h2,
	h3,
	h4,
	h5 {
	}
`;

export default ({ children, lineHeight = 25 }: ITypography) => {
	return <Typography lineHeight={lineHeight}>{children}</Typography>;
};
