import React from "react";
import styled from "styled-components";
import hover from "../../utils/hover";

/**
 * Button
 * @author rivertwilight
 */

const Button = ({ children, className, href, ...props }: any) => {
	if (href)
		return (
			<a href={href}>
				<button
					style={{
						cursor: "pointer",
					}}
					className={className}
					type="button"
					{...props}
				>
					{children}
				</button>
			</a>
		);
	return (
		<button className={className} {...props} href={href}>
			{children}
		</button>
	);
};

export default styled(Button)`
	${(props: IButton) =>
		props.variant === "outline" && `border: 3px solid var(--text-color);`}
	min-width: 70px;
	height: 50px;
	background: var(--bg-color);
	font-weight: 600;
	font-size: 1rem;
	padding: 0 30px;
	overflow: hidden;
	${hover}
	color: var(--text-color);
	font-family: "AmazonEmber-Rg";
`;

export interface IButton {
	children: JSX.Element | JSX.Element[];
	onClick?: (e: any) => void;
	href?: string;
	variant?: "default" | "outline";
}
