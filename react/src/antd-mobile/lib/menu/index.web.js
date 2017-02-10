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

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _list = require('../list');

var _list2 = _interopRequireDefault(_list);

var _flex = require('../flex');

var _flex2 = _interopRequireDefault(_flex);

var _SubMenu = require('./SubMenu.web');

var _SubMenu2 = _interopRequireDefault(_SubMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Menu = function (_React$Component) {
    (0, _inherits3["default"])(Menu, _React$Component);

    function Menu(props) {
        (0, _classCallCheck3["default"])(this, Menu);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.onClickFirstLevelItem = function (dataItem) {
            _this.setState({
                firstLevelSelectValue: dataItem.value
            });
            if (dataItem.isLeaf && _this.props.onChange) {
                _this.props.onChange([dataItem.value]);
            }
        };
        _this.onClickSubMenuItem = function (dataItem) {
            var _this$props = _this.props,
                level = _this$props.level,
                onChange = _this$props.onChange;

            setTimeout(function () {
                if (onChange) {
                    onChange(level === 2 ? [_this.state.firstLevelSelectValue, dataItem.value] : [dataItem.value]);
                }
            }, 300);
        };
        _this.state = {
            firstLevelSelectValue: _this.getNewFsv(props)
        };
        return _this;
    }

    Menu.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({
                firstLevelSelectValue: this.getNewFsv(nextProps)
            });
        }
    };

    Menu.prototype.getNewFsv = function getNewFsv(props) {
        var value = props.value,
            data = props.data;

        return value && value.length ? value[0] : !data[0].isLeaf ? data[0].value : '';
    };

    Menu.prototype.render = function render() {
        var _classNames,
            _this2 = this;

        var _props = this.props,
            className = _props.className,
            style = _props.style,
            height = _props.height,
            _props$data = _props.data,
            data = _props$data === undefined ? [] : _props$data,
            prefixCls = _props.prefixCls,
            value = _props.value,
            level = _props.level;
        var firstLevelSelectValue = this.state.firstLevelSelectValue;

        var subMenuData = data[0].children || [];
        if (level !== 2) {
            subMenuData = data;
        } else if (firstLevelSelectValue) {
            subMenuData = data.filter(function (dataItem) {
                return dataItem.value === firstLevelSelectValue;
            })[0].children || [];
        }
        var subValue = value && value.length && value[value.length - 1];
        var subSelInitItem = subMenuData.filter(function (dataItem) {
            return dataItem.value === subValue;
        });
        var heightStyle = {
            height: Math.round(height || document.documentElement.clientHeight / 2) + 'px',
            overflowY: 'scroll'
        };
        return _react2["default"].createElement("div", { className: (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls, true), (0, _defineProperty3["default"])(_classNames, className, !!className), _classNames)), style: (0, _objectAssign2["default"])({}, style, heightStyle) }, _react2["default"].createElement(_flex2["default"], { align: "top" }, level === 2 ? _react2["default"].createElement(_flex2["default"].Item, { style: heightStyle }, _react2["default"].createElement(_list2["default"], null, data.map(function (dataItem, index) {
            return _react2["default"].createElement(_list2["default"].Item, { className: dataItem.value === firstLevelSelectValue ? prefixCls + '-selected' : '', onClick: function onClick() {
                    return _this2.onClickFirstLevelItem(dataItem);
                }, key: 'listitem-1-' + index }, dataItem.label);
        }))) : null, _react2["default"].createElement(_flex2["default"].Item, { style: heightStyle }, _react2["default"].createElement(_SubMenu2["default"], { subMenuPrefixCls: this.props.subMenuPrefixCls, radioPrefixCls: this.props.radioPrefixCls, subMenuData: subMenuData, selItem: subSelInitItem, onSel: this.onClickSubMenuItem }))));
    };

    return Menu;
}(_react2["default"].Component);

exports["default"] = Menu;

Menu.defaultProps = {
    prefixCls: 'am-menu',
    subMenuPrefixCls: 'am-sub-menu',
    radioPrefixCls: 'am-radio',
    data: [],
    level: 2,
    onChange: function onChange() {}
};
module.exports = exports['default'];