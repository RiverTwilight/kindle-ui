import {
	Typography,
	Button,
	ListItem,
	ListItemText,
	ListItemIcon,
	Card,
	CardMedia,
	CardContent,
	CardTitle,
	Tab,
	TabItem,
	EllipsisVerticalIcon,
} from "kindle-ui";
import { Link } from "react-router-dom";

export default () => {
	return (
		<>
			<br />
			<br />
			<br />
			<Typography greyImage={true}>
				<h1>Hi, kindle-ui!</h1>
				<h2>Typography</h2>
				<p>
					kindle-ui is a react component library to build
					Kindle-styled UI.
				</p>
				<img src="https://www.chinanews.com/part/home2013/451/U855P4T451D4F17247DT20210701234543.jpg"></img>
				<h2>Button</h2>
				<Button>Button</Button>{" "}
				<Button href="https://github.com/rivertwilight">
					With Link
				</Button>
				<h2>List</h2>
				<ListItem component={Link} to="/reader">
					<ListItemText primary="尘埃落定" second="阿来著" />
				</ListItem>
				<ListItem component="a" href="https://github.com">
					<ListItemText
						primary="The Adventure of Sherlok Holmoes (福尔摩斯探案集）"
						second="Arthur Conan Doyle"
					/>
					<ListItemIcon
						onClick={() => {
							alert("sdf");
						}}
					>
						<EllipsisVerticalIcon />
					</ListItemIcon>
				</ListItem>
				<h2>Tab</h2>
				<Tab>
					<TabItem>Life</TabItem>
					<TabItem active>Art</TabItem>
				</Tab>
				<h2>Card</h2>
				<Card>
					<CardMedia>
						<img src="/earth.jpg"></img>
					</CardMedia>

					<CardContent>
						<CardTitle>Title</CardTitle>
						One of the reasons that flexbox quickly caught the
						interest of web developers is that it brought proper
						alignment capabilities to the web for the first time. It
						enabled proper vertical alignment, so we can at last
						easily center a box. In this guide, we will take a
						thorough look at how the alignment and justification
						properties work in Flexbox. To center our box we use the
						align-items property to align our item on the cross
						axis, which in this case is the block axis running
						vertically. We use justify-content to align the item on
						the main axis, which in this case the inline axis
						running horizontally.
					</CardContent>
				</Card>
			</Typography>
		</>
	);
};
