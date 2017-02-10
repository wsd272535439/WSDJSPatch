'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _index = require('../list/index');

var _index2 = _interopRequireDefault(_index);

var _Radio = require('../radio/Radio.web');

var _Radio2 = _interopRequireDefault(_Radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SubMenu = function (_React$Component) {
    (0, _inherits3["default"])(SubMenu, _React$Component);

    function SubMenu(props) {
        (0, _classCallCheck3["default"])(this, SubMenu);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.onClick = function (dataItem) {
            _this.setState({
                selItem: [dataItem]
            });
            if (_this.props.onSel) {
                _this.props.onSel(dataItem);
            }
        };
        _this.state = {
            selItem: props.selItem
        };
        return _this;
    }

    SubMenu.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (nextProps.subMenuData !== this.props.subMenuData) {
            this.setState({
                selItem: nextProps.selItem
            });
        }
    };

    SubMenu.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            subMenuPrefixCls = _props.subMenuPrefixCls,
            radioPrefixCls = _props.radioPrefixCls,
            subMenuData = _props.subMenuData;
        var selItem = this.state.selItem;

        var selected = function selected(dataItem) {
            return selItem.length > 0 && selItem[0].value === dataItem.value;
        };
        return _react2["default"].createElement(_index2["default"], { style: { paddingTop: 0 }, className: subMenuPrefixCls }, subMenuData.map(function (dataItem, idx) {
            var _classNames;

            return _react2["default"].createElement(_index2["default"].Item, { className: (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, radioPrefixCls + '-item', true), (0, _defineProperty3["default"])(_classNames, subMenuPrefixCls + '-item-selected', selected(dataItem)), (0, _defineProperty3["default"])(_classNames, subMenuPrefixCls + '-item-disabled', dataItem.disabled), _classNames)), key: idx, extra: _react2["default"].createElement(_Radio2["default"], { checked: selected(dataItem), disabled: dataItem.disabled, onChange: function onChange() {
                        return _this2.onClick(dataItem);
                    } }) }, dataItem.label);
        }));
    };

    return SubMenu;
}(_react2["default"].Component);

exports["default"] = SubMenu;
module.exports = exports['default'];