/// <reference types="react" />
export interface IListItem {
    children: JSX.Element | JSX.Element[];
    component?: string;
    className?: any;
}
declare const StyledListItem: import("styled-components").StyledComponent<({ className, component, LinkComponent, children, ...other }: IListItem) => JSX.Element, any, {}, never>;
export default StyledListItem;
