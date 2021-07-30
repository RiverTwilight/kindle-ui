/// <reference types="react" />
export interface INavbar {
    autoClose: boolean;
    deviceName: string;
    battery?: number;
    actionItems: {
        text: string;
    }[];
}
declare const _default: ({ deviceName, autoClose, battery, actionItems, }: INavbar) => JSX.Element;
/**
 * Navbar组件
 * @author rivertwilight
 */
export default _default;
