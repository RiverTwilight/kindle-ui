import React from "react";
import styled from "styled-components";

export interface IListItemIcon {
	className?: string;
	children?: JSX.Element | JSX.Element[];
	onClick: () => void;
}

const ListItemIcon = ({ className, onClick, children }: IListItemIcon) => {
	return (
		<div
			onClick={(e) => {
				e.preventDefault();
				onClick && onClick();
			}}
			className={className}
		>
			{children}
		</div>
	);
};

const StyledListItemIcon = styled(ListItemIcon)`
	svg {
		width: 20px;
	}
`;

export default StyledListItemIcon;
