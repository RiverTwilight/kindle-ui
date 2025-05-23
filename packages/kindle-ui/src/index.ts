const ENV = process.env.NODE_ENV;
if (
	ENV !== "production" &&
	ENV !== "test" &&
	typeof console !== "undefined" &&
	console.warn && // eslint-disable-line no-console
	typeof window !== "undefined"
) {
	// eslint-disable-next-line no-console
	console.warn(
		"You are using a whole package of Kindle-ui, " +
			"please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size."
	);
}

export { default as ActionBar } from "./components/ActionBar/index";
export { default as ActionItem } from "./components/ActionItem/index";
export { default as ActionGroup } from "./components/ActionGroup/index";
export { default as ActionBarMenu } from "./components/ActionBarMenu/index";
export { default as ActionBarSpace } from "./components/ActionBarSpace/index";
export { default as Button } from "./components/Button/index";
export { default as Card } from "./components/Card/index";
export { default as CardMedia } from "./components/CardMedia/index";
export { default as CardContent } from "./components/CardContent/index";
export { default as CardTitle } from "./components/CardTitle/index";
export { default as CardAction } from "./components/CardAction/index";
export { default as Container } from "./components/Container/index";
export { default as Dialog } from "./components/Dialog/index";
export { default as DialogAction } from "./components/DialogAction/index";
export { default as DialogContent } from "./components/DialogContent/index";
export { default as DialogTitle } from "./components/DialogTitle/index";
export { default as Grid } from "./components/Grid/index";
export { default as GridItem } from "./components/GridItem/index";
export { default as List } from "./components/List/index";
export { default as ListItem } from "./components/ListItem/index";
export { default as ListItemIcon } from "./components/ListItemIcon/index";
export { default as ListItemText } from "./components/ListItemText/index";
export { default as Menu } from "./components/Menu/index";
export { default as Navbar } from "./components/Navbar/index";
export { default as StatuBar } from "./components/Statubar/index";
export { default as SearchBar } from "./components/SearchBar/index";
export { default as Section } from "./components/Section/index";
export { default as SectionTitle } from "./components/SectionTitle/index";
export { default as Switch } from "./components/Switch/index";
export { default as Typography } from "./components/Typography/index";
export { default as Tab } from "./components/Tab/index";
export { default as TabItem } from "./components/TabItem/index";
export { default as TimeBar } from "./components/TimeBar/index";
export { default as KindleOasis } from "./components/KindleOasis/index";

export { default as AirplaneIcon } from "./icons/airplane.svg";
export { default as ArrowBackSharpIcon } from "./icons/arrow-back-sharp.svg";
export { default as BatteryFullIcon } from "./icons/battery-full.svg";
export { default as BatteryHalfSharpIcon } from "./icons/battery-half-sharp.svg";
export { default as CelluarIcon } from "./icons/cellular-sharp.svg";
export { default as ChevronForwardSharpIcon } from "./icons/chevron-forward-sharp.svg";
export { default as CogSharpIcon } from "./icons/cog-sharp.svg";
export { default as EllipsisVerticalIcon } from "./icons/ellipsis-vertical.svg";
export { default as EllipsisVerticalCircleSharpIcon } from "./icons/ellipsis-vertical-circle-sharp.svg";
export { default as HomeOutlineIcon } from "./icons/home-outline.svg";
export { default as WifiSharpIcon } from "./icons/wifi-sharp.svg";
