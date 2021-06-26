'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-componenets');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var _templateObject, _templateObject2, _templateObject3;
var Navbar = styled__default['default'].nav(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tdisplay: flex;\n    borderBottom\n"])));
var StatuBar = styled__default['default'].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\tdisplay: flex;\n"])));
styled__default['default'].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\tdisplay: flex;\n"])));
var index$1 = (function () {
  return /*#__PURE__*/React.createElement(Navbar, null, /*#__PURE__*/React.createElement(StatuBar, null, "My Kindle"));
});

var index = (function () {
  return /*#__PURE__*/React.createElement("p", null, "asdf");
});

exports.List = index;
exports.Navbar = index$1;
