import { Typography, Button } from "@kindle-ui/core";
import CardExample from "../examples/Card";
import List from "../examples/List";
import TabExample from "../examples/Tab";
import DialogExample from "../examples/Dialog";
import GridExample from "../examples/Grid";
import TextFieldExample from "../examples/TextField";
import { Card } from "@kindle-ui/core";

export default () => {
	return (
		<div className="wrapper">
			<aside>
				<Card>目录</Card>
			</aside>
			<main>
				<Typography greyImage={true}>
					<h1>Hi, kindle-ui!</h1>
					<h2>Typography</h2>
					<p>
						kindle-ui is a <b>react</b> component library inspired
						by
						<a>Amazon Kindle reader</a>. Though amazon has released
						a <u>newer UI</u>, this classic desgin is still
						valuable.
					</p>
					<img src="/Kindle-UI.png"></img>
					<h2>Button</h2>
					<Button>Button</Button>
					&nbsp;
					<Button variant="outline">OUTLINE</Button>
					&nbsp;
					<Button href="https://github.com/rivertwilight">
						With Link
					</Button>
					<h2>List</h2>
					<List />
					<h2>Tab</h2>
					<TabExample />
					<h2>Card</h2>
					<CardExample />
					<h2>Dialog</h2>
					<DialogExample />
					<h2>Grid</h2>
					<p>This is grid book list in Kindle.</p>
					<GridExample />
					<h2>TextField</h2>
					<TextFieldExample />
				</Typography>
			</main>
		</div>
	);
};
