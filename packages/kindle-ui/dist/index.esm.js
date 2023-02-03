import styled, { css } from 'styled-components';
import * as React from 'react';
import React__default, { useRef, useState, useEffect } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var index$k = styled.div(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n\tdisplay: flex;\n\theight: 54px;\n\tpadding: 0;\n"], ["\n\tdisplay: flex;\n\theight: 54px;\n\tpadding: 0;\n"])));
var templateObject_1$x;

var hover = css(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n\ttransition: background-color 0.5s;\n\n\t&:hover {\n\t\tbackground-color: var(--text-color);\n\t\tcolor: var(--bg-color) !important;\n\t\ta {\n\t\t\tcolor: var(--bg-color) !important;\n\t\t}\n\t\tsvg path,\n\t\tcircle {\n\t\t\ttransition: stroke 0.5s;\n\t\t\tstroke: var(--bg-color);\n\t\t\tfill: var(--bg-color);\n\t\t}\n\t}\n"], ["\n\ttransition: background-color 0.5s;\n\n\t&:hover {\n\t\tbackground-color: var(--text-color);\n\t\tcolor: var(--bg-color) !important;\n\t\ta {\n\t\t\tcolor: var(--bg-color) !important;\n\t\t}\n\t\tsvg path,\n\t\tcircle {\n\t\t\ttransition: stroke 0.5s;\n\t\t\tstroke: var(--bg-color);\n\t\t\tfill: var(--bg-color);\n\t\t}\n\t}\n"])));
var templateObject_1$w;

var StyledActionItem = styled.button(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n\tborder: none;\n\tbox-sizing: border-box;\n\twidth: 50px;\n\tbackground-color: var(--bg-color);\n\tcolor: var(--text-color);\n\n\tdisplay: inline-flex;\n\talign-items: center;\n\talign-content: center;\n\tjustify-content: center;\n\tplace-content: center;\n\taspect-ratio: 1;\n\tpadding: 2ch;\n\n\t@media (min-width: 460px) {\n\t\tmargin-left: 10px;\n\t}\n\tsvg {\n\t\twidth: 23px;\n\t}\n\tsvg path {\n\t\tstroke: var(--text-color);\n\t\t/* DO NOT ADD THIS: fill: var(--text-color);*/\n\t}\n\ttext-transform: lowercase;\n\t", "\n"], ["\n\tborder: none;\n\tbox-sizing: border-box;\n\twidth: 50px;\n\tbackground-color: var(--bg-color);\n\tcolor: var(--text-color);\n\n\tdisplay: inline-flex;\n\talign-items: center;\n\talign-content: center;\n\tjustify-content: center;\n\tplace-content: center;\n\taspect-ratio: 1;\n\tpadding: 2ch;\n\n\t@media (min-width: 460px) {\n\t\tmargin-left: 10px;\n\t}\n\tsvg {\n\t\twidth: 23px;\n\t}\n\tsvg path {\n\t\tstroke: var(--text-color);\n\t\t/* DO NOT ADD THIS: fill: var(--text-color);*/\n\t}\n\ttext-transform: lowercase;\n\t", "\n"])), hover);
function ActionItem(props) {
    return (React.createElement(StyledActionItem, __assign({}, props),
        React.createElement("div", null, props.children)));
}
var templateObject_1$v;

var index$j = styled.div(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n\tdisplay: flex;\n\tbox-sizing: border-box;\n"], ["\n\tdisplay: flex;\n\tbox-sizing: border-box;\n"])));
var templateObject_1$u;

/**
 * MenuItem
 * @author rivertwilight
 * @description Use together with Menu
 */
var MenuItem = function (_a) {
    var _b = _a.component, component = _b === void 0 ? "div" : _b, className = _a.className, textPrimary = _a.textPrimary, props = __rest(_a, ["component", "className", "textPrimary"]);
    var Comp = component;
    return (React__default.createElement(Comp, __assign({ className: className }, props), textPrimary));
};
var MenuItem$1 = styled(MenuItem)(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n\tdisplay: block;\n\theight: 60px;\n\tpadding-left: 20px;\n\tline-height: 60px;\n\tfont-size: 1.1rem;\n\t", "\n\ttext-decoration: none;\n\tcolor: var(--text-color);\n"], ["\n\tdisplay: block;\n\theight: 60px;\n\tpadding-left: 20px;\n\tline-height: 60px;\n\tfont-size: 1.1rem;\n\t", "\n\ttext-decoration: none;\n\tcolor: var(--text-color);\n"])), hover);
var templateObject_1$t;

var Mask = styled.div(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tbottom: 0;\n\tright: 0;\n\tdisplay: ", ";\n"], ["\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tbottom: 0;\n\tright: 0;\n\tdisplay: ", ";\n"])), function (props) { return (props.show ? "block" : "none"); });
var StyledPopover = styled.div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n\tz-index: 2;\n\theight: 100%;\n"], ["\n\tz-index: 2;\n\theight: 100%;\n"])));
/**
 * Popover
 * @author rivertwilight
 */
var Popover = (function (_a) {
    var children = _a.children, open = _a.open, onClose = _a.onClose;
    var mask = useRef();
    var handleMouseDown = function (event) {
        console.log("Click content");
        // We don't want to close the dialog when clicking the dialog content.
        // Make sure the event starts and ends on the same DOM element.
        mask.current = event.target === event.currentTarget;
    };
    // const handleMouseUp = (event) => {
    // 	mask = false;
    // };
    var handleClickMask = function (event) {
        if (!mask.current)
            return;
        console.log("Clicked mask");
        mask.current = null;
        onClose && onClose();
    };
    //add props to children
    var childrenWithProps = React__default.Children.map(children, function (child) {
        return React__default.cloneElement(child, {
        // onMouseDown: handleMouseDown,
        // onMouseUp: handleMouseUp,
        });
    });
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(Mask, { onClick: handleClickMask, show: open, ref: mask },
            React__default.createElement(StyledPopover, { onMouseDown: handleMouseDown }, childrenWithProps))));
});
var templateObject_1$s, templateObject_2$3;

/**
 * Menu
 * @author rivertwilight
 */
var WIDTH_PX = 230;
var Menu = function (_a) {
    var children = _a.children, className = _a.className;
    return (React__default.createElement("div", { className: className }, children));
};
var StyledMenu = styled(Menu)(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n\tdisplay: ", ";\n\tbox-sizing: border-box;\n\tmin-width: ", "px;\n\tborder: 1px solid var(--border-color);\n\tbackground: var(--bg-color);\n\tposition: fixed;\n\ttop: ", "px;\n\tleft: ", "px;\n"], ["\n\tdisplay: ", ";\n\tbox-sizing: border-box;\n\tmin-width: ", "px;\n\tborder: 1px solid var(--border-color);\n\tbackground: var(--bg-color);\n\tposition: fixed;\n\ttop: ", "px;\n\tleft: ", "px;\n"])), function (props) { return (props.open ? "block" : "none"); }, WIDTH_PX, function (props) { return props.top; }, function (props) { return props.left; });
var Menu$1 = (function (_a) {
    var children = _a.children, anchorEl = _a.anchorEl, open = _a.open, onClose = _a.onClose;
    var _b = useState(0), top = _b[0], setTop = _b[1];
    var _c = useState(0), left = _c[0], setLeft = _c[1];
    useEffect(function () {
        var viewportOffset = anchorEl
            ? // @ts-expect-error
                anchorEl.getBoundingClientRect()
            : { top: 0, left: 0 };
        // these are relative to the viewport, i.e. the window
        var top = viewportOffset.bottom;
        var left = viewportOffset.left;
        if (left > window.innerWidth - WIDTH_PX)
            left = window.innerWidth - WIDTH_PX;
        setTop(top);
        setLeft(left);
    }, [anchorEl]);
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(Popover, { open: open, onClose: onClose },
            React__default.createElement(StyledMenu, { open: open, top: top, left: left }, children))));
});
var templateObject_1$r;

var _circle, _circle2, _circle3;
function _extends$c() { _extends$c = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$c.apply(this, arguments); }
function SvgEllipsisVertical(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$c({
    xmlns: "http://www.w3.org/2000/svg",
    className: "ellipsis-vertical_svg__ionicon",
    viewBox: "0 0 512 512"
  }, props), _circle || (_circle = /*#__PURE__*/React.createElement("circle", {
    cx: 256,
    cy: 256,
    r: 48
  })), _circle2 || (_circle2 = /*#__PURE__*/React.createElement("circle", {
    cx: 256,
    cy: 416,
    r: 48
  })), _circle3 || (_circle3 = /*#__PURE__*/React.createElement("circle", {
    cx: 256,
    cy: 96,
    r: 48
  })));
}

// FIXME 每次打开左上角闪现
var index$i = (function (_a) {
    var items = _a.items;
    var _b = useState(null), anchorEl = _b[0], setAnchorEl = _b[1];
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(ActionItem, { style: { marginLeft: 0 }, onClick: handleClick },
            React__default.createElement(SvgEllipsisVertical, null)),
        React__default.createElement(Menu$1, { open: Boolean(anchorEl), onClose: handleClose, anchorEl: anchorEl }, items &&
            items.map(function (item, i) { return (React__default.createElement(MenuItem$1, __assign({ key: i + item.textPrimary }, item))); }))));
});

