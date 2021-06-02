"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ButtonListComponent;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ButtonListComponent() {
  var render = function render() {
    var item = [];

    var _loop = function _loop(i) {
      item.push( /*#__PURE__*/_react.default.createElement(_core.Button, {
        key: i,
        onClick: function onClick() {
          console.log("Button ".concat(i));
        }
      }, "Button ".concat(i)));
    };

    for (var i = 0; i < 3; i++) {
      _loop(i);
    }

    return item;
  };

  return /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    direction: "row"
  }, render());
}