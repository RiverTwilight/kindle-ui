import styled from "styled-components";
import greyImage from "@/utils/greyImage";

interface ITabItem {
	active?: boolean;
	variant: "light" | "default";
}

export default styled.div`
	flex: 0 0 33.33333333%;
	max-height: 200px;
	margin-right: 16px;
	img {
		${greyImage}
		object-fit: cover;
		height: 100%;
		width: 100%;
		border-radius: 3px;
	}
`;
