import styled from 'styled-components';
import React$1 from 'react';
export { default as React } from 'react';

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

var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var Navbar = styled.nav(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tborder-bottom: 1px solid #000;\n"])));
var StatuBar = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tborder-bottom: 1px solid #000;\n\tpadding: 3px 18px;\n\theight: 19px;\n"])));
var ActionBar = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\theight: 50px;\n"])));
var Action = styled.button(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n\tborder: none;\n\tborder-right: 1px solid #000;\n\tbackground-color: #fff;\n\twidth: 50px;\n\ttransition: background-color 0.5s;\n\t&:hover {\n\t\tbackground-color: #000;\n\t}\n"])));
var index$1 = (function (_ref) {
  var _ref$deviceName = _ref.deviceName,
      deviceName = _ref$deviceName === void 0 ? "My Kindle" : _ref$deviceName;
  return /*#__PURE__*/React$1.createElement(Navbar, null, /*#__PURE__*/React$1.createElement(StatuBar, null, deviceName), /*#__PURE__*/React$1.createElement(ActionBar, null, /*#__PURE__*/React$1.createElement(Action, null), /*#__PURE__*/React$1.createElement(Action, null), /*#__PURE__*/React$1.createElement(Action, null)));
});

var index = (function () {
  return /*#__PURE__*/React.createElement("p", null, "asdf");
});

export { index as List, index$1 as Navbar };
