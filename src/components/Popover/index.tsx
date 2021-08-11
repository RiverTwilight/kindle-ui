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
	index: number;
	ref: React.MutableRefObject<undefined>;
}

const Mask = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	display: ${(props: IMask) => (props.show ? "block" : "none")};
	z-index: ${(props: IMask) => `${10 + props.index}`};
`;

const StyledPopover = styled(Popover)`
	display: ${(props) => (props.open ? "block" : "none")};
	z-index: 500;
`;

/**
 * Popover
 * @author rivertwilight
 */
export default ({ children, open, onClose }: IPopover) => {
	const mask = useRef(null);
	const [index, setIndex] = useState(1);

	useEffect(() => {
		if (mask.current) {
			console.log("Useeffect");
			if (window.maskNumber) {
				window.maskNumber += 1;
				setIndex(window.maskNumber);
			} else {
				window.maskNumber = 1;
			}
			mask.current.addEventListener("click", () => {
				onClose && onClose();
			});
		}
		return () => {
			if (mask.current) {
				mask.current.removeEventListener("click", () => {
					onClose && onClose();
				});
			}
		};
	}, [open]);

	return (
		<>
			<Mask index={index} show={open} ref={mask} />
			<StyledPopover open={open}>{children}</StyledPopover>
		</>
	);
};
