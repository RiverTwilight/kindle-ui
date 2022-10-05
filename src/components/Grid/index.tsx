import styled from "styled-components";

export interface IGrid extends React.HTMLAttributes<HTMLDivElement> {
	children: JSX.Element | JSX.Element[];
}

export default styled.div`
	row-gap: 16px;
	display: flex;
	flex-direction: row;
	flex-flow: row wrap;
`;
