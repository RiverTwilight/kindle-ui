import styled from "styled-components";
import React, { useState } from "react";
import Menu from "../Menu";
import MenuItem from "../MenuItem";
import Settings from "../../icons/settings-sharp.svg";
import ArrowBack from "../../icons/arrow-back-sharp.svg";
import Home from "../../icons/home-outline.svg";
import Search from "../../icons/search-outline.svg";
import Ellipsis from "../../icons/ellipsis-vertical.svg";
import hover from "../../utils/hover";
import border from "../../utils/border";
import { TMenuItem, TActionItems } from "./index";

const ActionBar = ({ className, children }: any) => (
	<div className={className}>{children}</div>
);

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

const MoreMenu = ({ items }: { items?: TMenuItem[] }) => {
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
			<Menu
				open={Boolean(anchorEl)}
				onClose={handleClose}
				anchorEl={anchorEl}
			>
				{items &&
					items.map((item, i) => (
						<MenuItem
							href="https://github.com/rivertwilight"
							textPrimary={item.text}
						/>
					))}
			</Menu>
		</>
	);
};

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
		border-right: ${border};
		border-left: ${border};
		border-bottom: none;
		padding: 5px 10px;
		box-sizing: border-box;
		text-align: center;
		background-color: transparent;
	}
`;

export default ({
	menuItems,
	actionItems = {
		1: {
			text: "home",
			handleClick: () => {},
		},
		2: {
			text: "back",
			handleClick: () => {},
		},
		3: {
			text: "settings",
			handleClick: () => {},
		},
	},
}: {
	menuItems?: TMenuItem[];
	actionItems?: TActionItems;
}) => {
	const [openSettings, setOpenSettings] = useState(false);
	const handleClose = () => {
		setOpenSettings(false);
	};
	return (
		<>
			{/* <Settings onClose={handleClose} open={openSettings} /> */}
			<StyledActionBar>
				<div className="action-group">
					<button
						onClick={actionItems[1].handleClick}
						className="action-item"
					>
						<Home />
						{actionItems[1].text}
					</button>
					<button
						onClick={actionItems[2].handleClick}
						className="action-item"
					>
						<ArrowBack />
						{actionItems[2].text}
					</button>
					<button
						onClick={actionItems[3].handleClick}
						className="action-item"
					>
						<Settings />
						{actionItems[3].text}
					</button>
				</div>
				<div className="action-space"></div>
				<div className="action-group">
					<StyledSearchBar />
					<MoreMenu items={menuItems} />
				</div>
			</StyledActionBar>
		</>
	);
};
