import React from "react";
export interface IContainer {
    children: JSX.Element | JSX.Element[];
    deviceFrame?: React.ElementType;
    dark?: boolean;
    setDark?: React.Dispatch<React.SetStateAction<boolean>>;
}
declare const Container: React.FC<IContainer>;
export default Container;
