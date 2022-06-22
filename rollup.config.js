import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import pkg from "./package.json";
import typescript from "rollup-plugin-typescript2";
import svgr from "@svgr/rollup";
import url from "rollup-plugin-url";
// import { uglify } from "rollup-plugin-uglify";
// import fs from "fs";

const plugins = [
		external(),
		babel({
			exclude: "node_modules/**",
		}),
		typescript({
			check: false,
		}),
		svgr(),
		url({
			// by default, rollup-plugin-url will not handle font files
			include: ["**/*.woff", "**/*.woff2", "**/*.ttf"],
			// setting infinite limit will ensure that the files
			// are always bundled with the code, not copied to /dist
			limit: Infinity,
		}),
		del({ targets: ["dist/*"] }),
		// uglify()
	],
	externals = [
		...Object.keys(pkg.peerDependencies || {}),
		"styled-components",
	];

// var splitBundles = [];

// fs.readdirSync("./src/components").forEach((file) => {
// 	splitBundles.push({
// 		input: "src/components/" + file + "/index.tsx",
// 		output: [
// 			{ file: `dist/${file}/index.cjs.js`, format: "cjs" },
// 			{ file: `dist/${file}/index.esm.js`, format: "esm" },
// 		],
// 		plugins,
// 		external: externals,
// 	});
// });

// console.log(splitBundles);

export default [
	{
		input: pkg.source,
		output: [
			{ file: pkg.main, format: "cjs" },
			{ file: pkg.module, format: "esm" },
		],
		plugins,
		external: externals,
	},
	// ...splitBundles,
];
