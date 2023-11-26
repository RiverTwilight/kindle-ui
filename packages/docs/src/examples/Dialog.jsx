import { useState } from "react";
import {
	DialogContent,
	DialogTitle,
	Dialog,
	DialogAction,
	Button,
} from "@kindle-ui/core";

export default function DialogExample({ rootRef }) {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Button
				onClick={() => {
					setOpen(true);
				}}
			>
				Open Dialog
			</Button>
			<Dialog
				open={open}
				anchorEl={rootRef.current}
				onClose={() => {
					setOpen(false);
				}}
			>
				<DialogTitle>Device Info</DialogTitle>
				<DialogContent>
					One of the reasons that flexbox quickly caught the interest
					of web developers is that it brought proper alignment
					capabilities to the web for the first time. It enabled
					proper vertical alignment, so we can at last easily center a
					box. In this guide, we will take a thorough look at how the
					alignment and justificati
				</DialogContent>
				<DialogAction>
					<Button variant="secondary">EMAIL ME</Button>
				</DialogAction>
			</Dialog>
		</>
	);
}
