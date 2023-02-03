import "./App.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useHistory,
} from "react-router-dom";
import { Container, KindleOasis } from "@kindle-ui/core";
import Home from "./page/Home.jsx";
import Setting from "./page/setting";
import Reader from "./page/reader";
import Header from "./components/Header.jsx";

const Main = () => {
	return (
		<div>
			<Header />
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
		</div>
	);
};

function App() {
	return (
		<Container dark={false} deviceFrame={KindleOasis}>
			<Router>
				<Main />
			</Router>
		</Container>
	);
}

export default App;
