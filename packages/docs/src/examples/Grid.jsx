import { Grid, GridItem } from "@kindle-ui/core";
import { Link } from "react-router-dom";

export default function () {
	return (
		<>
			<Grid gap={2}>
				<GridItem greyImage src="/img/cover_0.jpg" />
				<GridItem src="/img/cover_1.jpg" />
				<GridItem src="/img/cover_2.jpg" />
				<GridItem src="/img/cover_2.jpg" />
				<GridItem src="/img/cover_2.jpg" />
				<GridItem
					target="_blank"
					href="https://www.google.com"
					src="/img/cover_2.jpg"
				/>
				<GridItem src="/img/cover_2.jpg" />
			</Grid>
		</>
	);
}
