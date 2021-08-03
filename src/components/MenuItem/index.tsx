import React from "react";
import styled from "styled-components";
import hover from "../../utils/hover";

/**
 * MenuItem
 * @author rivertwilight
 * @description Use together with Menu
 */

const StyledMenuItem = styled.div`
	padding-top: 17px;
	padding-bottom: 17px;
	padding-left: 20px;
	font-size: 1.1rem;
	${hover}
	a {
		text-decoration: none;
		color: var(--text-color);
	}
`;

export interface IMenuItem {
	textPrimary: string;
	href?: string;
}

export default ({ textPrimary, href }: IMenuItem) => {
	const Warppper = ({ children }: { children: string }) => {
		return href ? <a href={href}>{children}</a> : <>{children}</>;
	};
	return (
		<StyledMenuItem>
			<Warppper>{textPrimary}</Warppper>
		</StyledMenuItem>
	);
};
