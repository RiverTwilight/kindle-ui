import React from "react";
import styled from "styled-components";
import hover from "../../utils/hover";

/**
 * Button
 * @author rivertwilight
 */
const Button = ({
	children,
	className,
	variant = "default",
	href,
	...props
}: any) => {
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
	border: ${(props: IButton) =>
		props.variant === "outline" ? "3px solid var(--text-color)" : "none"};
	min-width: 70px;
	height: ${(props) => (props.variant === "outline" ? "50px" : "40px")};
	outline: none;
	background: var(--bg-color);
	font-weight: 600;
	font-size: 1rem;
	padding: 0 30px;
	overflow: hidden;
	${hover}
	color: var(--text-color);
	font-family: "AmazonEmber-Rg";
	text-transform: uppercase;
`;

export interface IButton {
	children: JSX.Element | JSX.Element[];
	onClick?: (e: any) => void;
	href?: string;
	variant?: "default" | "outline";
}
