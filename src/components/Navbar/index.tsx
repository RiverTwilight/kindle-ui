import styled, { css } from "styled-components";
import React from "react";
import Airplane from "../../icons/airplane.svg";
import Settings from "../../icons/settings-sharp.svg"
import ArrowBack from "../../icons/arrow-back-sharp.svg"
import Home from "../../icons/home-outline.svg"
import BatteryFull from "../../icons/battery-full-sharp.svg";

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
	margin-left: 10px;
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
	}
	.statu-group {
		display: flex;
	}
	.battery {
		display: flex;
		& svg {
			transform: translate(0px, 2px);
			width: 27px;
		}
	}
`;

const StyledActionBar = styled(ActionBar)`
	display: flex;
	height: 50px;
`;

export interface INavbar {
	autoClose: boolean;
	deviceName: string;
	battery?: number;
}

/**
 * Navbar组件
 * @author rivertwilight
 */
export default ({
	deviceName = "My Kindle",
	autoClose = true,
	battery = 99,
}: INavbar) => {
	return (
		<Navbar fixed={autoClose}>
			<StyledStatuBar>
				<div className="">{deviceName}</div>
				<div className="statu-group">
					<div className="statu-item battery">
						{battery}% <BatteryFull />
					</div>
					<div className="statu-item time">10:46</div>
				</div>
			</StyledStatuBar>
			<StyledActionBar>
				<Action>
					<Home />
					Home
				</Action>
				<Action>
					<ArrowBack />
					back
				</Action>
				<Action>
					<Settings />
					settings
				</Action>
			</StyledActionBar>
		</Navbar>
	);
};
