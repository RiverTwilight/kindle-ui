import * as React from "react";
import styled from "styled-components";
import { greyImage } from "../Typography";

export interface IGridItem extends React.HTMLAttributes<HTMLDivElement> {
	children: JSX.Element | JSX.Element[];
	src?: string;
	href?: string;
	target?: string;
	greyImage?: boolean;
	dense?: boolean;
}

const GridItem: React.FC<IGridItem> = ({ className, src, href, target }) => {
	if (href) {
		return (
			<div className={className}>
				<a target={target} href={href}>
					<img src={src} alt="grid item" />
				</a>
			</div>
		);
	}

	return (
		<div className={className}>
			<img src={src}></img>
		</div>
	);
};

const StyledGridItem = styled(GridItem)`
	@media (max-width: 768px) {
		--item-height: calc(20vh);
		& img {
			${(props) => props.greyImage && greyImage}
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}

	@media (min-width: 768px) {
		--item-height: ${(props) =>
			props.dense ? "calc(20vh - 20px)" : "calc(25vh)"};

		& img {
			${(props) => props.greyImage && greyImage}
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}

	width: 100%;
	display: flex;

	& img,
	a {
		display: block;

		height: var(--item-height);
		width: calc(var(--item-height) * 0.626);
	}

	justify-content: center; // Added to center the items horizontally
`;

export default StyledGridItem;
