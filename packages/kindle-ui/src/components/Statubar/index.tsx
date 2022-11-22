import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Airplane from "../../icons/airplane.svg";
import BatteryFull from "../../icons/battery-full-sharp.svg";
import BatteryCharging from "../../icons/battery-charging-sharp.svg";
import CelluarIcon from "../../icons/cellular-sharp.svg";
import border from "@/utils/border";
import getTimeStr from "@/utils/getTimeStr";

const StatuBar = ({ className, children }: any) => (
	<div className={className}>{children}</div>
);

const StyledStatuBar = styled(StatuBar)`
	display: flex;
	justify-content: space-between;
	border-bottom: ${border};
	padding: 3px 18px;
	height: 22px;
	.statu-item {
		margin-left: 12px;
		line-height: 1.5em;
		display: flex;
	}
	.statu-group {
		display: flex;
		align-content: center;
	}
	.device-name {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.battery {
		display: flex;
		align-content: center;
		& svg {
			transform: translate(1px, -4px);
			width: 25px;
			height: 30px;
		}
		& > label {
			font-size: 0.9em;
		}
	}
	.celluar {
		& label {
			transform: translate(-1px, 0px);
			font-size: 0.9em;
		}
		& svg {
			height: 20px;
		}
	}
	.airplane {
		align-content: center;
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
	celluar?: {
		on: boolean;
		label: string;
		signal: number;
	};
}

/**
 * Statubar
 */
export default (props: IStatubar) => {
	const { deviceName, airplane, battery, charging, celluar } = props;
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
				{celluar && celluar.on && (
					<div className="statu-item celluar">
						{celluar.label && <label>{celluar.label}</label>}
						<CelluarIcon />
					</div>
				)}
				{battery && (
					<div className="statu-item battery">
						<label>{battery}%</label>
						{charging ? <BatteryCharging /> : <BatteryFull />}
					</div>
				)}
				<div className="statu-item time">{timeStr}</div>
			</div>
		</StyledStatuBar>
	);
};
