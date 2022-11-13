import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import pkg from "./package.json";
import typescript from "rollup-plugin-typescript2";
import svgr from "@svgr/rollup";

const plugins = [
		external(),
		babel({
			exclude: "node_modules/**",
		}),
		typescript({
			check: false,
		}),
		svgr(),
		del({ targets: ["dist/*"] }),
		// uglify()
	],
	externals = [
		...Object.keys(pkg.peerDependencies || {}),
		"styled-components",
	];

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
