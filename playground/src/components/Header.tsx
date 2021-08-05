import {
	ActionGroup,
	ArrowBackSharpIcon,
	ActionItem,
	ActionSpace,
    Navbar
} from "kindyle";

export default () => {
	return (
		<Navbar fixed={autoClose}>
			<StatuBar
				airplane={true}
				battery={99}
				charging
				deviceName={"My Kindle"}
			/>
			<ActionBar
				menuItems={[
					{
						text: "Github",
					},
				]}
				actionItems={{
					1: {
						onClick: () => {
							history.push("/");
						},
					},
					2: {
						onClick: () => {
							history.goBack();
						},
					},
					3: {
						onClick: () => {
							history.push("/setting");
						},
					},
				}}
			>
				<ActionGroup>
					<ActionItem onClick={actionItems[1].onClick}>
						<Home />
						{actionItems[1].text || "home"}
					</ActionItem>
					<ActionItem onClick={actionItems[2].onClick}>
						<ArrowBack />
						{actionItems[2].text || "Back"}
					</ActionItem>
					<ActionItem onClick={actionItems[3].onClick}>
						<Settings />
						{actionItems[3].text || "settings"}
					</ActionItem>
				</ActionGroup>
				<ActionSpace />
				<ActionGroup>
					<StyledSearchBar />
					<MoreMenu items={menuItems} />
				</ActionGroup>
			</ActionBar>
		</Navbar>
	);
};
