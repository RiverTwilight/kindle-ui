import "./App.css";
import { Navbar, Typography, Button, Container } from "kindyle";

function App() {
	return (
		<Container>
			<Navbar airplane={true} battery={99} />
			<br />
			<br />
			<br />
			<main>
				<Typography greyImage={true}>
					<h1>Hi, kindyle!</h1>
					<h2>Button</h2>
					<Button>Button</Button>
					<h2>Typography</h2>
					<p>
						(CNN)The last US troops have left Bagram Air Base,
						according to a US defense <u>official</u>, marking the
						end of the American presence at the sprawling compound
						that became the center of military power in Afghanistan.
					</p>
					<img src="https://www.chinanews.com/part/home2013/451/U855P4T451D4F17247DT20210701234543.jpg"></img>
					<h2>List</h2>
				</Typography>
			</main>
		</Container>
	);
}

export default App;
