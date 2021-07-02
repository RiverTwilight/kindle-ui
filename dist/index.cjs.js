'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');
var React$1 = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React$1);

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var Airplane = (({
  styles = {},
  ...props
}) => /*#__PURE__*/React__default['default'].createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  className: styles["ionicon"] || "ionicon",
  viewBox: "0 0 512 512"
}, props), /*#__PURE__*/React__default['default'].createElement("path", {
  d: "M186.62 464H160a16 16 0 01-14.57-22.6l64.46-142.25L113.1 297l-35.3 42.77C71.07 348.23 65.7 352 52 352H34.08a17.66 17.66 0 01-14.7-7.06c-2.38-3.21-4.72-8.65-2.44-16.41l19.82-71c.15-.53.33-1.06.53-1.58a.38.38 0 000-.15 14.82 14.82 0 01-.53-1.59l-19.84-71.45c-2.15-7.61.2-12.93 2.56-16.06a16.83 16.83 0 0113.6-6.7H52c10.23 0 20.16 4.59 26 12l34.57 42.05 97.32-1.44-64.44-142A16 16 0 01160 48h26.91a25 25 0 0119.35 9.8l125.05 152 57.77-1.52c4.23-.23 15.95-.31 18.66-.31C463 208 496 225.94 496 256c0 9.46-3.78 27-29.07 38.16-14.93 6.6-34.85 9.94-59.21 9.94-2.68 0-14.37-.08-18.66-.31l-57.76-1.54-125.36 152a25 25 0 01-19.32 9.75z"
})));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
var BORDER_COLOR = "#282424";
var Navbar = styled__default['default'].nav(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    border-bottom: 1px solid ", ";\n"])), BORDER_COLOR);
var Action = styled__default['default'].button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    border: none;\n    background-color: #fff;\n    width: 50px;\n    transition: background-color 0.5s;\n    svg{\n        width: 23px\n    }\n    &:hover {\n        background-color: #000;\n        svg {\n            stroke: #fff;\n        }\n    }\n"])));
var StyledAirplane = styled__default['default'](Airplane)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    width: 18px;\n"])));

var StatuBar = function StatuBar(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: className
  }, children);
};

var ActionBar = function ActionBar(_ref2) {
  var className = _ref2.className,
      children = _ref2.children;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: className
  }, children);
};

var StyledStatuBar = styled__default['default'](StatuBar)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 1px solid #000;\n    padding: 3px 18px;\n    height: 19px;\n    .statu-item {\n        margin-left: 10px;\n    };\n    .time {\n        transform: scaleY(-50%)\n    }\n"])));
var StyledActionBar = styled__default['default'](ActionBar)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    display: flex;\n    height: 50px;\n"])));
/**
 * Navbar组件
 * @author rivertwilight
 * @param {string} deviceName 设备名称
 */

var index$1 = (function (_ref3) {
  var _ref3$deviceName = _ref3.deviceName,
      deviceName = _ref3$deviceName === void 0 ? "My Kindle" : _ref3$deviceName;
  return /*#__PURE__*/React__default['default'].createElement(Navbar, null, /*#__PURE__*/React__default['default'].createElement(StyledStatuBar, null, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "statu-item"
  }, deviceName), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "statu-item"
  }, /*#__PURE__*/React__default['default'].createElement(StyledAirplane, null), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "time"
  }, "15:00 AM"))), /*#__PURE__*/React__default['default'].createElement(StyledActionBar, null, /*#__PURE__*/React__default['default'].createElement(Action, null, /*#__PURE__*/React__default['default'].createElement(Airplane, null), "Home"), /*#__PURE__*/React__default['default'].createElement(Action, null, /*#__PURE__*/React__default['default'].createElement(Airplane, null), "Home"), /*#__PURE__*/React__default['default'].createElement(Action, null, /*#__PURE__*/React__default['default'].createElement(Airplane, null), "Home")));
});

var index = (function () {
  return /*#__PURE__*/React.createElement("p", null, "asdf");
});

exports.List = index;
exports.Navbar = index$1;
