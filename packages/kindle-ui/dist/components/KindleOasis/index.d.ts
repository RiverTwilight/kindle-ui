import React from "react";
export interface IContainer {
    children: JSX.Element | JSX.Element[];
    dark?: boolean;
}
declare const Container: React.FC<IContainer>;
export default Container;
