import React from "react";
import styled from "styled-components";

export interface ISectionTitle {
	label: string;
}

const SectionTitle = ({ label }: ISectionTitle) => {
	return (
		<StyledSectionTitle>
			<div className="text">{label.toUpperCase()}</div>
			<div className="icon">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24"
					viewBox="0 -960 960 960"
					width="24"
				>
					<path d="M530-481 332-679l43-43 241 241-241 241-43-43 198-198Z" />
				</svg>
			</div>
		</StyledSectionTitle>
	);
};

const StyledSectionTitle = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	padding: 10px 0;
	font-size: 1.1rem;

	& .text {
		text-decoration: none;
		color: var(--text-color);
	}

	& .icon {
		display: flex;
		flex-direction: column;
		justifiy-content: center;
	}

	& svg {
		fill: var(--text-color);
		stroke: var(--text-color);
	}
`;

export default SectionTitle;
