'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

exports["default"] = handleProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _splitObject3 = require('../_util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

var _list = require('../list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Item = _list2["default"].Item;
function handleProps(props, isIndexed) {
    var _splitObject = (0, _splitObject4["default"])(props, ['renderHeader', 'renderFooter', 'renderSectionHeader', 'renderRow']),
        _splitObject2 = (0, _slicedToArray3["default"])(_splitObject, 2),
        _splitObject2$ = _splitObject2[0],
        renderHeader = _splitObject2$.renderHeader,
        renderFooter = _splitObject2$.renderFooter,
        renderSectionHeader = _splitObject2$.renderSectionHeader,
        renderRow = _splitObject2$.renderRow,
        restProps = _splitObject2[1];

    var listPrefixCls = props.listPrefixCls;
    var extraProps = {
        renderHeader: null,
        renderFooter: null,
        renderSectionHeader: null,
        renderBodyComponent: function renderBodyComponent() {
            return _react2["default"].createElement("div", { className: listPrefixCls + '-body' });
        },
        renderRow: renderRow
    };
    if (renderHeader) {
        extraProps.renderHeader = function () {
            return _react2["default"].createElement("div", { className: listPrefixCls + '-header' }, renderHeader());
        };
    }
    if (renderFooter) {
        extraProps.renderFooter = function () {
            return _react2["default"].createElement("div", { className: listPrefixCls + '-footer' }, renderFooter());
        };
    }
    if (renderSectionHeader) {
        extraProps.renderSectionHeader = isIndexed ? function (sectionData, sectionID) {
            return _react2["default"].createElement("div", null, _react2["default"].createElement(Item, null, renderSectionHeader(sectionData, sectionID)));
        } : function (sectionData, sectionID) {
            return _react2["default"].createElement(Item, null, renderSectionHeader(sectionData, sectionID));
        };
    }
    return { restProps: restProps, extraProps: extraProps };
}
module.exports = exports['default'];