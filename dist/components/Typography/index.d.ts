/// <reference types="react" />
interface typoStyle {
    lineHeight: number;
}
interface ITypography extends typoStyle {
    children: JSX.Element | JSX.Element[];
}
declare const _default: ({ children, lineHeight }: ITypography) => JSX.Element;
export default _default;
