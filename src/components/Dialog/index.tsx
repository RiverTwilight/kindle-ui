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

const StyledDialog = styled.div`
	border: 3px solid var(--text-color);
	background: var(--bg-color);
	border-radius: 6px;
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	min-width: 400px;
`;

export default ({ children, anchorEl, open, onClose }: IDialog) => {
	return (
		<Popover open={open} onClose={onClose}>
			<StyledDialog title="test">{children}</StyledDialog>
		</Popover>
	);
};
