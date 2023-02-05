module.exports = function getBabelConfig(api) {
	const useESModules = api.env(["legacy", "modern", "stable", "rollup"]);

	const presets = [
		[
			"@babel/preset-env",
			{
				browserslistEnv: process.env.BABEL_ENV || process.env.NODE_ENV,
				modules: useESModules ? false : "commonjs",
			},
		],
		[
			"@babel/preset-react",
			{
				runtime: "automatic",
			},
		],
		"@babel/preset-typescript",
	];

	const plugins = [];

	return {
		assumptions: {
			noDocumentAll: true,
		},
		presets,
		plugins,
		ignore: [/@babel[\\|/]runtime/], // Fix a Windows issue.
		overrides: [
			{
				exclude: /\.test\.(js|ts|tsx)$/,
				plugins: ["@babel/plugin-transform-react-constant-elements"],
			},
		],
	};
};
