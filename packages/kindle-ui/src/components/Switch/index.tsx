import React from "react";
import styled from "styled-components";
import border from "@/utils/border";

export interface SwitchProps {
	children: JSX.Element | JSX.Element[];
	component?: string;
	className?: string;
	LinkComponent?: string;
	id: string; // a unique identifier for the switch component
	checked?: boolean; // to set the default state of the switch
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // a callback function that will be called when the switch is toggled
	disabled?: boolean; // to disable the switch component
	ariaLabel?: string; // to provide accessibility information for the switch component
}

const Switch = ({
	className,
	component = "div",
	LinkComponent = "a",
	children,
	id,
	checked = false,
	onChange,
	disabled = false,
	ariaLabel,
	...other
}: SwitchProps) => {
	let ComponentProp = component;

	if (ComponentProp === "div" && (other.href || other.to)) {
		ComponentProp = LinkComponent;
	}
	return (
		<label className={`switch ${className}`}>
			<input
				type="checkbox"
				id={id}
				checked={checked}
				onChange={onChange}
				disabled={disabled}
				aria-label={ariaLabel}
			/>
			<span className="slider"></span>
		</label>
	);
};

const StyledListItem = styled(Switch)`
	& {
		--button-width: 3.5em;
		--button-height: 2em;
		--toggle-diameter: 1.5em;
		--toggle-diameter-width: 1em;
		--button-toggle-offset: calc(
			(var(--button-height) - var(--toggle-diameter)) / 2
		);
		--toggle-shadow-offset: 10px;
		--toggle-wider: 3em;
		--color-grey: #cccccc;
		--color-green: #4296f4;
	}

	.slider {
		display: inline-block;
		width: var(--button-width);
		height: var(--button-height);
		background-color: var(--color-grey);
		position: relative;
	}

	.slider::after {
		content: "";
		display: inline-block;
		width: var(--toggle-diameter-width);
		height: var(--toggle-diameter);
		background-color: var(--bg-color);
		position: absolute;
		top: var(--button-toggle-offset);
		transform: translateX(var(--button-toggle-offset));
		box-shadow: var(--toggle-shadow-offset) 0
			calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
	}

	& input[type="checkbox"]:checked + .slider {
		background-color: var(--text-color);
	}

	& input[type="checkbox"]:checked + .slider::after {
		transform: translateX(
			calc(
				var(--button-width) - var(--toggle-diameter-width) -
					var(--button-toggle-offset)
			)
		);
		box-shadow: calc(var(--toggle-shadow-offset) * -1) 0
			calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
	}

	& input[type="checkbox"] {
		display: none;
	}

	& input[type="checkbox"]:active + .slider::after {
		width: var(--toggle-wider);
	}

	& input[type="checkbox"]:checked:active + .slider::after {
		transform: translateX(
			calc(
				var(--button-width) - var(--toggle-wider) -
					var(--button-toggle-offset)
			)
		);
	}
`;

export default StyledListItem;
