import styled, { css } from "styled-components";
import React from "react";
import ActionBar from "./ActionBar";
import StatuBar from "./StatuBar";
import border from "../../utils/border";


/**
 * Navbar组件
 * @author rivertwilight
 */

const fixedStyle = css`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 50;
`;

const Navbar = styled.nav`
	--border-color: #c1b2b2;
	display: flex;
	flex-direction: column;
	border-bottom: ${border};
	background-color: var(--bg-color);
	${(props: { fixed: boolean }) => (props.fixed ? fixedStyle : "")}
`;

export type TMenuItem = {
	text: string;
	link?: string;
};

export type TActionItems = {
	[order: number]: {
		handleClick: () => void;
	};
};

export type StatuInfo = {
	deviceName: string;
	battery?: number;
	airplane?: boolean;
	charging?: boolean;
};


export interface INavbar {
	autoClose: boolean;
	deviceName: string;
	battery?: number;
	airplane?: boolean;
	charging?: boolean;
	actionItems: TActionItems;
	menuItems?: TMenuItem[];
}

export default ({
	deviceName = "My Kindle",
	autoClose = true,
	battery = 99,
	airplane = true,
	actionItems,
	charging = false,
	menuItems,
}: INavbar) => {
	return (
		<Navbar fixed={autoClose}>
			<S
			<StatuBar
				charging={charging}
				airplane={airplane}
				battery={battery}
				deviceName={deviceName}
			/>
			<ActionBar menuItems={menuItems} actionItems={actionItems} />
		</Navbar>
	);
};
