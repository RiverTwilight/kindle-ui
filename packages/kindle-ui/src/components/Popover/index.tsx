import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export interface IPopover {
	open?: boolean;
	onClose?: () => void;
	children?: JSX.Element | JSX.Element[];
}

const Popover = ({ children, className }: any) => (
	<div className={className}>{children}</div>
);

interface IMask {
	show: boolean;
	ref: React.MutableRefObject<undefined>;
}

const Mask = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	display: ${(props: IMask) => (props.show ? "block" : "none")};
`;

const StyledPopover = styled.div`
	z-index: 2;
	height: 100%;
`;

/**
 * Popover
 * @author rivertwilight
 */
export default ({ children, open, onClose }: IPopover) => {
	const mask = useRef();

	const handleMouseDown = (event) => {
		console.log("Click content");
		// We don't want to close the dialog when clicking the dialog content.
		// Make sure the event starts and ends on the same DOM element.
		mask.current = event.target === event.currentTarget;
	};

	// const handleMouseUp = (event) => {
	// 	mask = false;
	// };

	const handleClickMask = (event) => {
		if (!mask.current) return;

		console.log("Clicked mask");

		mask.current = null;

		onClose && onClose();
	};

	//add props to children
	const childrenWithProps = React.Children.map(children, (child) => {
		return React.cloneElement(child as React.ReactElement, {
			// onMouseDown: handleMouseDown,
			// onMouseUp: handleMouseUp,
		});
	});

	return (
		<>
			<Mask onClick={handleClickMask} show={open} ref={mask}>
				<StyledPopover onMouseDown={handleMouseDown}>
					{childrenWithProps}
				</StyledPopover>
			</Mask>
		</>
	);
};