var index$h = styled.div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n\tflex: 2 4 auto;\n\twidth: 10px;\n"], ["\n\tflex: 2 4 auto;\n\twidth: 10px;\n"])));
var templateObject_1$q;

var index$g = (function (_a) {
    var children = _a.children, className = _a.className, _b = _a.variant, variant = _b === void 0 ? "default" : _b, _c = _a.component, component = _c === void 0 ? "button" : _c, _d = _a.LinkComponent, LinkComponent = _d === void 0 ? "a" : _d, disabled = _a.disabled, type = _a.type, other = __rest(_a, ["children", "className", "variant", "component", "LinkComponent", "disabled", "type"]);
    var ComponentProp = component;
    if (ComponentProp === "button" && (other.href || other.to)) {
        ComponentProp = LinkComponent;
    }
    var buttonProps = {};
    if (ComponentProp === "button") {
        buttonProps.type = type === undefined ? "button" : type;
        buttonProps.disabled = disabled;
    }
    else {
        if (!other.href && !other.to) {
            buttonProps.role = "button";
        }
        if (disabled) {
            buttonProps["aria-disabled"] = disabled;
        }
    }
    return (React__default.createElement(StyledButton, __assign({ as: ComponentProp, className: className, variant: variant }, buttonProps, other), children));
});
var StyledButton = styled.div(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n\tboxsizing: border-box;\n\tborder: ", ";\n\tmin-width: 70px;\n\theight: 50px;\n\toutline: 0;\n\tbackground: var(--bg-color);\n\n\tfont-weight: 600;\n\tfont-size: 1rem;\n\tcolor: var(--text-color);\n\ttext-decoration: none;\n\tfont-family: \"Amazon Ember\";\n\ttextdecoration: none;\n\ttext-transform: uppercase;\n\n\tdisplay: inline-flex;\n\talign-items: center;\n\tjustifycontent: center;\n\tposition: relative;\n\tboxsizing: border-box;\n\n\tpadding: 0 30px;\n\toverflow: hidden;\n\t", "\n\tcursor: pointer;\n\tuserselect: none;\n\tverticalalign: middle;\n\tmozappearance: none;\n\twebkitappearance: none;\n"], ["\n\tboxsizing: border-box;\n\tborder: ", ";\n\tmin-width: 70px;\n\theight: 50px;\n\toutline: 0;\n\tbackground: var(--bg-color);\n\n\tfont-weight: 600;\n\tfont-size: 1rem;\n\tcolor: var(--text-color);\n\ttext-decoration: none;\n\tfont-family: \"Amazon Ember\";\n\ttextdecoration: none;\n\ttext-transform: uppercase;\n\n\tdisplay: inline-flex;\n\talign-items: center;\n\tjustifycontent: center;\n\tposition: relative;\n\tboxsizing: border-box;\n\n\tpadding: 0 30px;\n\toverflow: hidden;\n\t", "\n\tcursor: pointer;\n\tuserselect: none;\n\tverticalalign: middle;\n\tmozappearance: none;\n\twebkitappearance: none;\n"])), function (props) {
    return props.variant === "outline" ? "3px solid var(--text-color)" : "none";
}, hover);
var templateObject_1$p;

