import styled from "styled-components";

/**
 * Card Content
 */

export interface CardContentProps {
	children: JSX.Element | JSX.Element[];
}

export default styled.div`
	display: flex;
	row-gap: 8px;
	font-family: AmazonEmber-Rg, sans-serif;
`;
