import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Popover from "../Popover";

/**
 * Menu
 * @author rivertwilight
 */

const WIDTH_PX = 230;

export interface IMenu {
	anchorEl: null | Element | ((element: Element) => Element);
	open?: boolean;
	onClose?: () => void;
	children?: JSX.Element | JSX.Element[];
}

const Menu = ({ children, className }: any) => (
	<div className={className}>{children}</div>
);

const StyledMenu = styled(Menu)`
	display: ${(props) => (props.open ? "block" : "none")};
	box-sizing: border-box;
	min-width: ${WIDTH_PX}px;
	border: 1px solid var(--border-color);
	background: var(--bg-color);
	position: fixed;
	top: ${(props) => props.top}px;
	left: ${(props) => props.left}px;
`;

export default ({ children, anchorEl, open, onClose }: IMenu) => {
	const targetPosition = useMemo(() => {
		if (anchorEl) {
			console.log(anchorEl);
			return {
				// @ts-expect-error
				top:  anchorEl.getBoundingClientRect().top + anchorEl.getBoundingClientRect().height + 2,
				left: anchorEl.getBoundingClientRect().right - WIDTH_PX
			};
		}
		return { top:0, left: 0}
	}, [anchorEl]);

	return (
		<Popover open={open} onClose={onClose}>
			<StyledMenu
				open={open}
				top={targetPosition.top}
				left={targetPosition.left}
			>
				{children}
			</StyledMenu>
		</Popover>
	);
};
