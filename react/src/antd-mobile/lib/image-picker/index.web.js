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

var _wingBlank = require('../wing-blank');

var _wingBlank2 = _interopRequireDefault(_wingBlank);

var _flex = require('../flex');

var _flex2 = _interopRequireDefault(_flex);

var _toast = require('../toast');

var _toast2 = _interopRequireDefault(_toast);

var _touchableButton = require('./touchableButton.web');

var _touchableButton2 = _interopRequireDefault(_touchableButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function noop() {}

var ImagePicker = function (_React$Component) {
    (0, _inherits3["default"])(ImagePicker, _React$Component);

    function ImagePicker() {
        (0, _classCallCheck3["default"])(this, ImagePicker);

        // http://stackoverflow.com/questions/7584794/accessing-jpeg-exif-rotation-data-in-javascript-on-the-client-side
        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));

        _this.getOrientation = function (file, callback) {
            if (!/iphone|ipad/i.test(navigator.userAgent)) {
                callback('-1');
            } else {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var view = new DataView(e.target.result);
                    if (view.getUint16(0, false) !== 0xFFD8) {
                        return callback(-2);
                    }
                    var length = view.byteLength;
                    var offset = 2;
                    while (offset < length) {
                        var marker = view.getUint16(offset, false);
                        offset += 2;
                        if (marker === 0xFFE1) {
                            var tmp = view.getUint32(offset += 2, false);
                            if (tmp !== 0x45786966) {
                                return callback(-1);
                            }
                            var little = view.getUint16(offset += 6, false) === 0x4949;
                            offset += view.getUint32(offset + 4, little);
                            var tags = view.getUint16(offset, little);
                            offset += 2;
                            for (var i = 0; i < tags; i++) {
                                if (view.getUint16(offset + i * 12, little) === 0x0112) {
                                    return callback(view.getUint16(offset + i * 12 + 8, little));
                                }
                            }
                        } else if ((marker & 0xFF00) !== 0xFF00) {
                            break;
                        } else {
                            offset += view.getUint16(offset, false);
                        }
                    }
                    return callback(-1);
                };
                reader.readAsArrayBuffer(file.slice(0, 64 * 1024));
            }
        };
        _this.removeImage = function (index) {
            var newImages = [];
            var _this$props$files = _this.props.files,
                files = _this$props$files === undefined ? [] : _this$props$files;

            files.forEach(function (image, idx) {
                if (index !== idx) {
                    newImages.push(image);
                }
            });
            if (_this.props.onChange) {
                _this.props.onChange(newImages, 'remove', index);
            }
        };
        _this.addImage = function (imgItem) {
            var _this$props$files2 = _this.props.files,
                files = _this$props$files2 === undefined ? [] : _this$props$files2;

            var newImages = files.concat(imgItem);
            if (_this.props.onChange) {
                _this.props.onChange(newImages, 'add');
            }
        };
        _this.onImageClick = function (index) {
            if (_this.props.onImageClick) {
                _this.props.onImageClick(index, _this.props.files);
            }
        };
        _this.onFileChange = function () {
            var fileSelectorEl = _this.refs.fileSelectorInput;
            if (fileSelectorEl.files && fileSelectorEl.files.length) {
                (function () {
                    var file = fileSelectorEl.files[0];
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        var dataURL = e.target.result;
                        if (!dataURL) {
                            _toast2["default"].fail('图片获取失败');
                            return;
                        }
                        var orientation = 1;
                        _this.getOrientation(file, function (res) {
                            // -2: not jpeg , -1: not defined
                            if (res > 0) {
                                orientation = res;
                            }
                            _this.addImage({
                                url: dataURL,
                                orientation: orientation,
                                file: file
                            });
                            fileSelectorEl.value = '';
                        });
                    };
                    reader.readAsDataURL(file);
                })();
            }
        };
        return _this;
    }

    ImagePicker.prototype.render = function render() {
        var _classNames,
            _this2 = this;

        var _props = this.props,
            prefixCls = _props.prefixCls,
            style = _props.style,
            className = _props.className,
            _props$files = _props.files,
            files = _props$files === undefined ? [] : _props$files,
            selectable = _props.selectable,
            onAddImageClick = _props.onAddImageClick;

        var dpr = window.devicePixelRatio || 1;
        var imgItemList = [];
        var customWidth = (document.documentElement.clientWidth - 18 * dpr - 6 * dpr * 3) / 4;
        var wrapCls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, '' + prefixCls, true), (0, _defineProperty3["default"])(_classNames, className, className), _classNames));
        var itemStyle = {
            width: customWidth + 'px',
            height: customWidth + 'px'
        };
        files.forEach(function (image, index) {
            imgItemList.push(_react2["default"].createElement("div", { key: index, className: prefixCls + '-item', style: itemStyle }, _react2["default"].createElement("div", { className: prefixCls + '-item-remove', onClick: function onClick() {
                    _this2.removeImage(index);
                } }), _react2["default"].createElement("div", { className: prefixCls + '-item-content', onClick: function onClick() {
                    _this2.onImageClick(index);
                }, style: { backgroundImage: 'url(' + image.url + ')' } })));
        });
        return _react2["default"].createElement("div", { className: wrapCls, style: style }, _react2["default"].createElement("div", { className: prefixCls + '-list' }, _react2["default"].createElement(_wingBlank2["default"], { size: "md" }, _react2["default"].createElement(_flex2["default"], { wrap: "wrap" }, imgItemList, selectable && _react2["default"].createElement(_touchableButton2["default"], { prefixCls: prefixCls + '-upload-btn', className: prefixCls + '-item ' + prefixCls + '-upload-btn', style: itemStyle, onClick: function onClick() {
                if (onAddImageClick) {
                    onAddImageClick();
                }
            } }, !onAddImageClick ? _react2["default"].createElement("input", { style: itemStyle, ref: "fileSelectorInput", type: "file", accept: "image/jpg,image/jpeg,image/png,image/gif", onChange: function onChange() {
                _this2.onFileChange();
            } }) : null)))));
    };

    return ImagePicker;
}(_react2["default"].Component);

exports["default"] = ImagePicker;

ImagePicker.defaultProps = {
    prefixCls: 'am-image-picker',
    files: [],
    onChange: noop,
    onImageClick: noop,
    selectable: true
};
module.exports = exports['default'];