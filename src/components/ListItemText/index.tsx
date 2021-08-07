import React from "react";
import styled from "styled-components";
import hover from "../../utils/hover";

export interface IListItemText {
	primary?: string;
	second?: string;
	className?: any;
}

const ListItemText = ({ primary, second, className }: IListItemText) => (
	<div className={className}>
		<div className="primary">{primary}</div>
		<div className="second">{second}</div>
	</div>
);

export default styled(ListItemText)`
	${hover}
	padding: 10px 0;
	width: 0; /* 解决white-sapce撑开盒子的问题*/
	display: flex;
	flex-direction: column;
	flex: 1;
	.primary {
		font-size: 20px;
		width: 90%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.second {
		font-size: 15px;
	}
`;
