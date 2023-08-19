import * as React from "react";
import { expect } from "chai";
import renderer from "react-test-renderer";
import { ListItem, Container } from "@kindle-ui/core";

describe("<ListItem />", () => {
	describe("prop: component", () => {
		it("renders a div", () => {
			const component = renderer.create(<ListItem />);
			expect(component.toTree().rendered).to.have.property("type", "div");
		});

		it("renders a link", () => {
			const component = renderer.create(
				<ListItem component="a" href="#" />
			);
			expect(component.toTree().rendered).to.have.property("type", "a");
		});
	});
});

// describe("general rendering", async () => {
// 	it("render in Container", async () => {
// 		console.log(document);

// 		render(<ListItem>KindleUI</ListItem>);

// 		console.log(within(document.body, { ...queries }).getByRole("ListItem"))

// 		expect(
// 			within(document.body, { ...queries })
// 				.getByRole("ListItem")
// 				.toHaveTextContent("KindleUI")
// 		).to.be(true);
// 	});
// });
