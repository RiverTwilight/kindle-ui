import * as React from "react";
export interface IGrid extends React.HTMLAttributes<HTMLDivElement> {
    children: JSX.Element | JSX.Element[];
    gap?: number;
    rowGap?: number;
    dense?: boolean;
}
declare function Grid({ children, gap, rowGap, dense }: IGrid): React.JSX.Element;
export default Grid;
