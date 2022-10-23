/// <reference types="react" />
interface typoStyle {
    lineHeight: number;
    greyImage?: boolean;
}
interface ITypography extends typoStyle {
    children: JSX.Element | JSX.Element[];
}
declare const greyImage: import("styled-components").FlattenSimpleInterpolation;
declare const _default: ({ children, lineHeight, greyImage, ...props }: ITypography) => JSX.Element;
export default _default;
export { greyImage };
