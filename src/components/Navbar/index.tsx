import React from "react";
import styled, { css } from "styled-components";
import border from "../../utils/border";

/**
 * Navbar组件
 * @author rivertwilight
 */

const fixedStyle = css`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 50;
`;

const Navbar = styled.nav`
	--border-color: #c1b2b2;
	display: flex;
	flex-direction: column;
	border-bottom: ${border};
	background-color: var(--bg-color);
	${(props: { fixed: boolean }) => (props.fixed ? fixedStyle : "")}
`;

export type TActionItems = {
	[order: number]: {
		onClick: () => void;
		text: string;
	};
};

export interface INavbar {
	autoClose?: boolean;
	children: JSX.Element | JSX.Element[];
}

export default ({ autoClose = true, children }: INavbar) => {
	return <Navbar fixed={autoClose}>{children}</Navbar>;
};
