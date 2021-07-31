import styled, { css } from "styled-components";
import React, { useEffect, useState } from "react";
import Menu from "../Menu/index";
import MenuItem from "../MenuItem";
import Airplane from "../../icons/airplane.svg";
import Settings from "../../icons/settings-sharp.svg";
import ArrowBack from "../../icons/arrow-back-sharp.svg";
import Home from "../../icons/home-outline.svg";
import BatteryFull from "../../icons/battery-full-sharp.svg";
import Search from "../../icons/search-outline.svg";
import Ellipsis from "../../icons/ellipsis-vertical.svg";
import hover from "../../utils/hover"
// @ts-nocheck

export const BORDER_COLOR: string = "#c1b2b2";

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
	border-bottom: 1px solid ${BORDER_COLOR};
	background-color: var(--bg-color);
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
	.action-group {
		display: flex;
	}
	.action-space {
		flex: 2 4 auto;
		width: 10px;
	}
	.action-item {
		border: none;
		width: 50px;
		background-color: var(--bg-color);
		color: var(--text-color);
		transition: background-color 0.5s;
		margin-left: 10px;
		svg {
			width: 23px;
		}
		svg path {
			stroke: var(--text-color);
		}
		${hover}
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
		height: 36px;
		transform: translate(51%, 0px);
		display: inline;
		position: absolute; /*脱离标准流不占空间*/
	}
	& input {
		height: 100%;
		width: 150px;
		border-top: none;
		border-right: 1px solid ${BORDER_COLOR};
		border-left: 1px solid ${BORDER_COLOR};
		border-bottom: none;
		padding: 5px 10px;
		box-sizing: border-box;
		text-align: center;
		background-color: transparent;
	}
`;

export interface INavbar {
	autoClose: boolean;
	deviceName: string;
	battery?: number;
	airplane?: boolean;
	actionItems: {
		text: string;
	}[];
}

const getTimeStr = () => {
	const now = new Date();
	return `${now.getHours()}:${
		now.getMinutes() < 10 ? 0 : ""
	}${now.getMinutes()}`;
};

const MoreMenu = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<button className="action-item" onClick={handleClick}>
				<Ellipsis />
			</button>
			<Menu open={Boolean(anchorEl)} onClose={handleClose} anchorEl={anchorEl}>
				<MenuItem textPrimary="Github" />
				<MenuItem textPrimary="Github" />
				<MenuItem textPrimary="Github" />
			</Menu>
		</>
	);
};

/**
 * Navbar组件
 * @author rivertwilight
 */
export default ({
	deviceName = "My Kindle",
	autoClose = true,
	battery = 99,
	airplane = true,
	actionItems,
}: INavbar) => {
	const [timeStr, setTimeStr] = useState(getTimeStr());
	useEffect(() => {
		setInterval(() => {
			setTimeStr(getTimeStr());
		}, 1000);
	}, []);
	return (
		<Navbar fixed={autoClose}>
			<StyledStatuBar>
				<div className="">{deviceName}</div>
				<div className="statu-group">
					{airplane && (
						<div className="statu-item airplane">
							<Airplane />
						</div>
					)}
					<div className="statu-item battery">
						{battery}% <BatteryFull />
					</div>
					<div className="statu-item time">{timeStr}</div>
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
				<div className="action-space"></div>
				<div className="action-group">
					<StyledSearchBar />
					<MoreMenu />
				</div>
			</StyledActionBar>
		</Navbar>
	);
};
