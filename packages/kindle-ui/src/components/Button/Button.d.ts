type Button<D extends React.ElementType = "button", P = {}> = {
	props: P & {
		variant: "outline";
	};
};

export default Button
