import React from "react";
import styled, { css } from "styled-components";

const environmentLight = css`
	linear-gradient(
		235deg,
		rgb(203 203 203 / 100%) 0%,
		rgba(0, 0, 0, 1) 23%
	);
`;

const environmentDark = css`
    linear-gradient(
        237deg, 
        rgba(191,191,191,1) 0%, 
        rgba(0,0,0,1) 45%)
`;

const StyledContainer = styled.div`
	@media screen and (max-width: 768px) {
		.hardButton {
			display: none;
		}
	}

	@media screen and (min-width: 767px) {
		* {
			--hbutton-height: 12.5vh;
			--hbutton-padding: 4vh;
			--border-shadow-width: 6px;
		}

		max-width: 980px;
		position: relative;
		aspect-ratio: 0.89;
		box-sizing: border-box;
		padding-left: 34px;
		padding-top: 34px;
		padding-bottom: 34px;
		padding-right: 145px;
		border-radius: 30px;
		background: ${(props) =>
			props.dark ? environmentDark : environmentLight};
		border: 8px double #3a3737;
		overflow: hidden;
		height: 100vh;
		box-shadow: #0000004f 0px 0px 11px 6px;

		.hardButton {
			width: 10px;
			height: var(--hbutton-height);
			border-radius: 20px;
			background: #414449;
			position: absolute;
			right: 35px;
			top: 50vh;
			border-left: 3px solid black;
			border-right: 4px ridge #888;
			border-top: 1px solid black;
			border-bottom: 1px solid black;
		}

		.hardButton-up {
			transform: translateY(calc(-1 * var(--hbutton-height) - var(--hbutton-padding)));

		}

		.hardButton-down {
			transform: translateY(var(--hbutton-padding));
		}

		.shadowTop::after {
			content: "";
			position: absolute;
			z-index: 3;
			right: 1px;
			left: 1px;
			height: var(--border-shadow-width);
			display: inline;
			background: linear-gradient(
				180deg,
				rgba(0, 0, 0, 0.5) 0%,
				rgba(0, 212, 255, 0) 100%
			);
		}

		.shadowBottom::after {
			content: "";
			position: absolute;
			z-index: 3;
			right: 1px;
			left: 1px;
			bottom: 0px;
			transform: rotate(180deg);
			height: var(--border-shadow-width);
			display: inline;
			background: linear-gradient(
				180deg,
				rgba(0, 0, 0, 0.5) 0%,
				rgba(0, 212, 255, 0) 100%
			);
		}

		.screen::before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			background: linear-gradient(
				90deg,
				rgba(0, 0, 0, 0.5) 0%,
				rgba(0, 212, 255, 0) 100%
			);
			width: var(--border-shadow-width);
			transform: translate(0px, 0px);
			z-index: 3;
		}

		.screen {
			background-color: var(--bg-color);
			padding: 0 2px;
			position: relative;
			height: 100%;
		}

		.screen::after {
			content: "";
			position: absolute;
			top: 0;
			right: 0;
			height: 100%;
			background: linear-gradient(
				90deg,
				rgba(0, 0, 0, 0) 0%,
				rgba(0, 0, 0, 0.5) 100%
			);
			width: var(--border-shadow-width);
			transform: translate(0px, 0px);
			height: 100%;
			z-index: 3;
		}

		.content {
			overflow-y: scroll;
			overflow-x: hidden;
			height: 100%;
			background: var(--bg-color);
		}

		.content::-webkit-scrollbar {
			display: none;
		}
	}
`;

export interface IContainer {
	children: JSX.Element | JSX.Element[];
	dark?: boolean;
}

const Container: React.FC<IContainer> = ({ children, dark }) => {
	return (
		<StyledContainer dark={dark}>
			<div className="hardButton hardButton-up"></div>
			<div className="hardButton hardButton-down"></div>
			<div className="screen">
				<div className="shadowTop"></div>
				<div className="content">
					<div>{children}</div>
				</div>
				<div className="shadowBottom"></div>
			</div>
		</StyledContainer>
	);
};

export default Container;
