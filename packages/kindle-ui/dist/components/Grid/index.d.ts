import * as React from "react";
export interface IGrid extends React.HTMLAttributes<HTMLDivElement> {
    children: JSX.Element | JSX.Element[];
    gap?: number;
    rowGap?: number;
}
declare function Grid({ children, gap, rowGap }: IGrid): JSX.Element;
export default Grid;
