export interface IListItem {
    children: JSX.Element | JSX.Element[];
    component?: string;
    className?: any;
    LinkComponent?: string;
}
declare const StyledListItem: import("styled-components").StyledComponent<({ className, component, LinkComponent, children, ...other }: IListItem) => JSX.Element, any, {}, never>;
export default StyledListItem;
