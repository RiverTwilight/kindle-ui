import * as React from "react";
import styled from "styled-components";
import { greyImage } from "../Typography";

export interface IGridItem extends React.HTMLAttributes<HTMLDivElement> {
	children: JSX.Element | JSX.Element[];
	src?: string;
	href?: string;
	target?: string;
	greyImage?: boolean;
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
	display: flex;
	--item-height: 140px;

	@media (max-width: 768px) {
		width: var(--item-height);
		height: calc(var(--item-height) / 0.626);
	}

	@media (min-width: 768px) {
		width: 200px;
		height: 317px;
		aspect-ratio: 0.625;
	}

	& img {
		${(props) => props.greyImage && greyImage}
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	a {
		width: 100%;
		height: 100%;
		display: block;
	}
`;

export default StyledGridItem;
