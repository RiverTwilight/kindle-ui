/// <reference types="react" />
export declare type TActionItems = {
    [order: number]: {
        onClick: () => void;
        text: string;
    };
};
export interface INavbar {
    autoClose?: boolean;
    children: JSX.Element | JSX.Element[];
}
declare const _default: ({ autoClose, children }: INavbar) => JSX.Element;
export default _default;
