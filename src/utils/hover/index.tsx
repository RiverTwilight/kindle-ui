import styled, { css } from "styled-components";

export default css`
	&:hover {
		background-color: var(--text-color);
		color: var(--bg-color);
		svg path {
			stroke: var(--bg-color);
		}
	}
`;
