import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Airplane from "../../icons/airplane.svg";
import BatteryFull from "../../icons/battery-full-sharp.svg";
import BatteryCharging from "../../icons/battery-charging-sharp.svg";
import border from "../../utils/border";
import getTimeStr from "../../utils/getTimeStr";

const StatuBar = ({ className, children }: any) => (
	<div className={className}>{children}</div>
);

const StyledStatuBar = styled(StatuBar)`
	display: flex;
	justify-content: space-between;
	border-bottom: ${border};
	padding: 3px 18px;
	height: 19px;
	.statu-item {
		margin-left: 10px;
	}
	.statu-group {
		display: flex;
	}
	.device-name {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.battery {
		display: flex;
		& svg {
			transform: translate(1px, -4px);
			width: 25px;
			height: 30px;
		}
	}
	.airplane {
		& svg {
			transform: rotate(-90deg);
			height: 20px;
		}
	}
`;

export interface IStatubar {
	deviceName: string;
	battery?: number;
	airplane?: boolean;
	charging?: boolean;
}

/**
 * Statubar
 */
export default ({ deviceName, airplane, battery, charging }: IStatubar) => {
	const [timeStr, setTimeStr] = useState(getTimeStr());
	useEffect(() => {
		setInterval(() => {
			setTimeStr(getTimeStr());
		}, 1000);
	}, []);
	return (
		<StyledStatuBar>
			<div className="device-name">{deviceName}</div>
			<div className="statu-group">
				{airplane && (
					<div className="statu-item airplane">
						<Airplane />
					</div>
				)}
				<div className="statu-item battery">
					{battery}%{" "}
					{charging ? <BatteryCharging /> : <BatteryFull />}
				</div>
				<div className="statu-item time">{timeStr}</div>
			</div>
		</StyledStatuBar>
	);
};
