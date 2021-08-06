/// <reference types="react" />
declare const _default: import("styled-components").StyledComponent<({ children, className, href, ...props }: any) => JSX.Element, any, {}, never>;
export default _default;
export interface IButton {
    children: JSX.Element | JSX.Element[];
    onClick?: (e: any) => void;
    href?: string;
}
