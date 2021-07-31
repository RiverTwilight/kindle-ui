import React, { useEffect, useRef } from "react";
import styled from "styled-components";

export interface IMenu {
	anchorEl: null | Element | ((element: Element) => Element);
	open?: boolean;
	onClose?: () => void;
	children?: JSX.Element | JSX.Element[];
}

const Menu = ({ children, className }: any) => (
	<div className={className}>{children}</div>
);

const Mask = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	display: ${(props: { show?: boolean }) => (props.show ? "block" : "none")};
`;

const StyledMenu = styled(Menu)`
	display: ${(props) => (props.open ? "block" : "none")};
	min-width: 200px;
	border: 1px solid var(--border-color);
	background: var(--bg-color);
	min-height: 300px;
	position: fixed;
	top: ${(props) => props.top}px;
	left: ${(props) => props.left}px;
`;

export default ({ children, anchorEl, open, onClose }: IMenu) => {
	const mask = useRef();
	var viewportOffset = anchorEl
		? // @ts-expect-error
		  anchorEl.getBoundingClientRect()
		: { top: 0, left: 0 };
	// these are relative to the viewport, i.e. the window
	// @ts-expect-error
	var top = viewportOffset.top + anchorEl ? anchorEl.offsetHeight * 1.5 : 0;
	var left = viewportOffset.left;
	if (left > window.innerWidth - 200) left = window.innerWidth - 200;
	useEffect(() => {
		mask.current.addEventListener("click", () => {
			onClose && onClose();
		});
	}, []);
	return (
		<>
			<Mask show={open} ref={mask} />
			<StyledMenu open={open} top={top} left={left}>
				{children}
			</StyledMenu>
		</>
	);
};
