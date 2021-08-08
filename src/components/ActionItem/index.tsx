import styled from "styled-components";
import hover from "../../utils/hover";

const ActionItem = styled.button`
	border: none;
	width: 50px;
	background-color: var(--bg-color);
	color: var(--text-color);
	margin-left: 10px;
	svg {
		width: 23px;
	}
	svg path {
		stroke: var(--text-color);
	}
	text-transform: lowercase;
	${hover}
`;

export default ActionItem;
