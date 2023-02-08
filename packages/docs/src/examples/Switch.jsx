import React, { useState } from "react";
import { Switch } from "@kindle-ui/core";

const SwitchExample = ({
	className,
	id,
	checked = false,
	disabled = false,
	"aria-label": ariaLabel,
	onChange,
}) => {
	const [isChecked, setIsChecked] = useState(checked);

	const handleChange = (event) => {
		setIsChecked(event.target.checked);
		if (onChange) {
			onChange(event);
		}
	};

	return (
		<Switch
			checked={isChecked}
			onChange={handleChange}
			disabled={disabled}
			aria-label={ariaLabel}
		/>
	);
};

export default SwitchExample;
