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
    showCloseButton?: boolean;
}
export default function Dialog({ children, anchorEl, open, onClose, showCloseButton, }: IDialog): React.JSX.Element;
