import React from "react";
import styled from "styled-components";
import hover from "@/utils/hover";

export interface IListItemText {
	primary?: string;
	second?: string;
	className?: any;
	allowWrap?: boolean;
}

const ListItemText = ({
	primary,
	second,
	className,
	allowWrap = false,
}: IListItemText) => (
	<div className={className}>
		<div className={`primary ${allowWrap ? "wrap" : ""}`}>{primary}</div>
		<div className="secondary">{second}</div>
	</div>
);

export default styled(ListItemText)`
	${hover}
	padding: 10px 0;
	height: 100%;
	width: 0; /* 解决white-sapce撑开盒子的问题*/
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex: 1;

	.primary {
		font-size: 20px;
		font-weight: 600;
		width: 90%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

		&.wrap {
			white-space: normal;
			word-wrap: break-word;
		}
	}

	@media (max-width: 768px) {
		.primary {
			font-size: 18px;
		}
	}

	.secondary {
		font-size: 15px;
		margin-top: 4px;
	}
`;
