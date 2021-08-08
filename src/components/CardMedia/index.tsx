import styled from "styled-components";
import greyImage from "../../utils/greyImage";

interface ITabItem {
	active?: boolean;
	variant: "light" | "default";
}

export default styled.div`
	img {
		${greyImage}
		object-fit: cover;
		height: 100%;
		width: 100%;
		border-radius: 3px;
	}
`;
