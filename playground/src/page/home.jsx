import { Typography, Button } from "kindle-ui";
import CardExample from "../examples/Card";
import List from "../examples/List";
import TabExample from "../examples/Tab";
import { Card } from "kindle-ui";

export default () => {
	return (
		<div className="wrapper">
			<aside>
				<Card>asfmsdfm</Card>
			</aside>
			<main>
				<Typography greyImage={true}>
					<h1>Hi, kindle-ui!</h1>
					<h2>Install</h2>
					<p>
						<code>npm i kindle-ui</code>
					</p>
					or
					<p>
						<code>yarn add kindle-ui</code>
					</p>
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
					<TabExample />
					<h2>Card</h2>
					<CardExample />
				</Typography>
			</main>
		</div>
	);
};
