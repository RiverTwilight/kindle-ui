import React from "react";
import styled from "styled-components";
import border from "../../utils/border";

// TODO 阅读进度

export interface IListItem {
	children: JSX.Element | JSX.Element[];
	component?: string;
	className?: any;
}

const ListItem = ({
	className,
	component = "div",
	children,
	...props
}: IListItem) => {
	const Comp = component;
	return (
		<Comp className={className} {...props}>
			{children}
		</Comp>
	);
};

const StyledListItem = styled(ListItem)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 10px;
	font-size: 1.1rem;
	font-family: AmazonEmber-Rg, sans-serif;
	border-bottom: ${border};
	text-decoration: none;
	color: var(--text-color);
`;

export default StyledListItem;
