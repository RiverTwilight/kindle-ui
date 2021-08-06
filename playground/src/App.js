import "./App.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useHistory,
} from "react-router-dom";
import { Container } from "kindyle";
import Home from "./page/home";
import Setting from "./page/setting";
import Header from "./components/Header.jsx";

const Main = () => {
	return (
		<>
			<Header />
			<Switch>
				<Route path="/">
					<Home />
				</Route>
				<Route path="/setting">
					<Setting />
				</Route>
				{/* <Route path="/browser">
					<Browser />
				</Route> */}
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
