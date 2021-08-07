import {
	Typography,
	Button,
	ListItem,
	ListItemText,
	ListItemIcon,
	Card,
	Tab,
	TabItem,
	EllipsisVerticalIcon,
} from "kindyle";

export default () => {
	return (
		<>
			<br />
			<br />
			<br />
			<Typography greyImage={true}>
				<h1>Hi, kindyle!</h1>
				<h2>Typography</h2>
				<p>
					Kindyle is a react component library to build Kindle-styled
					UI.
				</p>
				<img src="https://www.chinanews.com/part/home2013/451/U855P4T451D4F17247DT20210701234543.jpg"></img>
				<h2>Button</h2>
				<Button>Button</Button>
				{" "}
				<Button href="https://github.com/rivertwilight">
					With Link
				</Button>
				<h2>List</h2>
				<ListItem>
					<ListItemText primary="尘埃落定" second="阿来著" />
				</ListItem>
				<ListItem component="a" href="https://github.com">
					<ListItemText
						primary="The Adventure of Sherlok Holmoes (福尔摩斯探案集）"
						second="Arthur Conan Doyle"
					/>
					<ListItemIcon onClick={()=>{
						alert("sdf")
					}}>
						<EllipsisVerticalIcon />
					</ListItemIcon>
				</ListItem>
				<h2>Tab</h2>
				<Tab>
					<TabItem>Life</TabItem>
					<TabItem active>Art</TabItem>
				</Tab>
				<h2>Card</h2>
				<Card>asdfkhjf</Card>
			</Typography>
		</>
	);
};
