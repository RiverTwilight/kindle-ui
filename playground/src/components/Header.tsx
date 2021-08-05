import {
	ActionGroup,
	ArrowBackSharpIcon,
	ActionItem,
	ActionBarSpace,
	Navbar,
	SearchBar,
	StatuBar,
	ActionBar,
	ActionBarMenu,
	HomeOutlineIcon,
} from "kindyle";
import React from "react";

export default () => {
	return (
		<Navbar fixed>
			<StatuBar deviceName="My Kindle" />
			<ActionBar>
				<ActionGroup>
					<ActionItem>
						<HomeOutlineIcon />
						home
					</ActionItem>
					<ActionItem>
						<ArrowBackSharpIcon />
						BACK
					</ActionItem>
					<ActionItem>
						<HomeOutlineIcon />
						settings
					</ActionItem>
				</ActionGroup>
				<ActionBarSpace />
				<ActionGroup>
					<SearchBar />
					<ActionBarMenu
						items={[
							{
								text: "Github",
							},
							{
								text: "Twitter",
							},
						]}
					/>
				</ActionGroup>
			</ActionBar>
		</Navbar>
	);
};
