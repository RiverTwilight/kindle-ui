export interface IPopover {
    open?: boolean;
    onClose?: () => void;
    children?: JSX.Element | JSX.Element[];
}
/**
 * Popover
 * @author rivertwilight
 */
declare const _default: ({ children, open, onClose }: IPopover) => JSX.Element;
export default _default;
