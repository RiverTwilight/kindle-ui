import * as React from "react";
import styled from "styled-components";

export interface IGridItem extends React.HTMLAttributes<HTMLDivElement> {
	children: JSX.Element | JSX.Element[];
	src?: string;
	href?: string;
}

const StyledGridItem = styled.div`
	min-height: 30px;
	display: block;
	flex: 0 0 33.33333333%;
	max-width: 33.33333333%;
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
