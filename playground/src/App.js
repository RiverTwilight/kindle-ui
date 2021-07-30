import "./App.css";
import { Navbar, Typography } from "kindlye";

function App() {
	return (
		<>
			<Navbar battery={59} />
			<br />
			<br />
			<br />
			<Typography greyImage>
				<h1>Hi, kindyle!</h1>
				<p>
					(CNN)The last US troops have left Bagram Air Base, according
					to a US defense official, marking the end of the American
					presence at the sprawling compound that became the center of
					military power in Afghanistan.
				</p>
				<h2>Introduction</h2>
				<p>
					习近平总书记“七一”重要讲话是一篇光辉的马克思主义纲领性文献，
					蕴含着深厚的政治分量、理论含量、精神能量、实践力量。
					讲话提出了一系列新思想新观点新论断，把我们党对共产党执政规律、
					社会主义建设规律、人类社会发展规律的认识提升到了新高度。新华社《学习进行时》原创品牌栏目“讲习所”今天起推出系列文章，为您梳理解读讲话中的一系列重大观点。
				</p>
				<img src="https://www.chinanews.com/part/home2013/451/U855P4T451D4F17247DT20210701234543.jpg"></img>
			</Typography>
		</>
	);
}

export default App;
