/// <reference types="react" />
export interface IButton {
    children: JSX.Element | JSX.Element[];
    onClick?: (e: any) => void;
    href?: string;
}
declare const _default: ({ children, onClick, href, ...props }: IButton) => JSX.Element;
export default _default;
