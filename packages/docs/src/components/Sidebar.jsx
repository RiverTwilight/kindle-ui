import { Card, Typography,Button } from "@kindle-ui/core";
import React, { useState } from "react";

const Sidebar = () => {
	const [collapsed, setCollapsed] = useState(true);

	const toggleCollapse = () => {
		setCollapsed(!collapsed);
	};

	return (
		<aside>
			<div className={`category ${collapsed ? "collapsed" : ""}`}>
				<Card>
					<Typography variant="h5" fontWeight="bold">
						目录
					</Typography>
					<ul>
						<li>
							<Typography>
								<a href="#typography">Typography</a>
							</Typography>
						</li>
						<li>
							<Typography>
								<a href="#button">Button</a>
							</Typography>
						</li>
						<li>
							<Typography>
								<a href="#list">List</a>
							</Typography>
						</li>
						<li>
							<Typography>
								<a href="#tab">Tab</a>
							</Typography>
						</li>
						<li>
							<Typography>
								<a href="#card">Card</a>
							</Typography>
						</li>
						<li>
							<Typography>
								<a href="#dialog">Dialog</a>
							</Typography>
						</li>
						<li>
							<Typography>
								<a href="#grid">Grid</a>
							</Typography>
						</li>
						<li>
							<Typography>
								<a href="#switch">Switch</a>
							</Typography>
						</li>
						<li>
							<Typography>
								<a href="#textfield">TextField</a>
							</Typography>
						</li>
					</ul>
					<Button onClick={toggleCollapse}>
						{collapsed ? "展开" : "收起"}
					</Button>
				</Card>
			</div>
		</aside>
	);
};

export default Sidebar;
