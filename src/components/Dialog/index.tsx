import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Popover from "../Popover";

/**
 * Dialog
 * @author rivertwilight
 */

export interface IDialog {
	anchorEl: null | Element | ((element: Element) => Element);
	open?: boolean;
	onClose?: () => void;
	children?: JSX.Element | JSX.Element[];
}

const Dialog = ({ children, className, title }: any) => (
	<div className={className}>
		<div>{title}</div>
		{children}
	</div>
);

const StyledDialog = styled(Dialog)`
	display: ${(props) => (props.open ? "block" : "none")};
	min-width: 230px;
	border: 3px solid var(--border-color);
	border-radius: 6px;
	background: var(--bg-color);
	position: fixed;
`;

export default ({ children, anchorEl, open, onClose }: IDialog) => {
	return (
		<>
			<Popover open={open} onClose={onClose}>
				<StyledDialog title="test" open={open}>
					{children}
				</StyledDialog>
			</Popover>
		</>
	);
};
