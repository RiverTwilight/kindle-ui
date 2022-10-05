import * as React from "react";
export interface IGridItem extends React.HTMLAttributes<HTMLDivElement> {
    children: JSX.Element | JSX.Element[];
    src?: string;
    href?: string;
}
declare const GridItem: React.FC<IGridItem>;
export default GridItem;
