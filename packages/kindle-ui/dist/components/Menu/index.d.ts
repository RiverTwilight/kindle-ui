export interface IMenu {
    anchorEl: null | Element | ((element: Element) => Element);
    open?: boolean;
    onClose?: () => void;
    children?: JSX.Element | JSX.Element[];
}
declare const _default: ({ children, anchorEl, open, onClose }: IMenu) => JSX.Element;
export default _default;
