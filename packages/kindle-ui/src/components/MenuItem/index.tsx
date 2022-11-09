import React from "react";
import styled from "styled-components";
import hover from "../../utils/hover";

/**
 * MenuItem
 * @author rivertwilight
 * @description Use together with Menu
 */

const MenuItem = ({
	component = "div",
	className,
	textPrimary,
	...props
}: any) => {
	const Comp = component;
	return (
		<Comp className={className} {...props}>
			{textPrimary}
		</Comp>
	);
};

export default styled(MenuItem)`
	display: block;
	height: 60px;
	padding-left: 20px;
	line-height: 60px;
	font-size: 1.1rem;
	${hover}
	text-decoration: none;
	color: var(--text-color);
`;

export interface IMenuItem {
	textPrimary: string;
	href?: string;
	component?: string;
}
