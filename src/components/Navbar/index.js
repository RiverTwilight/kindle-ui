import styled from "styled-components";
import React from "react";
import Airplane from "../../icons/airplane.svg";
import BatteryFull from "../../icons/battery-full.svg";

const BORDER_COLOR = "#282424"

const Navbar = styled.nav`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${BORDER_COLOR};
`;

const Action = styled.button`
    border: none;
    background-color: #fff;
    width: 50px;
    transition: background-color 0.5s;
    svg{
        width: 23px
    }
    &:hover {
        background-color: #000;
        svg {
            stroke: #fff;
        }
    }
`;

const StyledAirplane = styled(Airplane)`
    width: 18px;
`;

const StatuBar = ({ className, children }) => (
    <div className={className}>{children}</div>
);

const ActionBar = ({ className, children }) => (
    <div className={className}>{children}</div>
);

const StyledStatuBar = styled(StatuBar)`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #000;
    padding: 3px 18px;
    height: 19px;
    .statu-item {
        margin-left: 10px;
    };
    .time {
        transform: scaleY(-50%)
    }
`;

const StyledActionBar = styled(ActionBar)`
    display: flex;
    height: 50px;
`;

/**
 * Navbar组件
 * @author rivertwilight
 * @param {string} deviceName 设备名称
 */
export default ({ deviceName = "My Kindle" }) => {
    return (
        <Navbar>
            <StyledStatuBar>
                <div className="statu-item">{deviceName}</div>
                <div className="statu-item">
                    <StyledAirplane />
                    <span className="time">15:00 AM</span>
                </div>
            </StyledStatuBar>
            <StyledActionBar>
                <Action>
                    <Airplane />Home
                </Action>
                <Action>
                    <Airplane />Home
                </Action>
                <Action>
                    <Airplane />Home
                </Action>
            </StyledActionBar>
        </Navbar>
    );
};
