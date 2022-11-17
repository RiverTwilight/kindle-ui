import { useState } from "react";
import { DialogContent, Dialog, DialogAction, Button } from "@kindle-ui/core";

export default function () {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Dialog
				open={open}
				onClose={() => {
					setOpen(false);
				}}
			>
				<DialogContent>This is a dialog</DialogContent>
				<DialogAction></DialogAction>
			</Dialog>
			<Button
				onClick={() => {
					setOpen(true);
				}}
			>
				Open Dialog
			</Button>
		</>
	);
}
