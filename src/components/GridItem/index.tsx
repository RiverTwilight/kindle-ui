import * as React from "react";
import styled from "styled-components";

export interface IGridItem extends React.HTMLAttributes<HTMLDivElement> {
	children: JSX.Element | JSX.Element[];
	src?: string;
	href?: string;
}

const StyledGridItem = styled.div`
	display: flex;

	@media (max-width: 768px) {
		width: 25vh;
		height: calc(25vh / 0.626);
	}

	@media (min-width: 768px) {
		width: 200px;
		height: 317px;
	}

	& > img {
		width: 100%;
		object-fit: cover;
	}
`;

const GridItem: React.FC<IGridItem> = ({ src, href }) => {
	if (href) {
		return (
			<StyledGridItem>
				<a href={href}>
					<img src={src} alt="grid item" />
				</a>
			</StyledGridItem>
		);
	}

	return (
		<StyledGridItem>
			<img src={src}></img>
		</StyledGridItem>
	);
};

export default GridItem;
