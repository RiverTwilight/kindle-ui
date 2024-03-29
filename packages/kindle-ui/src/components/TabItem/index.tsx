import styled from "styled-components";
import hover from "@/utils/hover";
import border from "@/utils/border";

interface ITabItem {
	active?: boolean;
	variant: "light" | "default";
}

export default styled.div`
	font-family: AmazonEmber-Rg, sans-serif;
	white-space: nowrap; // Corrected property
	padding: 0 10px;
	cursor: pointer;
	color: #888;
	text-transform: uppercase;

	${hover}
	border-right: ${border};
	${(props: ITabItem) =>
		props.active &&
		`
      font-weight: 700;
      color: var(--text-color);
    `}
	&:last-child {
		border-right: none;
	}
`;
