import React from "react";
export interface SwitchProps {
    children?: JSX.Element | JSX.Element[];
    component?: string;
    className?: string;
    LinkComponent?: string;
    id?: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    ariaLabel?: string;
}
declare const StyledListItem: import("styled-components").StyledComponent<({ className, component, LinkComponent, children, id, checked, onChange, disabled, ariaLabel, ...other }: SwitchProps) => React.JSX.Element, any, {}, never>;
export default StyledListItem;
