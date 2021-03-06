import { Typography, Button } from "kindle-ui";
import Card from "../examples/Card";
import List from "../examples/List";
import Tab from "../examples/Tab";

export default () => {
	return (
		<div className="wrapper">
			<aside>asdkljfjsahfk</aside>
			<main>
				<Typography greyImage={true}>
					<h1>Hi, kindle-ui!</h1>
					<h2>Typography</h2>
					<p>
						kindle-ui is a react component library to build
						Kindle-styled UI.
					</p>
					<img src="/Kindle-UI.png"></img>
					<h2>Button</h2>
					<Button>Button</Button>
					<Button variant="outline">OUTLINE</Button>
					<Button href="https://github.com/rivertwilight">
						With Link
					</Button>
					<h2>List</h2>
					<List />
					<h2>Tab</h2>
					<Tab />
					<h2>Card</h2>
					<Card />
				</Typography>
			</main>
		</div>
	);
};
