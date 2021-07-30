import styled, { css } from "styled-components";
import React from "react";
import Airplane from "../../icons/airplane.svg";
import Settings from "../../icons/settings-sharp.svg";
import ArrowBack from "../../icons/arrow-back-sharp.svg";
import Home from "../../icons/home-outline.svg";
import BatteryFull from "../../icons/battery-full-sharp.svg";
import Search from "../../icons/search-outline.svg";
import Ellipsis from "../../icons/ellipsis-vertical.svg"
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
			transform: translate(1px, -4px);
			width: 25px;
			height: 30px;
		}
	}
	.airplane {
		& svg {
			transform: rotate(-90deg);
			height: 20px;
		}
	}
`;

const StyledActionBar = styled(ActionBar)`
	display: flex;
	height: 50px;
	justify-content: space-between;
	.action-group {
		display: flex;
	}
	.action-item {
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
				fill: #fff;
				stroke: #fff;
			}
		}
	}
`;

const SearchBar = ({ className }: any) => {
	return (
		<div className={className}>
			<Search />
			<input placeholder="Search"></input>
		</div>
	);
};

const StyledSearchBar = styled(SearchBar)`
	display: flex;
	align-items: center;
	& > svg {
        position: relative;
        left: 50px;
        height: 36px
	}
	& input {
		height: 100%;
		border-top: none;
        border-right: 1px solid ${BORDER_COLOR};
        border-left: 1px solid ${BORDER_COLOR};
		border-bottom: none;
		padding: 5px 10px;
		box-sizing: border-box;
        text-align: center
	}
`;

export interface INavbar {
	autoClose: boolean;
	deviceName: string;
	battery?: number;
	actionItems: {
		text: string;
	}[];
}

/**
 * Navbar组件
 * @author rivertwilight
 */
export default ({
	deviceName = "My Kindle",
	autoClose = true,
	battery = 99,
	actionItems,
}: INavbar) => {
	return (
		<Navbar fixed={autoClose}>
			<StyledStatuBar>
				<div className="">{deviceName}</div>
				<div className="statu-group">
					<div className="statu-item airplane">
						<Airplane />
					</div>
					<div className="statu-item battery">
						{battery}% <BatteryFull />
					</div>
					<div className="statu-item time">10:46</div>
				</div>
			</StyledStatuBar>
			<StyledActionBar>
				<div className="action-group">
					<button className="action-item">
						<Home />
						home
					</button>
					<button className="action-item">
						<ArrowBack />
						back
					</button>
					<button className="action-item">
						<Settings />
						settings
					</button>
				</div>
				<div className="action-group">
					<StyledSearchBar />
					<button className="action-item">
						<Ellipsis />
					</button>
				</div>
			</StyledActionBar>
		</Navbar>
	);
};
