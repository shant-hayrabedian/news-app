"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GlobalStyles = exports.darkTheme = exports.lightTheme = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
    var data = _taggedTemplateLiteral(["\n\tbody {\n\t\tbackground-color: ", ";\n\t}\n"]);

    _templateObject = function _templateObject() {
        return data;
    };

    return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var lightTheme = {
    body: "#fff",
    fontColor: "#000"
};
exports.lightTheme = lightTheme;
var darkTheme = {
    body: "#000",
    fontColor: "#fff"
};
exports.darkTheme = darkTheme;
var GlobalStyles = (0, _styledComponents.createGlobalStyle)(_templateObject(), function (props) {
    return props.theme.body;
});
exports.GlobalStyles = GlobalStyles;