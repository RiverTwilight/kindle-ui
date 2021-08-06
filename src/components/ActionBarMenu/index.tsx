import React, { useState } from "react";
import ActionItem from "../ActionItem";
import MenuItem, { IMenuItem } from "../MenuItem";
import Menu from "../Menu";
import Ellipsis from "../../icons/ellipsis-vertical.svg";

export default ({ items }: { items?: IMenuItem[] }) => {
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
						<MenuItem key={i + item.textPrimary} {...item} />
					))}
			</Menu>
		</>
	);
};
