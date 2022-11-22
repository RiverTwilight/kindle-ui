import React from "react";
/**
 * Button
 * @author rivertwilight
 */
export interface BaseButtonProps {
    variant?: "outline" | "default";
    component: string | JSX.Element;
    disabled?: boolean;
    children: React.ReactNode;
}
export declare type NativeButtonProps = {
    to?: string;
    href?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps & Omit<React.ButtonHTMLAttributes<any>, "type" | "onClick">;
declare const _default: ({ children, className, variant, component, LinkComponent, disabled, type, ...other }: NativeButtonProps) => JSX.Element;
export default _default;
