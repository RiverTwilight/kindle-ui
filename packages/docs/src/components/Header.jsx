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
	CogSharpIcon,
} from "@kindle-ui/core";
import { useHistory } from "react-router-dom";

export default () => {
	let history = useHistory();

	return (
		<Navbar fixed>
			<StatuBar
				airplane
				celluar={{
					on: true,
					label: "LTE",
					siginal: 3,
				}}
				battery={86}
				deviceName="My Kindle"
			/>
			<ActionBar>
				<ActionGroup>
					<ActionItem
						onClick={() => {
							history.push("/");
						}}
					>
						<HomeOutlineIcon />
						home
					</ActionItem>
					<ActionItem
						onClick={() => {
							history.goBack();
						}}
					>
						<ArrowBackSharpIcon />
						BACK
					</ActionItem>
					<ActionItem>
						<CogSharpIcon />
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
								href: "https://github.com/rivertwilight",
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
