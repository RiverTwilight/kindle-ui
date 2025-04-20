import React, { useState } from "react";
import { Switch } from "@kindle-ui/core";

const SwitchExample = ({
	className,
	id,
	checked = false,
	disabled = false,
	"aria-label": ariaLabel,
	onChange,
}: {
	className?: string;
	id?: string;
	checked?: boolean;
	disabled?: boolean;
	"aria-label"?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
	const [isChecked, setIsChecked] = useState(checked);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
