/// <reference types="react" />
export declare const BORDER_COLOR: string;
export interface INavbar {
    autoClose: boolean;
    deviceName: string;
    battery?: number;
    airplane?: boolean;
    actionItems: {
        text: string;
    }[];
}
declare const _default: ({ deviceName, autoClose, battery, airplane, actionItems, }: INavbar) => JSX.Element;
/**
 * Navbar组件
 * @author rivertwilight
 */
export default _default;
