import React from "react";
export interface IListItemIcon {
    className?: string;
    children?: JSX.Element | JSX.Element[];
    onClick: () => void;
}
declare const StyledListItemIcon: import("styled-components").StyledComponent<({ className, onClick, children }: IListItemIcon) => React.JSX.Element, any, {}, never>;
export default StyledListItemIcon;
