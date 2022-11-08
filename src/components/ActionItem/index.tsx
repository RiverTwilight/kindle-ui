import * as React from "react";
import styled from "styled-components";
import hover from "../../utils/hover";

const StyledActionItem = styled.button`
	border: none;
	box-sizing: border-box;
	width: 50px;
	background-color: var(--bg-color);
	color: var(--text-color);

	display: inline-flex;
	align-items: center;
	align-content: center;
	justify-content: center;
	place-content: center;
	aspect-ratio: 1;
	padding: 2ch;

	@media (min-width: 460px) {
		margin-left: 10px;
	}
	svg {
		width: 23px;
	}
	svg path {
		stroke: var(--text-color);
		/* DO NOT ADD THIS: fill: var(--text-color);*/
	}
	text-transform: lowercase;
	${hover}
`;

function ActionItem(props: any) {
	return (
		<StyledActionItem {...props}>
			<div>{props.children}</div>
		</StyledActionItem>
	);
}

export default ActionItem;
