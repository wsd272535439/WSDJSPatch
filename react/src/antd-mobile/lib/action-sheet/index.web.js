'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rcDialog = require('rc-dialog');

var _rcDialog2 = _interopRequireDefault(_rcDialog);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _index = require('../icon/index.web');

var _index2 = _interopRequireDefault(_index);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _getDataAttr = require('../_util/getDataAttr');

var _getDataAttr2 = _interopRequireDefault(_getDataAttr);

var _ButtonListItem = require('./ButtonListItem.web');

var _ButtonListItem2 = _interopRequireDefault(_ButtonListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};

var NORMAL = 'NORMAL';
var SHARE = 'SHARE';
function noop() {}
var queue = [];
function createActionSheet(flag, config, callback) {
    var _classNames;

    var props = (0, _objectAssign2["default"])({}, {
        prefixCls: 'am-action-sheet',
        cancelButtonText: '取消'
    }, config);
    var prefixCls = props.prefixCls,
        className = props.className,
        transitionName = props.transitionName,
        maskTransitionName = props.maskTransitionName,
        _props$maskClosable = props.maskClosable,
        maskClosable = _props$maskClosable === undefined ? true : _props$maskClosable;

    var div = document.createElement('div');
    document.body.appendChild(div);
    queue.push(close);
    function close() {
        if (div) {
            _reactDom2["default"].unmountComponentAtNode(div);
            div.parentNode.removeChild(div);
            div = null;
            var index = queue.indexOf(close);
            if (index !== -1) {
                queue.splice(index, 1);
            }
        }
    }
    function cb(index) {
        var rowIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var res = callback(index, rowIndex);
        if (res && res.then) {
            res.then(function () {
                close();
            });
        } else {
            close();
        }
    }
    var title = props.title,
        message = props.message,
        options = props.options,
        destructiveButtonIndex = props.destructiveButtonIndex,
        cancelButtonIndex = props.cancelButtonIndex,
        cancelButtonText = props.cancelButtonText;

    var titleMsg = [title ? _react2["default"].createElement("h3", { key: "0", className: prefixCls + '-title' }, title) : null, message ? _react2["default"].createElement("div", { key: "1", className: prefixCls + '-message' }, message) : null];
    var children = null;
    var mode = 'normal';

    (function () {
        switch (flag) {
            case NORMAL:
                mode = 'normal';
                children = _react2["default"].createElement("div", __assign({}, (0, _getDataAttr2["default"])(props)), titleMsg, _react2["default"].createElement("div", { className: prefixCls + '-button-list' }, options.map(function (item, index) {
                    var _cls;

                    var cls = (_cls = {}, (0, _defineProperty3["default"])(_cls, prefixCls + '-button-list-item', true), (0, _defineProperty3["default"])(_cls, prefixCls + '-destructive-button', destructiveButtonIndex === index), (0, _defineProperty3["default"])(_cls, prefixCls + '-cancel-button', cancelButtonIndex === index), _cls);
                    var itemProps = {
                        key: index,
                        prefixCls: prefixCls + '-button-list-item',
                        className: (0, _classnames2["default"])(cls),
                        onClick: function onClick() {
                            return cb(index);
                        }
                    };
                    var bItem = _react2["default"].createElement(_ButtonListItem2["default"], __assign({}, itemProps), item);
                    if (cancelButtonIndex === index || destructiveButtonIndex === index) {
                        bItem = _react2["default"].createElement(_ButtonListItem2["default"], __assign({}, itemProps), item, cancelButtonIndex === index ? _react2["default"].createElement("span", { className: prefixCls + '-cancel-button-mask' }) : null);
                    }
                    return bItem;
                })));
                break;
            case SHARE:
                mode = 'share';
                var multipleLine = options.length && Array.isArray(options[0]) || false;
                var createList = function createList(item, index) {
                    var rowIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                    return _react2["default"].createElement("div", { className: prefixCls + '-share-list-item', key: index, onClick: function onClick() {
                            return cb(index, rowIndex);
                        } }, _react2["default"].createElement("div", { className: prefixCls + '-share-list-item-icon' }, item.iconName ? _react2["default"].createElement(_index2["default"], { type: item.iconName }) : item.icon), _react2["default"].createElement("div", { className: prefixCls + '-share-list-item-title' }, item.title));
                };
                children = _react2["default"].createElement("div", __assign({}, (0, _getDataAttr2["default"])(props)), titleMsg, _react2["default"].createElement("div", { className: prefixCls + '-share' }, multipleLine ? options.map(function (item, index) {
                    return _react2["default"].createElement("div", { key: index, className: prefixCls + '-share-list' }, item.map(function (ii, ind) {
                        return createList(ii, ind, index);
                    }));
                }) : _react2["default"].createElement("div", { className: prefixCls + '-share-list' }, options.map(function (item, index) {
                    return createList(item, index);
                })), _react2["default"].createElement(_ButtonListItem2["default"], { prefixCls: prefixCls + '-share-cancel-button', className: prefixCls + '-share-cancel-button', onClick: function onClick() {
                        return cb(-1);
                    } }, cancelButtonText)));
                break;
            default:
                break;
        }
    })();

    var rootCls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, className, !!className), (0, _defineProperty3["default"])(_classNames, prefixCls + '-' + mode, true), _classNames));
    _reactDom2["default"].render(_react2["default"].createElement(_rcDialog2["default"], { visible: true, title: "", footer: "", prefixCls: prefixCls, className: rootCls, transitionName: transitionName || 'am-slide-up', maskTransitionName: maskTransitionName || 'am-fade', onClose: close, maskClosable: maskClosable, wrapProps: props.wrapProps || {} }, children), div);
    return {
        close: close
    };
}
exports["default"] = {
    showActionSheetWithOptions: function showActionSheetWithOptions(config) {
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

        createActionSheet(NORMAL, config, callback);
    },
    showShareActionSheetWithOptions: function showShareActionSheetWithOptions(config) {
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

        createActionSheet(SHARE, config, callback);
    },
    close: function close() {
        queue.forEach(function (q) {
            return q();
        });
    }
};
module.exports = exports['default'];