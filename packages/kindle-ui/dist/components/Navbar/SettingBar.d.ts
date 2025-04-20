import React from "react";
export type TMenuItem = {
    text: string;
    link?: string;
};
export type TActionItems = {
    [order: number]: {
        handleClick: () => void;
    };
};
export type StatuInfo = {
    deviceName: string;
    battery?: number;
    airplane?: boolean;
    charging?: boolean;
};
export interface INavbar {
    autoClose: boolean;
    deviceName: string;
    battery?: number;
    airplane?: boolean;
    charging?: boolean;
    actionItems: TActionItems;
    menuItems?: TMenuItem[];
}
declare const _default: ({ deviceName, autoClose, battery, airplane, actionItems, charging, menuItems, }: INavbar) => React.JSX.Element;
export default _default;
