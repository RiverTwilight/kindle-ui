import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

/**
 * Popover
 * @author rivertwilight
 */
export interface IPopover {
	open?: boolean;
	onClose?: () => void;
	children?: JSX.Element | JSX.Element[];
}

const Popover = ({ children, className }: any) => (
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

const StyledPopover = styled(Popover)`
	display: ${(props) => (props.open ? "block" : "none")};
`;

export default ({ children, open, onClose }: IPopover) => {
	const mask = useRef();

	useEffect(() => {
		mask.current &&
			mask.current.addEventListener("click", () => {
				onClose && onClose();
			});
	}, []);

	return (
		<>
			<Mask show={open} ref={mask} />
			<StyledPopover open={open}>{children}</StyledPopover>
		</>
	);
};
