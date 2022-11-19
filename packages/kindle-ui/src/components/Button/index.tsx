import React from "react";
import styled from "styled-components";
import hover from "@/utils/hover";

/**
 * Button
 * @author rivertwilight
 */

export interface BaseButtonProps {
	variant?: "outline" | "default";
	disabled?: boolean;
	children: React.ReactNode;
}

export type NativeButtonProps = {
	onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
	Omit<React.ButtonHTMLAttributes<any>, "type" | "onClick">;

export default ({
	children,
	className,
	variant = "default",
	component = "button",
	LinkComponent = "a",
	disabled,
	type,
	...other
}: NativeButtonProps) => {
	let ComponentProp = component;

	if (ComponentProp === "button" && (other.href || other.to)) {
		ComponentProp = LinkComponent;
	}

	const buttonProps: NativeButtonProps = {};

	if (ComponentProp === "button") {
		buttonProps.type = type === undefined ? "button" : type;
		buttonProps.disabled = disabled;
	} else {
		if (!other.href && !other.to) {
			buttonProps.role = "button";
		}
		if (disabled) {
			buttonProps["aria-disabled"] = disabled;
		}
	}

	return (
		<StyledButton
			as={ComponentProp}
			className={className}
			variant={variant}
			{...buttonProps}
			{...other}
		>
			{children}
		</StyledButton>
	);
};

const StyledButton = styled.div`
	boxsizing: border-box;
	border: ${(props: NativeButtonProps) =>
		props.variant === "outline" ? "3px solid var(--text-color)" : "none"};
	min-width: 70px;
	height: 50px;
	outline: 0;
	background: var(--bg-color);

	font-weight: 600;
	font-size: 1rem;
	color: var(--text-color);
	text-decoration: none;
	font-family: "AmazonEmber-Rg";
	textdecoration: none;
	text-transform: uppercase;

	display: inline-flex;
	align-items: center;
	justifycontent: center;
	position: relative;
	boxsizing: border-box;

	padding: 0 30px;
	overflow: hidden;
	${hover}
	cursor: pointer;
	userselect: none;
	verticalalign: middle;
	mozappearance: none;
	webkitappearance: none;
`;