var border = css(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n\t1px solid #c1b2b2\n"], ["\n\t1px solid #c1b2b2\n"])));
var templateObject_1$o;

// TODO rich content
var index$f = styled.div(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n\tborder: ", ";\n\tborder-radius: 7px;\n\tpadding: 10px;\n"], ["\n\tborder: ", ";\n\tborder-radius: 7px;\n\tpadding: 10px;\n"])), border);
var templateObject_1$n;

var greyImage$1 = css(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n\t-webkit-filter: grayscale(100%);\n\t-moz-filter: grayscale(100%);\n\t-ms-filter: grayscale(100%);\n\t-o-filter: grayscale(100%);\n\tfilter: grayscale(100%);\n\tfilter: gray;\n"], ["\n\t-webkit-filter: grayscale(100%);\n\t-moz-filter: grayscale(100%);\n\t-ms-filter: grayscale(100%);\n\t-o-filter: grayscale(100%);\n\tfilter: grayscale(100%);\n\tfilter: gray;\n"])));
var templateObject_1$m;

var index$e = styled.div(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n\tflex: 0 0 33.33333333%;\n\tmax-height: 200px;\n\tmargin-right: 16px;\n\timg {\n\t\t", "\n\t\tobject-fit: cover;\n\t\theight: 100%;\n\t\twidth: 100%;\n\t\tborder-radius: 3px;\n\t}\n"], ["\n\tflex: 0 0 33.33333333%;\n\tmax-height: 200px;\n\tmargin-right: 16px;\n\timg {\n\t\t", "\n\t\tobject-fit: cover;\n\t\theight: 100%;\n\t\twidth: 100%;\n\t\tborder-radius: 3px;\n\t}\n"])), greyImage$1);
var templateObject_1$l;

var index$d = styled.div(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n\tdisplay: flex;\n\trow-gap: 8px;\n\tfont-family: AmazonEmber-Rg, sans-serif;\n"], ["\n\tdisplay: flex;\n\trow-gap: 8px;\n\tfont-family: AmazonEmber-Rg, sans-serif;\n"])));
var templateObject_1$k;

var index$c = styled.div(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n\tfont-size: 1.5rem;\n\tfont-weight: 500;\n\tmargin-bottom: 10px;\n"], ["\n\tfont-size: 1.5rem;\n\tfont-weight: 500;\n\tmargin-bottom: 10px;\n"])));
var templateObject_1$j;

/**
 * Card Content
 * // FIXME Button Layout Problem
 */
var index$b = styled.div(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n\tpadding: 10px 10px 0 10px;\n\tdisplay: flex;\n\tflex-direction: row-reverse;\n"], ["\n\tpadding: 10px 10px 0 10px;\n\tdisplay: flex;\n\tflex-direction: row-reverse;\n"])));
var templateObject_1$i;

var StyledContainer$1 = styled.div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n\tmargin: 0;\n\tfont-family: \"Amazon Ember\", \"Bookerly\";\n\n\t--text-color-secondary: #9d9797;\n\t", ";\n"], ["\n\tmargin: 0;\n\tfont-family: \"Amazon Ember\", \"Bookerly\";\n\n\t--text-color-secondary: #9d9797;\n\t", ";\n"])), function (props) {
    return props.dark
        ? "--text-color: #fff;\n\t\t\t\tcolor: #fff;\n\t\t\t\t--bg-color: #000;\n\t\t\t\t& svg{\n\t\t\t\t\tfill: #fff\n\t\t\t\t}"
        : "--text-color: #000;\n\t\t\t\tcolor: #000;\n\t\t\t   --bg-color: #f7f7f7;\n\t\t";
});
var Container$1 = function (_a) {
    var children = _a.children, deviceFrame = _a.deviceFrame, dark = _a.dark;
    if (deviceFrame) {
        var DeviceFrame = deviceFrame;
        return (React__default.createElement(StyledContainer$1, { dark: dark },
            React__default.createElement(DeviceFrame, { dark: dark }, children)));
    }
    return React__default.createElement(StyledContainer$1, { dark: dark }, children);
};
var templateObject_1$h;

var StyledDialog = styled.div(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n\tpadding: 10px;\n\tborder: 3px solid var(--text-color);\n\tbackground: var(--bg-color);\n\tborder-radius: 6px;\n\tposition: fixed;\n\tleft: 50%;\n\ttop: 50%;\n\ttransform: translate(-50%, -50%);\n\tmax-width: 400px;\n\tmin-width: 250px;\n"], ["\n\tpadding: 10px;\n\tborder: 3px solid var(--text-color);\n\tbackground: var(--bg-color);\n\tborder-radius: 6px;\n\tposition: fixed;\n\tleft: 50%;\n\ttop: 50%;\n\ttransform: translate(-50%, -50%);\n\tmax-width: 400px;\n\tmin-width: 250px;\n"])));
var index$a = (function (_a) {
    var children = _a.children; _a.anchorEl; var open = _a.open, onClose = _a.onClose;
    return (React__default.createElement(Popover, { open: open, onClose: onClose },
        React__default.createElement(StyledDialog, null, children)));
});
var templateObject_1$g;

var index$9 = styled.div(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: row-reverse;\n"], ["\n\tdisplay: flex;\n\tflex-direction: row-reverse;\n"])));
var templateObject_1$f;

var index$8 = styled.div(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n\tpadding: 10px\n"], ["\n\tpadding: 10px\n"])));
var templateObject_1$e;

var StyledGrid = styled.div(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\n\t@media (max-width: 768px) {\n\t\tflex-flow: row wrap;\n\t}\n\n\t@media (min-width: 768px) {\n\t\trow-gap: 16px;\n\t\tflex-direction: row;\n\t\tflex-flow: row wrap;\n\t}\n"], ["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\n\t@media (max-width: 768px) {\n\t\tflex-flow: row wrap;\n\t}\n\n\t@media (min-width: 768px) {\n\t\trow-gap: 16px;\n\t\tflex-direction: row;\n\t\tflex-flow: row wrap;\n\t}\n"])));
function Grid(_a) {
    var children = _a.children;
    var cldLength = React.Children.count(children);
    return React.createElement(StyledGrid, { cldLength: cldLength }, children);
}
var templateObject_1$d;

var greyImage = css(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n\t-webkit-filter: grayscale(100%);\n\t-moz-filter: grayscale(100%);\n\t-ms-filter: grayscale(100%);\n\t-o-filter: grayscale(100%);\n\tfilter: grayscale(100%);\n\tfilter: gray;\n"], ["\n\t-webkit-filter: grayscale(100%);\n\t-moz-filter: grayscale(100%);\n\t-ms-filter: grayscale(100%);\n\t-o-filter: grayscale(100%);\n\tfilter: grayscale(100%);\n\tfilter: gray;\n"])));
var Typography = styled.article(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n\tpadding: 15px;\n\tmax-width: 1000px;\n\tfont-size: 1.1rem;\n\tfont-family: Bookerly, AmazonEmber-Rg;\n\tcolor: var(--text-color);\n\t& ::selection {\n\t\tbackground-color: var(--text-color);\n\t\tcolor: var(--bg-color);\n\t}\n\ta {\n\t\tcolor: var(--text-color);\n\t}\n\tblockquote {\n\t\tborder-left: 5px solid #9d9797;\n\t\tcolor: var(--text-color-secondary);\n\t\tpadding 4px 15px;\n\t\tmargin-left: 0px;\n\t}\n\tp {\n\t\tline-height: ", "px;\n\t\tletter-spacing: 0.051rem;\n\t}\n\timg {\n\t\tmax-width: 400px;\n\t\tmax-height: 1000px;\n\t\tmargin: 0 auto;\n\t\tdisplay: block;\n\t\t", "\n\t}\n\th1 {\n\t\tfont-size: 2rem;\n\t}\n\th2,\n\th3,\n\th4,\n\th5 {\n\t}\n"], ["\n\tpadding: 15px;\n\tmax-width: 1000px;\n\tfont-size: 1.1rem;\n\tfont-family: Bookerly, AmazonEmber-Rg;\n\tcolor: var(--text-color);\n\t& ::selection {\n\t\tbackground-color: var(--text-color);\n\t\tcolor: var(--bg-color);\n\t}\n\ta {\n\t\tcolor: var(--text-color);\n\t}\n\tblockquote {\n\t\tborder-left: 5px solid #9d9797;\n\t\tcolor: var(--text-color-secondary);\n\t\tpadding 4px 15px;\n\t\tmargin-left: 0px;\n\t}\n\tp {\n\t\tline-height: ", "px;\n\t\tletter-spacing: 0.051rem;\n\t}\n\timg {\n\t\tmax-width: 400px;\n\t\tmax-height: 1000px;\n\t\tmargin: 0 auto;\n\t\tdisplay: block;\n\t\t", "\n\t}\n\th1 {\n\t\tfont-size: 2rem;\n\t}\n\th2,\n\th3,\n\th4,\n\th5 {\n\t}\n"])), function (props) { return props.lineHeight; }, function (props) { return props.greyImage && greyImage; });
var index$7 = (function (_a) {
    var children = _a.children, _b = _a.lineHeight, lineHeight = _b === void 0 ? 25 : _b, _c = _a.greyImage, greyImage = _c === void 0 ? false : _c, props = __rest(_a, ["children", "lineHeight", "greyImage"]);
    return (React__default.createElement(Typography, __assign({}, props, { greyImage: greyImage, lineHeight: lineHeight }), children));
});
var templateObject_1$c, templateObject_2$2;

var GridItem = function (_a) {
    var className = _a.className, src = _a.src, href = _a.href, target = _a.target;
    if (href) {
        return (React.createElement("div", { className: className },
            React.createElement("a", { target: target, href: href },
                React.createElement("img", { src: src, alt: "grid item" }))));
    }
    return (React.createElement("div", { className: className },
        React.createElement("img", { src: src })));
};
var StyledGridItem = styled(GridItem)(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n\tdisplay: flex;\n\n\t@media (max-width: 768px) {\n\t\twidth: 25vh;\n\t\theight: calc(25vh / 0.626);\n\t}\n\n\t@media (min-width: 768px) {\n\t\twidth: 200px;\n\t\theight: 317px;\n\t}\n\n\t& img {\n\t\t", "\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tobject-fit: cover;\n\t}\n\n\ta {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tdisplay: block;\n\t}\n"], ["\n\tdisplay: flex;\n\n\t@media (max-width: 768px) {\n\t\twidth: 25vh;\n\t\theight: calc(25vh / 0.626);\n\t}\n\n\t@media (min-width: 768px) {\n\t\twidth: 200px;\n\t\theight: 317px;\n\t}\n\n\t& img {\n\t\t", "\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tobject-fit: cover;\n\t}\n\n\ta {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tdisplay: block;\n\t}\n"])), function (props) { return props.greyImage && greyImage; });
var templateObject_1$b;

var List = styled.div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject([""], [""])));
var templateObject_1$a;

var ListItem = function (_a) {
    var className = _a.className, _b = _a.component, component = _b === void 0 ? "div" : _b, _c = _a.LinkComponent, LinkComponent = _c === void 0 ? "a" : _c, children = _a.children, other = __rest(_a, ["className", "component", "LinkComponent", "children"]);
    var ComponentProp = component;
    if (ComponentProp === "div" && (other.href || other.to)) {
        ComponentProp = LinkComponent;
    }
    return (React__default.createElement(ComponentProp, __assign({ className: className }, other), children));
};
var StyledListItem = styled(ListItem)(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tpadding: 0 10px;\n\tfont-size: 1.1rem;\n\tfont-family: AmazonEmber-Rg, sans-serif;\n\tborder-bottom: ", ";\n\n\t&:last-child {\n\t\tborder-bottom: none;\n\t}\n\n\ttext-decoration: none;\n\tcolor: var(--text-color);\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tpadding: 0 10px;\n\tfont-size: 1.1rem;\n\tfont-family: AmazonEmber-Rg, sans-serif;\n\tborder-bottom: ", ";\n\n\t&:last-child {\n\t\tborder-bottom: none;\n\t}\n\n\ttext-decoration: none;\n\tcolor: var(--text-color);\n"])), border);
var templateObject_1$9;

var ListItemIcon = function (_a) {
    var className = _a.className, onClick = _a.onClick, children = _a.children;
    return (React__default.createElement("div", { onClick: function (e) {
            e.preventDefault();
            onClick && onClick();
        }, className: className }, children));
};
var StyledListItemIcon = styled(ListItemIcon)(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n\tsvg {\n\t\twidth: 20px;\n\t}\n"], ["\n\tsvg {\n\t\twidth: 20px;\n\t}\n"])));
var templateObject_1$8;

var ListItemText = function (_a) {
    var primary = _a.primary, second = _a.second, className = _a.className;
    return (React__default.createElement("div", { className: className },
        React__default.createElement("div", { className: "primary" }, primary),
        React__default.createElement("div", { className: "secondary" }, second)));
};
var index$6 = styled(ListItemText)(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n\t", "\n\tpadding: 10px 0;\n\twidth: 0; /* \u89E3\u51B3white-sapce\u6491\u5F00\u76D2\u5B50\u7684\u95EE\u9898*/\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: 1;\n\n\t.primary {\n\t\tfont-size: 20px;\n\t\tfont-weight: 600;\n\t\twidth: 90%;\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\twhite-space: nowrap;\n\t}\n\n\t.secondary {\n\t\tfont-size: 15px;\n\t}\n"], ["\n\t", "\n\tpadding: 10px 0;\n\twidth: 0; /* \u89E3\u51B3white-sapce\u6491\u5F00\u76D2\u5B50\u7684\u95EE\u9898*/\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: 1;\n\n\t.primary {\n\t\tfont-size: 20px;\n\t\tfont-weight: 600;\n\t\twidth: 90%;\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\twhite-space: nowrap;\n\t}\n\n\t.secondary {\n\t\tfont-size: 15px;\n\t}\n"])), hover);
var templateObject_1$7;

/**
 * Navbar组件
 * @author rivertwilight
 */
var fixedStyle = css(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n\tposition: sticky;\n\ttop: 0;\n\tright: 0;\n\tleft: 0;\n\tz-index: 1;\n"], ["\n\tposition: sticky;\n\ttop: 0;\n\tright: 0;\n\tleft: 0;\n\tz-index: 1;\n"])));
var Navbar = styled.nav(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n\t--border-color: #c1b2b2;\n\tdisplay: flex;\n\tflex-direction: column;\n\tborder-bottom: ", ";\n\tbackground-color: var(--bg-color);\n\tz-index: 20;\n\t", "\n"], ["\n\t--border-color: #c1b2b2;\n\tdisplay: flex;\n\tflex-direction: column;\n\tborder-bottom: ", ";\n\tbackground-color: var(--bg-color);\n\tz-index: 20;\n\t", "\n"])), border, function (props) { return (props.fixed ? fixedStyle : ""); });
var index$5 = (function (_a) {
    _a.autoClose; var fixed = _a.fixed, children = _a.children;
    return React__default.createElement(Navbar, { fixed: fixed }, children);
});
var templateObject_1$6, templateObject_2$1;

var _path$b;
function _extends$b() { _extends$b = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$b.apply(this, arguments); }
function SvgAirplane(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$b({
    xmlns: "http://www.w3.org/2000/svg",
    className: "airplane_svg__ionicon",
    viewBox: "0 0 512 512"
  }, props), _path$b || (_path$b = /*#__PURE__*/React.createElement("path", {
    d: "M186.62 464H160a16 16 0 01-14.57-22.6l64.46-142.25L113.1 297l-35.3 42.77C71.07 348.23 65.7 352 52 352H34.08a17.66 17.66 0 01-14.7-7.06c-2.38-3.21-4.72-8.65-2.44-16.41l19.82-71c.15-.53.33-1.06.53-1.58a.38.38 0 000-.15 14.82 14.82 0 01-.53-1.59l-19.84-71.45c-2.15-7.61.2-12.93 2.56-16.06a16.83 16.83 0 0113.6-6.7H52c10.23 0 20.16 4.59 26 12l34.57 42.05 97.32-1.44-64.44-142A16 16 0 01160 48h26.91a25 25 0 0119.35 9.8l125.05 152 57.77-1.52c4.23-.23 15.95-.31 18.66-.31C463 208 496 225.94 496 256c0 9.46-3.78 27-29.07 38.16-14.93 6.6-34.85 9.94-59.21 9.94-2.68 0-14.37-.08-18.66-.31l-57.76-1.54-125.36 152a25 25 0 01-19.32 9.75z"
  })));
}

var _path$a, _path2$5;
function _extends$a() { _extends$a = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$a.apply(this, arguments); }
function SvgBatteryFullSharp(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$a({
    xmlns: "http://www.w3.org/2000/svg",
    className: "battery-full-sharp_svg__ionicon",
    viewBox: "0 0 512 512"
  }, props), _path$a || (_path$a = /*#__PURE__*/React.createElement("path", {
    d: "M17 384h432V128H17zm32-224h368v192H49z"
  })), _path2$5 || (_path2$5 = /*#__PURE__*/React.createElement("path", {
    d: "M70.69 182.94h324.63v146.13H70.69zM465 202.67h32v106.67h-32z"
  })));
}

var _path$9, _path2$4, _path3;
function _extends$9() { _extends$9 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }
function SvgBatteryChargingSharp(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$9({
    xmlns: "http://www.w3.org/2000/svg",
    className: "battery-charging-sharp_svg__ionicon",
    viewBox: "0 0 512 512"
  }, props), _path$9 || (_path$9 = /*#__PURE__*/React.createElement("path", {
    d: "M306.68 237.62h-66.5l15.33-54.7 6.43-22.92 3.94-14 4.29-15.33a3.56 3.56 0 00.06-.44v-.19a1.85 1.85 0 000-.23 2 2 0 000-.24v-.14c0-.1-.07-.19-.11-.29v-.05a2.33 2.33 0 00-2-1.35h-.1a2.25 2.25 0 00-1.8 1l-12.5 17.15-18.82 25.55-8.36 11.48-35.41 48.6L160 274.26h66.44l-30 107a3.93 3.93 0 00-.06.48v.1a1.94 1.94 0 000 .34.29.29 0 000 .09 3 3 0 00.07.32v.06a1.83 1.83 0 00.14.32 2.38 2.38 0 001.52 1.16h.57a2.1 2.1 0 001.31-.5l.06-.05a2.6 2.6 0 00.42-.45L223.3 352l13-17.82z"
  })), _path2$4 || (_path2$4 = /*#__PURE__*/React.createElement("path", {
    d: "M289.78 134.55l-.14.74-.21.73-6.72 24H417V352H248.05l-23.33 32H449V128H290.13a22.62 22.62 0 01-.35 6.55zM49 160h169.49l23.31-32H17v256h159.49a22.73 22.73 0 01.34-6.67l.15-.75.2-.73 6.69-23.85H49z"
  })), _path3 || (_path3 = /*#__PURE__*/React.createElement("path", {
    d: "M264.76 329.08h130.55V182.92H276.28l-9.73 34.7H346l-23.16 31.78-58.08 79.68zM160 294.26h-39.31l23.15-31.78 57.95-79.56H70.69v146.16h119.6l9.77-34.82H160zm305-91.59h32v106.67h-32z"
  })));
}

var _path$8;
function _extends$8() { _extends$8 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }
function SvgCellularSharp(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$8({
    xmlns: "http://www.w3.org/2000/svg",
    className: "cellular-sharp_svg__ionicon",
    viewBox: "0 0 512 512"
  }, props), _path$8 || (_path$8 = /*#__PURE__*/React.createElement("path", {
    d: "M496 432h-96V80h96zm-128 0h-96V160h96zm-128 0h-96V224h96zm-128 0H16V288h96z"
  })));
}

var getTimeStr = (function () {
    var now = new Date();
    return "".concat(now.getHours(), ":").concat(now.getMinutes() < 10 ? 0 : "").concat(now.getMinutes());
});

var StatuBar = function (_a) {
    var className = _a.className, children = _a.children;
    return (React__default.createElement("div", { className: className }, children));
};
var StyledStatuBar = styled(StatuBar)(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tborder-bottom: ", ";\n\tpadding: 3px 18px;\n\theight: 22px;\n\t.statu-item {\n\t\tmargin-left: 12px;\n\t\tline-height: 1.5em;\n\t\tdisplay: flex;\n\t}\n\t.statu-group {\n\t\tdisplay: flex;\n\t\talign-content: center;\n\t}\n\t.device-name {\n\t\ttext-overflow: ellipsis;\n\t\twhite-space: nowrap;\n\t\toverflow: hidden;\n\t}\n\t.battery {\n\t\tdisplay: flex;\n\t\talign-content: center;\n\t\t& svg {\n\t\t\ttransform: translate(1px, -4px);\n\t\t\twidth: 25px;\n\t\t\theight: 30px;\n\t\t}\n\t\t& > label {\n\t\t\tfont-size: 0.9em;\n\t\t}\n\t}\n\t.celluar {\n\t\t& label {\n\t\t\ttransform: translate(-1px, 0px);\n\t\t\tfont-size: 0.9em;\n\t\t}\n\t\t& svg {\n\t\t\theight: 20px;\n\t\t}\n\t}\n\t.airplane {\n\t\talign-content: center;\n\t\t& svg {\n\t\t\ttransform: rotate(-90deg);\n\t\t\theight: 20px;\n\t\t}\n\t}\n"], ["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tborder-bottom: ", ";\n\tpadding: 3px 18px;\n\theight: 22px;\n\t.statu-item {\n\t\tmargin-left: 12px;\n\t\tline-height: 1.5em;\n\t\tdisplay: flex;\n\t}\n\t.statu-group {\n\t\tdisplay: flex;\n\t\talign-content: center;\n\t}\n\t.device-name {\n\t\ttext-overflow: ellipsis;\n\t\twhite-space: nowrap;\n\t\toverflow: hidden;\n\t}\n\t.battery {\n\t\tdisplay: flex;\n\t\talign-content: center;\n\t\t& svg {\n\t\t\ttransform: translate(1px, -4px);\n\t\t\twidth: 25px;\n\t\t\theight: 30px;\n\t\t}\n\t\t& > label {\n\t\t\tfont-size: 0.9em;\n\t\t}\n\t}\n\t.celluar {\n\t\t& label {\n\t\t\ttransform: translate(-1px, 0px);\n\t\t\tfont-size: 0.9em;\n\t\t}\n\t\t& svg {\n\t\t\theight: 20px;\n\t\t}\n\t}\n\t.airplane {\n\t\talign-content: center;\n\t\t& svg {\n\t\t\ttransform: rotate(-90deg);\n\t\t\theight: 20px;\n\t\t}\n\t}\n"])), border);
/**
 * Statubar
 */
var index$4 = (function (props) {
    var deviceName = props.deviceName, airplane = props.airplane, battery = props.battery, charging = props.charging, celluar = props.celluar;
    var _a = useState(getTimeStr()), timeStr = _a[0], setTimeStr = _a[1];
    useEffect(function () {
        setInterval(function () {
            setTimeStr(getTimeStr());
        }, 1000);
    }, []);
    return (React__default.createElement(StyledStatuBar, null,
        React__default.createElement("div", { className: "device-name" }, deviceName),
        React__default.createElement("div", { className: "statu-group" },
            airplane && (React__default.createElement("div", { className: "statu-item airplane" },
                React__default.createElement(SvgAirplane, null))),
            celluar && celluar.on && (React__default.createElement("div", { className: "statu-item celluar" },
                celluar.label && React__default.createElement("label", null, celluar.label),
                React__default.createElement(SvgCellularSharp, null))),
            battery && (React__default.createElement("div", { className: "statu-item battery" },
                React__default.createElement("label", null,
                    battery,
                    "%"),
                charging ? React__default.createElement(SvgBatteryChargingSharp, null) : React__default.createElement(SvgBatteryFullSharp, null))),
            React__default.createElement("div", { className: "statu-item time" }, timeStr))));
});
var templateObject_1$5;

var _path$7, _path2$3;
function _extends$7() { _extends$7 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }
function SvgSearchOutline(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$7({
    xmlns: "http://www.w3.org/2000/svg",
    className: "search-outline_svg__ionicon",
    viewBox: "0 0 512 512"
  }, props), _path$7 || (_path$7 = /*#__PURE__*/React.createElement("path", {
    d: "M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z",
    fill: "none",
    stroke: "currentColor",
    strokeMiterlimit: 10,
    strokeWidth: 32
  })), _path2$3 || (_path2$3 = /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeMiterlimit: 10,
    strokeWidth: 32,
    d: "M338.29 338.29L448 448"
  })));
}

var SearchBar = function (_a) {
    var className = _a.className;
    return (React__default.createElement("div", { className: className },
        React__default.createElement(SvgSearchOutline, null),
        React__default.createElement("input", { placeholder: "Search" })));
};
var index$3 = styled(SearchBar)(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tmargin: 0 1px;\n\t& > svg {\n\t\theight: 36px;\n\t\ttransform: translate(51%, 0px);\n\t\tdisplay: inline;\n\t\tposition: absolute; /*\u8131\u79BB\u6807\u51C6\u6D41\u4E0D\u5360\u7A7A\u95F4*/\n\t}\n\t& input {\n\t\theight: 100%;\n\t\twidth: 150px;\n\t\tborder-top: none;\n\t\tborder-right: ", ";\n\t\tborder-left: ", ";\n\t\tborder-bottom: none;\n\t\tpadding: 5px 10px;\n\t\tbox-sizing: border-box;\n\t\ttext-align: center;\n\t\tbackground-color: transparent;\n\t}\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tmargin: 0 1px;\n\t& > svg {\n\t\theight: 36px;\n\t\ttransform: translate(51%, 0px);\n\t\tdisplay: inline;\n\t\tposition: absolute; /*\u8131\u79BB\u6807\u51C6\u6D41\u4E0D\u5360\u7A7A\u95F4*/\n\t}\n\t& input {\n\t\theight: 100%;\n\t\twidth: 150px;\n\t\tborder-top: none;\n\t\tborder-right: ", ";\n\t\tborder-left: ", ";\n\t\tborder-bottom: none;\n\t\tpadding: 5px 10px;\n\t\tbox-sizing: border-box;\n\t\ttext-align: center;\n\t\tbackground-color: transparent;\n\t}\n"])), border, border);
var templateObject_1$4;

// FXIME  小屏幕文字溢出
var index$2 = styled.div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n\tdisplay: flex;\n    padding: 10px 5px;\n"], ["\n\tdisplay: flex;\n    padding: 10px 5px;\n"])));
var templateObject_1$3;

var index$1 = styled.div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n\tfont-family: AmazonEmber-Rg, sans-serif;\n\tdisplay: flex;\n\tpadding: 0 10px;\n\tcursor: pointer;\n\tcolor: #888;\n\ttext-transform: uppercase;\n\t", "\n\tborder-right: ", ";\n\t", "\n\t&:last-child {\n\t\tborder-right: none;\n\t}\n"], ["\n\tfont-family: AmazonEmber-Rg, sans-serif;\n\tdisplay: flex;\n\tpadding: 0 10px;\n\tcursor: pointer;\n\tcolor: #888;\n\ttext-transform: uppercase;\n\t", "\n\tborder-right: ", ";\n\t", "\n\t&:last-child {\n\t\tborder-right: none;\n\t}\n"])), hover, border, function (props) {
    return props.active &&
        "\n        font-weight: 700;\n        color: var(--text-color);\n        ";
});
var templateObject_1$2;

var TimeBar = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n\tz-index: 10;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\theight: 20px;\n\tbackground: var(--bg-color);\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n"], ["\n\tz-index: 10;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\theight: 20px;\n\tbackground: var(--bg-color);\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n"])));
/**
 * TimeBar
 * @author rivertwilight
 */
var index = (function (_a) {
    var _b = useState(getTimeStr()), timeStr = _b[0], setTimeStr = _b[1];
    useEffect(function () {
        setInterval(function () {
            setTimeStr(getTimeStr());
        }, 1000);
    }, []);
    return (React__default.createElement(TimeBar, null,
        React__default.createElement("div", { className: "time-str" }, timeStr)));
});
var templateObject_1$1;

var environmentLight = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tlinear-gradient(\n\t\t235deg,\n\t\trgb(203 203 203 / 54%) 0%,\n\t\trgba(0, 0, 0, 1) 23%\n\t);\n"], ["\n\tlinear-gradient(\n\t\t235deg,\n\t\trgb(203 203 203 / 54%) 0%,\n\t\trgba(0, 0, 0, 1) 23%\n\t);\n"])));
var environmentDark = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    linear-gradient(\n        237deg, \n        rgba(191,191,191,1) 0%, \n        rgba(0,0,0,1) 45%)\n"], ["\n    linear-gradient(\n        237deg, \n        rgba(191,191,191,1) 0%, \n        rgba(0,0,0,1) 45%)\n"])));
var StyledContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t@media screen and (max-width: 799px) {\n\t\t.hardButton {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n\n\t@media screen and (min-width: 800px) {\n\t\t* {\n\t\t\t--hbutton-height: 148px;\n\t\t\t--border-shadow-width: 6px;\n\t\t}\n\n\t\tmax-width: 900px;\n\t\tposition: relative;\n\t\tbox-sizing: content-box;\n\t\tpadding-left: 40px;\n\t\tpadding-top: 40px;\n\t\tpadding-bottom: 40px;\n\t\tpadding-right: 150px;\n\t\tborder-radius: 30px;\n        background: ", ";\n\t\tborder: 8px double #3a3737;\n\t\toverflow: hidden;\n\t\theight: 100vh;\n\t\ttransform: translateY(30px);\n\n\t\t.hardButton {\n\t\t\twidth: 13px;\n\t\t\theight: var(--hbutton-height);\n\t\t\tborder-radius: 20px;\n\t\t\tbackground: #414449;\n\t\t\tposition: absolute;\n\t\t\tright: 45px;\n\t\t\ttop: calc(50vh + 30px);\n\t\t\tborder-left: 3px solid black;\n\t\t\tborder-right: 4px ridge #888;\n\t\t\tborder-top: 1px solid black;\n\t\t\tborder-bottom: 1px solid black;\n\t\t}\n\n\t\t.hardButton-up {\n\t\t\ttransform: translateY(-150px);\n\t\t}\n\n\t\t.hardButton-down {\n\t\t\ttransform: translateY(100px);\n\t\t}\n\n\t\t.shadowTop::after {\n\t\t\tcontent: \"\";\n\t\t\tposition: absolute;\n\t\t\tz-index: 3;\n\t\t\tright: 10;\n\t\t\tleft: 0;\n\t\t\theight: var(--border-shadow-width);\n\t\t\tdisplay: inline;\n\t\t\tbackground: linear-gradient(\n\t\t\t\t180deg,\n\t\t\t\trgba(0, 0, 0, 0.5) 0%,\n\t\t\t\trgba(0, 212, 255, 0) 100%\n\t\t\t);\n\t\t}\n\n\t\t.screen::before {\n\t\t\tcontent: \"\";\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\theight: 100%;\n\t\t\tbackground: linear-gradient(\n\t\t\t\t90deg,\n\t\t\t\trgba(0, 0, 0, 0.5) 0%,\n\t\t\t\trgba(0, 212, 255, 0) 100%\n\t\t\t);\n\t\t\twidth: var(--border-shadow-width);\n\t\t\ttransform: translate(0px, 0px);\n\t\t\tz-index: 2;\n\t\t}\n\n\t\t.screen {\n\t\t\tbackground-color: var(--bg-color);\n\t\t\tpadding: 0 2px;\n\t\t\tposition: relative;\n\t\t\theight: 100%;\n\t\t}\n\n\t\t.screen::after {\n\t\t\tcontent: \"\";\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tright: 0;\n\t\t\theight: 100%;\n\t\t\tbackground: linear-gradient(\n\t\t\t\t90deg,\n\t\t\t\trgba(0, 0, 0, 0) 0%,\n\t\t\t\trgba(0, 0, 0, 0.5) 100%\n\t\t\t);\n\t\t\twidth: var(--border-shadow-width);\n\t\t\ttransform: translate(0px, 0px);\n\t\t\theight: 100%;\n\t\t\tz-index: 2;\n\t\t}\n\n\t\t.content {\n\t\t\toverflow-y: scroll;\n\t\t\theight: 100%;\n\t\t\tbackground: var(--bg-color);\n\t\t}\n\n\t\t.content::-webkit-scrollbar {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n"], ["\n\t@media screen and (max-width: 799px) {\n\t\t.hardButton {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n\n\t@media screen and (min-width: 800px) {\n\t\t* {\n\t\t\t--hbutton-height: 148px;\n\t\t\t--border-shadow-width: 6px;\n\t\t}\n\n\t\tmax-width: 900px;\n\t\tposition: relative;\n\t\tbox-sizing: content-box;\n\t\tpadding-left: 40px;\n\t\tpadding-top: 40px;\n\t\tpadding-bottom: 40px;\n\t\tpadding-right: 150px;\n\t\tborder-radius: 30px;\n        background: ", ";\n\t\tborder: 8px double #3a3737;\n\t\toverflow: hidden;\n\t\theight: 100vh;\n\t\ttransform: translateY(30px);\n\n\t\t.hardButton {\n\t\t\twidth: 13px;\n\t\t\theight: var(--hbutton-height);\n\t\t\tborder-radius: 20px;\n\t\t\tbackground: #414449;\n\t\t\tposition: absolute;\n\t\t\tright: 45px;\n\t\t\ttop: calc(50vh + 30px);\n\t\t\tborder-left: 3px solid black;\n\t\t\tborder-right: 4px ridge #888;\n\t\t\tborder-top: 1px solid black;\n\t\t\tborder-bottom: 1px solid black;\n\t\t}\n\n\t\t.hardButton-up {\n\t\t\ttransform: translateY(-150px);\n\t\t}\n\n\t\t.hardButton-down {\n\t\t\ttransform: translateY(100px);\n\t\t}\n\n\t\t.shadowTop::after {\n\t\t\tcontent: \"\";\n\t\t\tposition: absolute;\n\t\t\tz-index: 3;\n\t\t\tright: 10;\n\t\t\tleft: 0;\n\t\t\theight: var(--border-shadow-width);\n\t\t\tdisplay: inline;\n\t\t\tbackground: linear-gradient(\n\t\t\t\t180deg,\n\t\t\t\trgba(0, 0, 0, 0.5) 0%,\n\t\t\t\trgba(0, 212, 255, 0) 100%\n\t\t\t);\n\t\t}\n\n\t\t.screen::before {\n\t\t\tcontent: \"\";\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\theight: 100%;\n\t\t\tbackground: linear-gradient(\n\t\t\t\t90deg,\n\t\t\t\trgba(0, 0, 0, 0.5) 0%,\n\t\t\t\trgba(0, 212, 255, 0) 100%\n\t\t\t);\n\t\t\twidth: var(--border-shadow-width);\n\t\t\ttransform: translate(0px, 0px);\n\t\t\tz-index: 2;\n\t\t}\n\n\t\t.screen {\n\t\t\tbackground-color: var(--bg-color);\n\t\t\tpadding: 0 2px;\n\t\t\tposition: relative;\n\t\t\theight: 100%;\n\t\t}\n\n\t\t.screen::after {\n\t\t\tcontent: \"\";\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tright: 0;\n\t\t\theight: 100%;\n\t\t\tbackground: linear-gradient(\n\t\t\t\t90deg,\n\t\t\t\trgba(0, 0, 0, 0) 0%,\n\t\t\t\trgba(0, 0, 0, 0.5) 100%\n\t\t\t);\n\t\t\twidth: var(--border-shadow-width);\n\t\t\ttransform: translate(0px, 0px);\n\t\t\theight: 100%;\n\t\t\tz-index: 2;\n\t\t}\n\n\t\t.content {\n\t\t\toverflow-y: scroll;\n\t\t\theight: 100%;\n\t\t\tbackground: var(--bg-color);\n\t\t}\n\n\t\t.content::-webkit-scrollbar {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n"])), function (props) {
    return props.dark ? environmentDark : environmentLight;
});
var Container = function (_a) {
    var children = _a.children, dark = _a.dark;
    return (React__default.createElement(StyledContainer, { dark: dark },
        React__default.createElement("div", { className: "hardButton hardButton-up" }),
        React__default.createElement("div", { className: "hardButton hardButton-down" }),
        React__default.createElement("div", { className: "screen" },
            React__default.createElement("div", { className: "shadowTop" }),
            React__default.createElement("div", { className: "content" },
                React__default.createElement("div", null, children)),
            React__default.createElement("div", { className: "shadowBottom" }))));
};
var templateObject_1, templateObject_2, templateObject_3;

var _path$6;
function _extends$6() { _extends$6 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }
function SvgArrowBackSharp(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$6({
    xmlns: "http://www.w3.org/2000/svg",
    className: "arrow-back-sharp_svg__ionicon",
    viewBox: "0 0 512 512"
  }, props), _path$6 || (_path$6 = /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "square",
    strokeMiterlimit: 10,
    strokeWidth: 48,
    d: "M244 400L100 256l144-144M120 256h292"
  })));
}

var _rect, _rect2, _path$5;
function _extends$5() { _extends$5 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }
function SvgBatteryFull(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$5({
    xmlns: "http://www.w3.org/2000/svg",
    className: "battery-full_svg__ionicon",
    viewBox: "0 0 512 512"
  }, props), _rect || (_rect = /*#__PURE__*/React.createElement("rect", {
    x: 32,
    y: 144,
    width: 400,
    height: 224,
    rx: 45.7,
    ry: 45.7,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "square",
    strokeMiterlimit: 10,
    strokeWidth: 32
  })), _rect2 || (_rect2 = /*#__PURE__*/React.createElement("rect", {
    x: 85.69,
    y: 198.93,
    width: 292.63,
    height: 114.14,
    rx: 4,
    ry: 4,
    stroke: "currentColor",
    strokeLinecap: "square",
    strokeMiterlimit: 10,
    strokeWidth: 32
  })), _path$5 || (_path$5 = /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeMiterlimit: 10,
    strokeWidth: 32,
    d: "M480 218.67v74.66"
  })));
}

var _path$4, _path2$2;
function _extends$4() { _extends$4 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }
function SvgBatteryHalfSharp(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$4({
    xmlns: "http://www.w3.org/2000/svg",
    className: "battery-half-sharp_svg__ionicon",
    viewBox: "0 0 512 512"
  }, props), _path$4 || (_path$4 = /*#__PURE__*/React.createElement("path", {
    d: "M17 384h432V128H17zm32-224h368v192H49z"
  })), _path2$2 || (_path2$2 = /*#__PURE__*/React.createElement("path", {
    d: "M70.69 182.92H256v146.16H70.69zM465 202.67h32v106.67h-32z"
  })));
}

var _path$3;
function _extends$3() { _extends$3 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }
function SvgCogSharp(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$3({
    xmlns: "http://www.w3.org/2000/svg",
    className: "cog-sharp_svg__ionicon",
    viewBox: "0 0 512 512"
  }, props), _path$3 || (_path$3 = /*#__PURE__*/React.createElement("path", {
    d: "M464 249.93a10.58 10.58 0 00-9.36-9.94L429 235.84a5.42 5.42 0 01-4.5-4.67c-.49-3.15-1-6.42-1.7-9.52a5.52 5.52 0 012.63-5.85l22.78-12.65a10.35 10.35 0 005-12.83l-3.95-10.9a10.32 10.32 0 00-12.13-6.51l-25.55 5a5.5 5.5 0 01-5.82-2.81c-1.49-2.79-3.11-5.63-4.8-8.42a5.6 5.6 0 01.44-6.5l17-19.63a10.44 10.44 0 00.39-13.77l-7.42-8.91a10.24 10.24 0 00-13.58-2l-22.37 13.43a5.39 5.39 0 01-6.39-.63c-2.47-2.17-4.95-4.26-7.37-6.19a5.45 5.45 0 01-1.72-6.21l9.26-24.4a10.35 10.35 0 00-4.31-13.07l-10.08-5.85a10.31 10.31 0 00-13.46 2.83L325 96.28a4.58 4.58 0 01-5.6 1.72c-.62-.25-5.77-2.36-9.78-3.7a5.42 5.42 0 01-3.74-5.23l.39-26.07a10.48 10.48 0 00-8.57-10.88l-11.45-2a10.45 10.45 0 00-11.75 7.17L266 82.1a5.42 5.42 0 01-5.36 3.65h-9.75a5.53 5.53 0 01-5.3-3.67l-8.46-24.67a10.46 10.46 0 00-11.77-7.25l-11.46 2a10.46 10.46 0 00-8.57 10.79l.4 26.16a5.45 5.45 0 01-3.86 5.25c-2.28.89-7.26 2.78-9.51 3.63-2 .72-4.19-.07-6-2.1l-16.26-20A10.3 10.3 0 00156.69 73l-10.06 5.83A10.36 10.36 0 00142.31 92l9.25 24.34a5.54 5.54 0 01-1.7 6.23c-2.43 2-4.92 4-7.4 6.22a5.38 5.38 0 01-6.35.64L114 115.74a10.39 10.39 0 00-13.61 2l-7.4 8.9a10.32 10.32 0 00.37 13.76l17.09 19.6a5.42 5.42 0 01.45 6.45c-1.71 2.72-3.34 5.58-4.82 8.44a5.53 5.53 0 01-5.86 2.82l-25.51-4.93a10.34 10.34 0 00-12.14 6.51l-4 10.88a10.37 10.37 0 005 12.85l22.78 12.65a5.39 5.39 0 012.65 5.92l-.23 1.24c-.53 2.8-1 5.45-1.47 8.27a5.48 5.48 0 01-4.46 4.64l-25.7 4.15A10.42 10.42 0 0048 250.16v11.58A10.26 10.26 0 0057.16 272l25.68 4.14a5.41 5.41 0 014.5 4.67c.49 3.16 1 6.42 1.7 9.52a5.52 5.52 0 01-2.63 5.85l-22.77 12.67a10.35 10.35 0 00-5 12.83l4 10.9a10.33 10.33 0 0012.13 6.51l25.55-4.95a5.5 5.5 0 015.82 2.81c1.5 2.8 3.12 5.64 4.8 8.42a5.58 5.58 0 01-.44 6.5l-17 19.64a10.41 10.41 0 00-.5 13.76l7.41 8.91a10.24 10.24 0 0013.58 2l22.37-13.43a5.39 5.39 0 016.39.63c2.48 2.17 5 4.26 7.37 6.19a5.45 5.45 0 011.72 6.21l-9.26 24.4a10.35 10.35 0 004.31 13.07l10.11 5.84a10.3 10.3 0 0013.45-2.82L187 415.92c1.39-1.73 3.6-2.5 5.24-1.84 3.47 1.44 5.8 2.25 9.93 3.63a5.44 5.44 0 013.75 5.23l-.4 26.05a10.5 10.5 0 008.57 10.88l11.45 2a10.44 10.44 0 0011.75-7.17l8.5-24.77a5.48 5.48 0 015.36-3.65h9.75a5.52 5.52 0 015.3 3.67l8.47 24.67a10.48 10.48 0 0010 7.41 9.74 9.74 0 001.78-.16l11.47-2a10.46 10.46 0 008.56-10.79l-.4-26.16a5.43 5.43 0 013.75-5.2c3.84-1.29 6.53-2.33 8.91-3.24l.6-.24c3.06-1.06 4.53.14 5.47 1.31l16.75 20.63A10.3 10.3 0 00355 439l10.07-5.83a10.35 10.35 0 004.31-13.1l-9.24-24.34a5.52 5.52 0 011.69-6.23c2.43-2 4.92-4 7.4-6.22a5.39 5.39 0 016.38-.62l22.39 13.4a10.39 10.39 0 0013.61-2l7.4-8.9a10.31 10.31 0 00-.37-13.75l-17.06-19.67a5.42 5.42 0 01-.45-6.45c1.71-2.71 3.34-5.57 4.82-8.44a5.56 5.56 0 015.86-2.82l25.48 4.97a10.34 10.34 0 0012.14-6.51l3.95-10.88a10.36 10.36 0 00-5-12.84l-22.8-12.67a5.4 5.4 0 01-2.61-5.89l.23-1.25c.53-2.8 1-5.44 1.47-8.26a5.48 5.48 0 014.46-4.64l25.7-4.14a10.43 10.43 0 009.17-10.28v-11.71zM171.59 361.27a135.12 135.12 0 01.5-210.94l60 105.61zM256 391.11a133.75 133.75 0 01-48.49-9.05L268 276.79h121.22C379.21 341.45 323.29 391.11 256 391.11zm12.06-155.9l-59.95-105.5a133.87 133.87 0 0147.89-8.82c67.29 0 123.21 49.66 133.22 114.32z"
  })));
}

