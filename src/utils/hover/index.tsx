import { css } from "styled-components";

export default css`
	transition: background-color 0.5s;
	&:hover {
		background-color: var(--text-color);
		color: var(--bg-color);
		svg path {
			stroke: var(--bg-color);
		}
	}
`;
