import { Grid, GridItem } from "@kindle-ui/core";

export default function () {
	return (
		<>
			<Grid dense>
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