var _path$2;
function _extends$2() { _extends$2 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }
function SvgEllipsisVerticalCircleSharp(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2({
    xmlns: "http://www.w3.org/2000/svg",
    className: "ellipsis-vertical-circle-sharp_svg__ionicon",
    viewBox: "0 0 512 512"
  }, props), _path$2 || (_path$2 = /*#__PURE__*/React.createElement("path", {
    d: "M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208zm-234-90a26 26 0 1126 26 26 26 0 01-26-26zm0 90a26 26 0 1126 26 26 26 0 01-26-26zm0 90a26 26 0 1126 26 26 26 0 01-26-26z"
  })));
}

var _path$1, _path2$1;
function _extends$1() { _extends$1 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }
function SvgHomeOutline(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    className: "home-outline_svg__ionicon",
    viewBox: "0 0 512 512"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React.createElement("path", {
    d: "M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 32
  })), _path2$1 || (_path2$1 = /*#__PURE__*/React.createElement("path", {
    d: "M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 32
  })));
}

var _path, _path2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function SvgWifiSharp(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "wifi-sharp_svg__ionicon",
    viewBox: "0 0 512 512"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M332.69 320a115 115 0 00-152.8 0m213.85-61a201.26 201.26 0 00-274.92 0M448 191.52a288 288 0 00-383.44 0",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "square",
    strokeLinejoin: "round",
    strokeWidth: 42
  })), _path2 || (_path2 = /*#__PURE__*/React.createElement("path", {
    d: "M300.67 384L256 433l-44.34-49a56.73 56.73 0 0188.92 0z"
  })));
}

