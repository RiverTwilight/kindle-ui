import React from "react";
export interface IPopover {
    open?: boolean;
    onClose?: () => void;
    children?: JSX.Element | JSX.Element[];
}
/**
 * Popover
 * @author rivertwilight
 */
export default function Popover({ children, open, onClose }: IPopover): React.JSX.Element;
