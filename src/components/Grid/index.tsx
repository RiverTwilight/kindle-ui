import * as React from "react";
import styled from "styled-components";

export interface IGrid extends React.HTMLAttributes<HTMLDivElement> {
	children: JSX.Element | JSX.Element[];
}

const StyledGrid = styled.div`
	display: flex;
	justify-content: space-between;

	@media (max-width: 768px) {
		flex-flow: row wrap;
	}

	@media (min-width: 768px) {
		row-gap: 16px;
		flex-direction: row;
		flex-flow: row wrap;
	}
`;

function Grid({ children }: IGrid) {
	const cldLength = React.Children.count(children);

	console.log(cldLength);

	return <StyledGrid cldLength={cldLength}>{children}</StyledGrid>;
}

export default Grid;
