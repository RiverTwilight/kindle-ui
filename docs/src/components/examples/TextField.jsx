import {
	ListItem,
	ListItemText,
	EllipsisVerticalIcon,
	ListItemIcon,
} from "@kindle-ui/core";

export default function () {
	return (
		<>
			<ListItem component="a" to="/reader">
				<ListItemText primary="尘埃落定" second="阿来著" />
			</ListItem>
			<ListItem component="a" href="https://github.com">
				<ListItemText
					primary="The Adventure of Sherlok Holmoes (福尔摩斯探案集）"
					second="Arthur Conan Doyle"
				/>
				<ListItemIcon
					onClick={() => {
						alert("sdf");
					}}
				>
					<EllipsisVerticalIcon />
				</ListItemIcon>
			</ListItem>
		</>
	);
}
