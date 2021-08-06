import styled from "styled-components";
// @ts-expect-error
import AmazonEmber from "../../fonts/AmazonEmber/AmazonEmber_Rg.ttf";

export default styled.div`
	@font-face {
		font-family: AmazonEmber-Rg;
		src: url(${AmazonEmber});
	}
	font-family: "AmazonEmber-Rg", Trebuchet MS;
	${(props: { dark?: boolean }) =>
		props.dark
			? `--text-color: #fff;
			color: #fff;
			background-color: #000;
			--bg-color: #000;
			& svg{
				fill: #fff
			}
	`
			: `--text-color: #000;
			color: #000;
			background-color: #fff;
	--bg-color: #fff;`}
`;

export interface IContainer {
	children: JSX.Element | JSX.Element[];
	dark?: boolean;
}
