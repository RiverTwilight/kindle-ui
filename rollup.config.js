import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import pkg from "./package.json";
import typescript from "rollup-plugin-typescript2";
import svgr from "@svgr/rollup";
import url from 'rollup-plugin-url'

export default {
	input: pkg.source,
	output: [
		{ file: pkg.main, format: "cjs" },
		{ file: pkg.module, format: "esm" },
	],
	plugins: [
		external(),
		babel({
			exclude: "node_modules/**",
		}),
		typescript(),
		svgr(),
		url({
			// by default, rollup-plugin-url will not handle font files
			include: ["**/*.woff", "**/*.woff2", "**/*.ttf"],
			// setting infinite limit will ensure that the files
			// are always bundled with the code, not copied to /dist
			limit: Infinity,
		}),
		del({ targets: ["dist/*"] }),
	],
	external: [...Object.keys(pkg.peerDependencies || {}), "styled-components"],
};
