import styled, { css } from "styled-components";
import React from "react";
// @ts-expect-error
import Bookerly from "../../fonts/Bookerly/@font-face/663c911905498d27729fe0a7f1ca2cc4.woff";

interface typoStyle {
	// px
	lineHeight: number;
	greyImage?: boolean;
}

interface ITypography extends typoStyle {
	children: JSX.Element | JSX.Element[];
}

const greyImage = css`
	-webkit-filter: grayscale(100%);
	-moz-filter: grayscale(100%);
	-ms-filter: grayscale(100%);
	-o-filter: grayscale(100%);
	filter: grayscale(100%);
	filter: gray;
`;

const Typography = styled.article`
	padding: 15px;
	max-width: 1000px;
	font-size: 1.1rem;
	@font-face {
		font-family: "Bookerly";
		src: url(${Bookerly});
	}
	font-family: Bookerly, AmazonEmber-Rg;
	color: var(--text-color);
	& ::selection {
		background-color: var(--text-color);
		color: var(--bg-color);
	}
	a {
		color: var(--text-color);
	}
	p {
		line-height: ${(props: typoStyle) => props.lineHeight}px;
		letter-spacing: 0.051rem;
	}
	img {
		max-width: 400px;
		max-height: 1000px;
		margin: 0 auto;
		display: block;
		${(props: typoStyle) => props.greyImage && greyImage}
	}
	h1 {
		font-size: 2rem;
	}
	h2,
	h3,
	h4,
	h5 {
	}
`;

export default ({
	children,
	lineHeight = 25,
	greyImage = false,
	...props
}: ITypography) => {
	return (
		<Typography {...props} greyImage={greyImage} lineHeight={lineHeight}>
			{children}
		</Typography>
	);
};
