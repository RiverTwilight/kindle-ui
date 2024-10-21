import React from "react";
import styled from "styled-components";
import border from "@/utils/border";

// TODO 阅读进度

export interface IListItem {
	children: JSX.Element | JSX.Element[];
	component?: string;
	className?: any;
	LinkComponent?: string;
}

const ListItem = ({
	className,
	component = "div",
	LinkComponent = "a",
	children,
	...other
}: IListItem) => {
	let ComponentProp = component;

	if (ComponentProp === "div" && (other.href || other.to)) {
		ComponentProp = LinkComponent;
	}
	return (
		<ComponentProp role="ListItem" className={className} {...other}>
			{children}
		</ComponentProp>
	);
};

const StyledListItem = styled(ListItem)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0px;
	font-size: 1.1rem;
	font-family: AmazonEmber-Rg, sans-serif;
	border-bottom: ${border};

	&:last-child {
		border-bottom: none;
	}

	text-decoration: none;
	color: var(--text-color);
`;

export default StyledListItem;
