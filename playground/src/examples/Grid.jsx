import { Grid, GridItem } from "kindle-ui";
import { Link } from "react-router-dom";

export default function () {
	return (
		<>
			<Grid>
				<GridItem src="/img/cover_0.jpg" />
				<GridItem src="/img/cover_1.jpg" />
				<GridItem src="/img/cover_2.jpg" />
			</Grid>
		</>
	);
}
