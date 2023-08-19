import React from "react";
/**
 * Dialog
 * @author rivertwilight
 */
export interface IDialog {
    anchorEl?: null | Element | ((element: Element) => Element);
    open?: boolean;
    onClose?: () => void;
    children?: JSX.Element | JSX.Element[];
}
declare const _default: ({ children, anchorEl, open, onClose }: IDialog) => React.JSX.Element;
export default _default;
