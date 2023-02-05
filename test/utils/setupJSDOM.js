const testingLibrary = require("@testing-library/dom");
const createDOM = require("./createDOM");

// Enable missing act warnings: https://github.com/reactwg/react-18/discussions/102
global.jest = null;
global.IS_REACT_ACT_ENVIRONMENT = true;

createDOM();
// require("./init");

testingLibrary.configure({
	// JSDOM logs errors otherwise on `getComputedStyle(element, pseudoElement)` calls.
	computedStyleSupportsPseudoElements: false,
});

