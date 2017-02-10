'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rcDialog = require('rc-dialog');

var _rcDialog2 = _interopRequireDefault(_rcDialog);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function create(instanceId, config, content) {
    var afterClose = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (_x) {};

    var props = (0, _objectAssign2["default"])({}, {
        prefixCls: 'am-popup',
        animationType: 'slide-down'
    }, config);
    var prefixCls = props.prefixCls,
        transitionName = props.transitionName,
        maskTransitionName = props.maskTransitionName,
        _props$maskClosable = props.maskClosable,
        maskClosable = _props$maskClosable === undefined ? true : _props$maskClosable,
        animationType = props.animationType;

    var div = document.createElement('div');
    document.body.appendChild(div);
    function close() {
        if (div) {
            _reactDom2["default"].unmountComponentAtNode(div);
            div.parentNode.removeChild(div);
            div = null;
        }
        afterClose(instanceId);
    }
    var transName = 'am-slide-down';
    if (animationType === 'slide-up') {
        transName = 'am-slide-up';
    }
    // 在 iPhone 上拖动 mask 蒙层、会触发最顶部或最底部的、页面回弹后的留白，解决办法是，禁掉 mask 蒙层的 onTouchStart 事件。
    // 但由于以下原因：
    // Popup 组件底层依赖 [rc-dialog](https://github.com/react-component/dialog)
    // 而 rc-dialog 点击 mask 蒙层关闭弹出框的事件是绑定在 classname 为 rc-dialog-wrap 的 dom 节点上，
    // 此节点是弹出层中主要内容的“父节点”，而非正常的“兄弟节点”。相关 issue https://github.com/react-component/dialog/issues/40
    // 所以、相对于 antd-mobile@0.9.8 以及之前的版本的变化是：
    // 去掉 am-popup-wrap 设置的 `position: fixed; top: 0; bottom: 0; ...` 样式，并给 am-popup 设置 z-index .
    // 另外不使用 rc-dialog 提供的 maskClosable 功能，而改为在这里实现
    var maskProps = {
        onClick: function onClick(e) {
            e.preventDefault();
            if (maskClosable) {
                if (props.onMaskClose && typeof props.onMaskClose === 'function') {
                    var res = props.onMaskClose();
                    if (res && res.then) {
                        res.then(function () {
                            close();
                        });
                    } else {
                        close();
                    }
                } else {
                    close();
                }
            }
        }
    };
    _reactDom2["default"].render(_react2["default"].createElement(_rcDialog2["default"], { prefixCls: prefixCls, visible: true, title: "", footer: "", className: prefixCls + '-' + animationType, transitionName: transitionName || transName, maskTransitionName: maskTransitionName || 'am-fade', maskClosable: maskClosable, wrapProps: props.wrapProps || {}, maskProps: props.maskProps || maskProps }, content), div);
    return {
        instanceId: instanceId,
        close: close
    };
}
var ins = {
    defaultInstance: null,
    instances: []
};
var instanceId = 1;

var Popup = function Popup() {
    (0, _classCallCheck3["default"])(this, Popup);
};

exports["default"] = Popup;

Popup.newInstance = function () {
    var j = void 0;
    return {
        show: function show(content, config) {
            j = create(instanceId++, config, content, function (iId) {
                for (var i = 0; i < ins.instances.length; i++) {
                    if (ins.instances[i].instanceId === iId) {
                        ins.instances.splice(i, 1);
                        return;
                    }
                }
            });
            ins.instances.push(j);
        },
        hide: function hide() {
            j.close();
        }
    };
};
Popup.show = function (content, config) {
    Popup.hide();
    ins.defaultInstance = create('0', config, content, function (iId) {
        if (iId === '0') {
            ins.defaultInstance = null;
        }
    });
};
Popup.hide = function () {
    if (ins.defaultInstance) {
        ins.defaultInstance.close();
    }
};
module.exports = exports['default'];