import styled from "styled-components";
import hover from "@/utils/hover";
import border from "@/utils/border";

interface ITabItem {
	active?: boolean;
	variant: "light" | "default";
}

export default styled.div`
	font-size: 1.5rem;
	font-weight: 500;
	margin-bottom: 10px;
`;
