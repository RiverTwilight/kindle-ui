/// <reference types="react" />
/**
 * Popover
 * @author rivertwilight
 */
export interface IPopover {
    open?: boolean;
    onClose?: () => void;
    children?: JSX.Element | JSX.Element[];
}
declare const _default: ({ children, open, onClose }: IPopover) => JSX.Element;
export default _default;
