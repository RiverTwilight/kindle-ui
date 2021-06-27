import styled from "styled-components";
import React from "react";
// import Airplane from "../../icons/airplane.svg"

const Navbar = styled.nav`
	display: flex;
	flex-direction: column;
	border-bottom: 1px solid #000;
`;

const StatuBar = styled.div`
	display: flex;
	border-bottom: 1px solid #000;
	padding: 3px 18px;
	height: 19px;
`;

const ActionBar = styled.div`
	display: flex;
	height: 50px;
`;

const Action = styled.button`
	border: none;
	border-right: 1px solid #000;
	background-color: #fff;
	width: 50px;
	transition: background-color 0.5s;
	&:hover {
		background-color: #000;
	}
`;

export default ({ deviceName = "My Kindle" }) => {
	return (
		<Navbar>
			<StatuBar>{deviceName}</StatuBar>
			<ActionBar>
				<Action></Action>
				<Action></Action>
				<Action></Action>
			</ActionBar>
		</Navbar>
	);
};
