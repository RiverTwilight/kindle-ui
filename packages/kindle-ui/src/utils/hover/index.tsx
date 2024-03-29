import { css } from "styled-components";

export default css`
	transition: background-color 0.5s;

	&:hover {
		background-color: var(--text-color);
		color: var(--bg-color) !important;
		a {
			color: var(--bg-color) !important;
		}
		svg path,
		circle {
			transition: stroke 0.5s;
			stroke: var(--bg-color);
			fill: var(--bg-color);
		}
	}
`;
