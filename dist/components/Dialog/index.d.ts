/// <reference types="react" />
/**
 * Menu
 * @author rivertwilight
 */
export interface IDialog {
    anchorEl: null | Element | ((element: Element) => Element);
    open?: boolean;
    onClose?: () => void;
    children?: JSX.Element | JSX.Element[];
}
declare const _default: ({ children, anchorEl, open, onClose }: IDialog) => JSX.Element;
export default _default;
