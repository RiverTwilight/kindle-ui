import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import reactSvg from "rollup-plugin-react-svg";
import pkg from "./package.json";
import typescript from 'rollup-plugin-typescript2';

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
        reactSvg({
            // svgo options
            svgo: {
                plugins: [], // passed to svgo
                multipass: true,
            },

            // whether to output jsx
            jsx: true,

            // include: string
            include: null,

            // exclude: string
            exclude: null,
        }),
        del({ targets: ["dist/*"] }),
    ],
    external: [...Object.keys(pkg.peerDependencies || {}), "styled-components"],
};
