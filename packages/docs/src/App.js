import "./App.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useHistory,
} from "react-router-dom";
import { Container } from "@kindle-ui/core";
import Home from "./page/Home.jsx";
import Setting from "./page/setting";
import Reader from "./page/reader";
import Header from "./components/Header.jsx";

const Main = () => {
	return (
		<div id="device">
			<div className="hardButton hardButton-up"></div>
			<div className="hardButton hardButton-down"></div>
			<div id="screen">
				<div id="shadowTop"></div>
				<div id="content">
					<Header />
					<main>
						<Switch>
							<Route path="/">
								<Home />
							</Route>
							<Route path="/setting">
								<Setting />
							</Route>
							<Route path="/reader">
								<Reader />
							</Route>
						</Switch>
					</main>
				</div>
				<div id="shadowBottom"></div>
			</div>
		</div>
	);
};

function App() {
	return (
		<Container>
			<Router>
				<Main />
			</Router>
		</Container>
	);
}

export default App;
