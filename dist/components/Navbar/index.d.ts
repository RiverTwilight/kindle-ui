/// <reference types="react" />
export declare const BORDER_COLOR: string;
export declare type TMenuItem = {
    text: string;
    link?: string;
};
export declare type TActionItems = {
    [order: number]: {
        handleClick: () => void;
    };
};
export declare type StatuInfo = {
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
    actionItems: TActionItems<JSX.Element | JSX.Element[]>;
    menuItems?: TMenuItem[];
}
declare const _default: ({ deviceName, autoClose, battery, airplane, actionItems, charging, menuItems, }: INavbar) => JSX.Element;
export default _default;
