import styled from "styled-components";
import border from "../../utils/border";

export interface IGridItem extends React.HTMLAttributes<HTMLDivElement> {
	children: JSX.Element | JSX.Element[];
}

export default styled.div`
	border: ${border};
	border-radius: 7px;
	padding: 10px;
`;
