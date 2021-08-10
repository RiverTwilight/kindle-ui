import styled from "styled-components";
import hover from "../../utils/hover";

const ActionItem = styled.button`
	border: none;
	width: 50px;
	background-color: var(--bg-color);
	color: var(--text-color);
	@media (min-width: 460px) {
		margin-left: 10px;
	}
	svg {
		width: 23px;
	}
	svg path {
		stroke: var(--text-color);
		/* DO NOT ADD THIS: fill: var(--text-color);*/
	}
	text-transform: lowercase;
	${hover}
`;

export default ActionItem;
