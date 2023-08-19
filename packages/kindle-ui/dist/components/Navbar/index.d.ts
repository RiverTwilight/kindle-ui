import React from "react";
export type TActionItems = {
    [order: number]: {
        onClick: () => void;
        text: string;
    };
};
export interface INavbar {
    autoClose?: boolean;
    fixed?: boolean;
    children: JSX.Element | JSX.Element[];
}
declare const _default: ({ autoClose, fixed, children }: INavbar) => React.JSX.Element;
export default _default;
