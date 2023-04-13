import { Typography, Button } from "@kindle-ui/core";
import CardExample from "../examples/Card";
import List from "../examples/List";
import TabExample from "../examples/Tab";
import DialogExample from "../examples/Dialog";
import GridExample from "../examples/Grid";
import SwitchExample from "../examples/Switch";
import TextFieldExample from "../examples/TextField";
import { Card } from "@kindle-ui/core";

export default () => {
	return (
		<>
			<aside>
				<Card>目录</Card>
			</aside>
			<div>
				<Typography greyImage={true}>
					<h1>Hi, kindle-ui!</h1>
					<h2>Typography</h2>
					<blockquote>
						“We read to know we're not alone.” ―{" "}
						<b>William Nicholson</b>, Shadowlands
					</blockquote>
					<p>
						kindle-ui is a <b>react</b> component library inspired
						by
						<a>Amazon Kindle reader</a>. Though amazon has released
						a <u>newer UI</u>, this classic desgin is still
						valuable.
					</p>
					<img width={200} src="/Kindle-UI.png"></img>
				</Typography>
				<Typography greyImage={true}>
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
					<h2>Switch</h2>
					<p>This is grid book list in Kindle.</p>
					<SwitchExample />
					<h2>TextField</h2>
					<TextFieldExample />
				</Typography>
			</div>
		</>
	);
};
