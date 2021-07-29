import styled, { css } from "styled-components";
import React from "react";
import Airplane from "../../icons/airplane.svg";
import BatteryFull from "../../icons/battery-full.svg";

// @ts-nocheck

const BORDER_COLOR = "#c1b2b2";

const fixedStyle = css`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 50;
`;

const Navbar = styled.nav`
	display: flex;
	flex-direction: column;
	border-bottom: 1px solid ${BORDER_COLOR};
	background: #fff;
	${(props: { fixed: boolean }) => (props.fixed ? fixedStyle : "")}
`;

const Action = styled.button`
	border: none;
	background-color: #fff;
	width: 50px;
	transition: background-color 0.5s;
	svg {
		width: 23px;
	}
	&:hover {
		background-color: #000;
		svg {
			stroke: #fff;
		}
	}
`;

const StatuBar = ({ className, children }: any) => (
	<div className={className}>{children}</div>
);

const ActionBar = ({ className, children }: any) => (
	<div className={className}>{children}</div>
);

const StyledStatuBar = styled(StatuBar)`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid ${BORDER_COLOR};
	padding: 3px 18px;
	height: 19px;
	.statu-item {
		margin-left: 10px;
		& svg {
			width: 18px;
		}
	}
	.time {
		transform: scaleY(-50%);
	}
`;

const StyledActionBar = styled(ActionBar)`
	display: flex;
	height: 50px;
`;

export interface INavbar {
	autoClose: boolean;
    deviceName: string;
}

/**
 * Navbar组件
 * @author rivertwilight
 */
export default ({ deviceName = "My Kindle", autoClose = true }: INavbar) => {
	return (
		<Navbar fixed={autoClose}>
			<StyledStatuBar>
				<div className="statu-item">{deviceName}</div>
				<div className="statu-item">
					<Airplane />
					<span className="time">15:0 AM</span>
				</div>
			</StyledStatuBar>
			<StyledActionBar>
				<Action>
					<Airplane />
					Home
				</Action>
				<Action>
					<Airplane />
					Home
				</Action>
				<Action>
					<Airplane />
					Home
				</Action>
			</StyledActionBar>
		</Navbar>
	);
};
