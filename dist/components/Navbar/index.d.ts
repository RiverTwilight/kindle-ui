/// <reference types="react" />
export interface INavbar {
    autoClose: boolean;
    deviceName: string;
    battery?: number;
}
declare const _default: ({ deviceName, autoClose, battery, }: INavbar) => JSX.Element;
/**
 * Navbar组件
 * @author rivertwilight
 */
export default _default;
