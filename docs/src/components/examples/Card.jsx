import {
	Card,
	CardMedia,
	CardAction,
	Button,
	CardContent,
	CardTitle,
} from "@kindle-ui/core";

export default function () {
	return (
		<Card>
			<CardTitle>Title</CardTitle>
			<CardContent>
				<CardMedia>
					<img src="/earth.jpg"></img>
				</CardMedia>
				One of the reasons that flexbox quickly caught the interest of
				web developers is that it brought proper alignment capabilities
				to the web for the first time. It enabled proper vertical
				alignment, so we can at last easily center a box. In this guide,
				we will take a thorough look at how the alignment and
				justification properties work in Flexbox. To center our box we
				use the align-items property to align our item on the cross
				axis, which in this case is the block axis running vertically.
				We use justify-content to align the item on the main axis, which
				in this case the inline axis running horizontally.
			</CardContent>

			<CardAction>
				<Button>REad</Button>
			</CardAction>
		</Card>
	);
}
