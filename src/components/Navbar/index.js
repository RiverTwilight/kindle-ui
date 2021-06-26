import styled from "styled-componenets";

const Navbar = styled.nav`
	display: flex;
    borderBottom
`;

const StatuBar = styled.div`
	display: flex;
`;

const ActionBar = styled.div`
	display: flex;
`;

export default () => {
	return (
		<Navbar>
			<StatuBar>
                My Kindle
            </StatuBar>
		</Navbar>
	);
};
