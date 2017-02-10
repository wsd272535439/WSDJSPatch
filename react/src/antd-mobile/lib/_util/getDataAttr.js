'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = getDataAttr;
function getDataAttr(props) {
    var dataAttrs = {};
    Object.keys(props).forEach(function (i) {
        if (i.indexOf('data-') === 0) {
            dataAttrs[i] = props[i];
        }
    });
    return dataAttrs;
}
module.exports = exports['default'];