import React from "react";
import styled from "styled-components";
import ActionBar from "../../components/ActionBar";
import StatuBar from "../../components/Statubar"

const frame = styled.iframe`
    width: 100%
`
export default () => {
	return (
		<>
			<StatuBar />
			<ActionBar></ActionBar>
		</>
	);
};
