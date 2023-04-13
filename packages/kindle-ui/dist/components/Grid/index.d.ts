import * as React from "react";
export interface IGrid extends React.HTMLAttributes<HTMLDivElement> {
    children: JSX.Element | JSX.Element[];
    gap?: number;
}
declare function Grid({ children, gap }: IGrid): JSX.Element;
export default Grid;
