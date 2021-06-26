import styled from 'styled-componenets';

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
var Navbar = styled.nav(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tdisplay: flex;\n    borderBottom\n"])));
var StatuBar = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\tdisplay: flex;\n"])));
styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\tdisplay: flex;\n"])));
var index$1 = (function () {
  return /*#__PURE__*/React.createElement(Navbar, null, /*#__PURE__*/React.createElement(StatuBar, null, "My Kindle"));
});

var index = (function () {
  return /*#__PURE__*/React.createElement("p", null, "asdf");
});

export { index as List, index$1 as Navbar };
