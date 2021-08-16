/// <reference types="react" />
declare const _default: import("styled-components").StyledComponent<({ children, className, variant, component, LinkComponent, disabled, type, ...other }: any) => JSX.Element, any, {}, never>;
export default _default;
export interface IButton {
    children: JSX.Element | JSX.Element[];
    onClick?: (e: any) => void;
    href?: string;
    variant?: "default" | "outline";
    component?: JSX.Element | JSX.Element[] | string;
}
