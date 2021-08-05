import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Popover from "../Popover";

/**
 * Menu
 * @author rivertwilight
 */

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
	min-width: 230px;
	border: 1px solid var(--border-color);
	background: var(--bg-color);
	position: fixed;
	top: ${(props) => props.top}px;
	left: ${(props) => props.left}px;
`;

export default ({ children, anchorEl, open, onClose }: IMenu) => {
	const [top, setTop] = useState(0);
	const [left, setLeft] = useState(0);

	useEffect(() => {
		var viewportOffset = anchorEl
			? // @ts-expect-error
			  anchorEl.getBoundingClientRect()
			: { top: 0, left: 0 };
		// these are relative to the viewport, i.e. the window
		var top =
			viewportOffset.top + anchorEl ? anchorEl.offsetHeight * 1.5 : 0;
		var left = viewportOffset.left;
		if (left > window.innerWidth - 200) left = window.innerWidth - 230;
		setTop(top);
		setLeft(left);
	}, [anchorEl]);

	return (
		<>
			<Popover open={open} onClose={onClose}>
				<StyledMenu open={open} top={top} left={left}>
					{children}
				</StyledMenu>
			</Popover>
		</>
	);
};