var ENV = process.env.NODE_ENV;
if (ENV !== "production" &&
    ENV !== "test" &&
    typeof console !== "undefined" &&
    console.warn && // eslint-disable-line no-console
    typeof window !== "undefined") {
    // eslint-disable-next-line no-console
    console.warn("You are using a whole package of Kindle-ui, " +
        "please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.");
}

export { index$k as ActionBar, index$i as ActionBarMenu, index$h as ActionBarSpace, index$j as ActionGroup, ActionItem, SvgAirplane as AirplaneIcon, SvgArrowBackSharp as ArrowBackSharpIcon, SvgBatteryFull as BatteryFullIcon, SvgBatteryHalfSharp as BatteryHalfSharpIcon, index$g as Button, index$f as Card, index$b as CardAction, index$d as CardContent, index$e as CardMedia, index$c as CardTitle, SvgCellularSharp as CelluarIcon, SvgCogSharp as CogSharpIcon, Container$1 as Container, index$a as Dialog, index$9 as DialogAction, index$8 as DialogContent, SvgEllipsisVerticalCircleSharp as EllipsisVerticalCircleSharpIcon, SvgEllipsisVertical as EllipsisVerticalIcon, Grid, StyledGridItem as GridItem, SvgHomeOutline as HomeOutlineIcon, Container as KindleOasis, List, StyledListItem as ListItem, StyledListItemIcon as ListItemIcon, index$6 as ListItemText, Menu$1 as Menu, index$5 as Navbar, index$3 as SearchBar, index$4 as StatuBar, index$2 as Tab, index$1 as TabItem, index as TimeBar, index$7 as Typography, SvgWifiSharp as WifiSharpIcon };
