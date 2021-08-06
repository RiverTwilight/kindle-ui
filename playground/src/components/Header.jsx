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
		<Navbar>
			<StatuBar battery={86} deviceName="My Kindle" />
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
								textPrimary: "Github",
								component: "a",
								href: "https://github.com/rivertwilight"
							},
							{
								textPrimary: "Expermintal Browser",
							},
						]}
					/>
				</ActionGroup>
			</ActionBar>
		</Navbar>
	);
};
