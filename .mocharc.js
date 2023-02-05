module.exports = {
	extension: ["js", "mjs", "ts", "tsx"],
	ignore: ["**/build/**", "**/node_modules/**"],
	recursive: true,
	timeout: (process.env.CIRCLECI === "true" ? 5 : 2) * 1000, // Circle CI has low-performance CPUs.
	reporter: "dot",
	require: [
		require.resolve("./test/utils/setupBabel"),
	],
	"watch-ignore": [
		".git",
		"**/node_modules/**",
		"**/build/**",
		"docs/.next/**",
	],
	beforeEach: () => {
		createDOM();
	},
};
