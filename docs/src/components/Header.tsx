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
import { useRouter } from "next/navigation";

const Header = () => {
	const router = useRouter();

	return (
		<Navbar fixed>
			<StatuBar
				airplane
				celluar={{
					on: true,
					label: "LTE",
					signal: 3,
				}}
				battery={86}
				deviceName="My Kindle"
			/>
			<ActionBar>
				<ActionGroup>
					<ActionItem
						onClick={() => {
							router.push("/");
						}}
					>
						<HomeOutlineIcon />
						home
					</ActionItem>
					<ActionItem
						onClick={() => {
							router.back();
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

export default Header;
