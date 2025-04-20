import type { Metadata } from "next";

import "kindle-fonts/bookerly.css";
import "kindle-fonts/amazon-ember.css";

import "./global.css";

export const metadata: Metadata = {
	title: "Kindle UI Docs",
	description: "Kindle UI Docs",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<title>Kindle Webwhite 1</title>
			</head>
			<body>
				<noscript>
					You need to enable JavaScript to run this app.
				</noscript>
				<div id="root">{children}</div>
			</body>
		</html>
	);
}
