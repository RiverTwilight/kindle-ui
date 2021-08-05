import React, { useState } from "react";
import styled from "styled-components";
import ActionItem from "../ActionItem";
import MenuItem from "../MenuItem";
import Menu from "../Menu";
import Ellipsis from "../../icons/ellipsis-vertical.svg";

export type TMenuItem = {
	text: string;
	link?: string;
};

export default ({ items }: { items?: TMenuItem[] }) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<ActionItem onClick={handleClick}>
				<Ellipsis />
			</ActionItem>
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
