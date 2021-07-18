import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import pkg from "./package.json";
import typescript from 'rollup-plugin-typescript2';
import svgr from "@svgr/rollup"

export default {
    input: pkg.source,
    output: [
        { file: pkg.main, format: "cjs" },
        { file: pkg.module, format: "esm" },
    ],
    plugins: [
        external(
            
        ),
        babel({
            exclude: "node_modules/**",
        }),
        typescript(),
        svgr(),
        del({ targets: ["dist/*"] }),
    ],
    external: [...Object.keys(pkg.peerDependencies || {}), "styled-components"],
};
