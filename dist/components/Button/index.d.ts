/// <reference types="react" />
export interface IButton {
    children: JSX.Element | JSX.Element[];
    onClick?: (e: any) => void;
}
declare const _default: ({ children, onClick }: IButton) => JSX.Element;
export default _default;
