import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, KindleOasis } from "@kindle-ui/core";
import Home from "./page/Home.jsx";
import Setting from "./page/setting";
import Reader from "./page/reader";
import Header from "./components/Header.jsx";
import "./App.css";

const Main = () => {
	return (
		<>
			<Header />
			<div className="wrapper">
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
		</>
	);
};

function App() {
	return (
		<>
			{/* <div style={{ height: "30px" }}></div> */}
			<Container dark={false} deviceFrame={KindleOasis}>
				<Router>
					<Main />
				</Router>
			</Container>
		</>
	);
}

export default App;
