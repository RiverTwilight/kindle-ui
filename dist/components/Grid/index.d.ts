import * as React from "react";
export interface IGrid extends React.HTMLAttributes<HTMLDivElement> {
    children: JSX.Element | JSX.Element[];
}
declare function Grid({ children }: IGrid): JSX.Element;
export default Grid;
