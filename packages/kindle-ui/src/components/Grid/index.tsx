import * as React from "react";
import styled from "styled-components";
import { IGridItem } from "../GridItem";

export interface IGrid extends React.HTMLAttributes<HTMLDivElement> {
	children: JSX.Element | JSX.Element[];
	gap?: number;
	rowGap?: number;
	dense?: boolean;
}

const StyledGrid = styled.div<IGrid>`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	gap: ${({ gap }) => gap}px;
	grid-row-gap: ${({ rowGap }) => rowGap}px;

	@media (max-width: 767px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (min-width: 768px) {
		grid-template-columns: repeat(
			${({ dense }) => (dense ? "5" : "3")},
			1fr
		);
	}
`;

function cloneGridItem(
	child: React.ReactElement<IGridItem>,
	props: Partial<IGridItem>
) {
	return React.cloneElement(child, props);
}

function Grid({ children, gap = 8, rowGap = 4, dense = false }: IGrid) {
	return (
		<StyledGrid dense={dense} gap={gap} rowGap={rowGap}>
			{React.Children.map(children, (child) => {
				if (React.isValidElement<IGridItem>(child)) {
					return cloneGridItem(child, { dense });
				}
				return child;
			})}
		</StyledGrid>
	);
}

export default Grid;
