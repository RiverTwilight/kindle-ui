import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import border from "@/utils/border";
import SearchOutlinIcon from "../../icons/search-outline.svg";

interface ISearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	disable?: boolean;
}

const SearchBar = ({ className, disable, ...rest }: ISearchBarProps) => {
	return (
		<div className={className}>
			<SearchOutlinIcon />
			<input placeholder="Search" disabled={disable} {...rest}></input>
		</div>
	);
};

export default styled(SearchBar)`
	display: flex;
	align-items: center;
	margin: 0 1px;
	& > svg {
		height: 36px;
		transform: translate(51%, 0px);
		display: inline;
		position: absolute; /*脱离标准流不占空间*/
	}
	& input {
		height: 100%;
		width: 150px;
		border-top: none;
		border-right: ${border};
		border-left: ${border};
		border-bottom: none;
		padding: 5px 10px;
		box-sizing: border-box;
		text-align: center;
		background-color: transparent;
		-webkit-border-radius: 0; /* disable default border-radius on Safari */
	}
`;
