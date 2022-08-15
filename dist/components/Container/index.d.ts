import React from "react";
export interface IContainer {
    children: JSX.Element | JSX.Element[];
    dark?: boolean;
    setDark?: React.Dispatch<React.SetStateAction<boolean>>;
}
declare const Container: React.FC;
export default Container;
