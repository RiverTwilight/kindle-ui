import * as React from "react";
import styled from "styled-components";

export interface IGrid extends React.HTMLAttributes<HTMLDivElement> {
	children: JSX.Element | JSX.Element[];
	gap?: number;
	rowGap?: number;
}

const StyledGrid = styled.div<IGrid>`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	gap: ${({ gap }) => gap}px;
	grid-row-gap: ${({ rowGap }) => rowGap}px;

	@media (max-width: 767px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

function Grid({ children, gap = 0, rowGap = 0 }: IGrid) {
	return (
		<StyledGrid gap={gap} rowGap={rowGap}>
			{children}
		</StyledGrid>
	);
}

export default Grid;
