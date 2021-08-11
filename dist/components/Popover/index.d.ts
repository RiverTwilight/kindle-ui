/// <reference types="react" />
export interface IPopover {
    open?: boolean;
    onClose?: () => void;
    children?: JSX.Element | JSX.Element[];
}
declare const _default: ({ children, open, onClose }: IPopover) => JSX.Element;
/**
 * Popover
 * @author rivertwilight
 */
export default _default;
