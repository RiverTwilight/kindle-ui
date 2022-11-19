import styled from "styled-components";
import React, { useEffect, useState } from "react";
import getTimeStr from "@/utils/getTimeStr";

const TimeBar = styled.div`
	z-index: 10;
	display: flex;
	flex-direction: row;
	justify-content: center;
	height: 20px;
	background: var(--bg-color);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
`;

export interface IStatubar {}

/**
 * TimeBar
 * @author rivertwilight
 */

export default ({}: IStatubar) => {
	const [timeStr, setTimeStr] = useState(getTimeStr());
	useEffect(() => {
		setInterval(() => {
			setTimeStr(getTimeStr());
		}, 1000);
	}, []);
	return (
		<TimeBar>
			<div className="time-str">{timeStr}</div>
		</TimeBar>
	);
};
