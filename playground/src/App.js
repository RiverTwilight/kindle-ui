import "./App.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useHistory,
} from "react-router-dom";
import { Container, Navbar } from "kindyle";
import Home from "./page/home";
import Setting from "./page/setting";

const Main = () => {
	let history = useHistory();
	return (
		<>
			<Navbar
				airplane={true}
				battery={99}
				charging
				menuItems={[
					{
						text: "Github",
					},
				]}
				actionItems={{
					1: {
						onClick: () => {
							history.push("/");
						},
					},
					2: {
						onClick: () => {
							history.goBack();
						},
					},
					3: {
						onClick: () => {
							history.push("/setting");

						},
					},
				}}
			/>
			<Switch>
				<Route path="/setting">
					<Setting />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</>
	);
};

function App() {
	return (
		<Router>
			<Container>
				<Main />
			</Container>
		</Router>
	);
}

export default App;
