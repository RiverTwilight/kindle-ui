import * as React from "react";
export interface IGridItem extends React.HTMLAttributes<HTMLDivElement> {
    children: JSX.Element | JSX.Element[];
    src?: string;
    href?: string;
    target?: string;
    greyImage?: boolean;
    dense?: boolean;
}
declare const StyledGridItem: import("styled-components").StyledComponent<React.FC<IGridItem>, any, {}, never>;
export default StyledGridItem;
