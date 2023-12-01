import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Popover from "../Popover";
import hover from "@/utils/hover";

/**
 * Dialog
 * @author rivertwilight
 */

export interface IDialog {
	/* Position the dialog based on particular element instead of the whole window */
	anchorEl?: null | Element | ((element: Element) => Element);
	open?: boolean;
	onClose?: () => void;
	children?: JSX.Element | JSX.Element[];
	showCloseButton?: boolean;
}

const StyledDialog = styled.div`
	padding: 1.8rem 1.4rem;
	border: 3px solid var(--text-color);
	background: var(--bg-color);
	border-radius: 6px;
	position: fixed;
	max-width: 400px;
	min-width: 250px;
	z-index: 1001;
	// position: relative;
	// Removed hardcoded centering styles
`;

const StyledCloseButton = styled.button`
	${hover}
	background: none;
	border: none;
	height: 34px;
	width: 34px;
	top: 1.6rem;
	right: 1.8rem;
	position: absolute;
	display: flex;
	justify-content: center;
	padding: 0;
`;

export default function Dialog({
	children,
	anchorEl,
	open,
	onClose,
	showCloseButton = true,
}: IDialog) {
	const [dialogStyle, setDialogStyle] = useState({});

	useEffect(() => {
		if (anchorEl) {
			const rect = anchorEl.getBoundingClientRect();
			setDialogStyle({
				left: rect.left + rect.width / 2 + window.scrollX,
				top: rect.top + rect.height / 2 + window.scrollY,
				transform: "translate(-50%, -50%)",
			});
		} else {
			setDialogStyle({
				left: "50%",
				top: "50%",
				transform: "translate(-50%, -50%)",
			});
		}
	}, [anchorEl, open]);

	return (
		<Popover open={open} onClose={onClose}>
			<StyledDialog style={dialogStyle}>
				{children}
				{showCloseButton && (
					<StyledCloseButton onClick={onClose}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="34"
							viewBox="0 -960 960 960"
							width="34"
						>
							<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
						</svg>
					</StyledCloseButton>
				)}
			</StyledDialog>
		</Popover>
	);
}
