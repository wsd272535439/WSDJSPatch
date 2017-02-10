'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _flex = require('../flex');

var _flex2 = _interopRequireDefault(_flex);

var _carousel = require('../carousel');

var _carousel2 = _interopRequireDefault(_carousel);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Grid = function (_React$Component) {
    (0, _inherits3["default"])(Grid, _React$Component);

    function Grid() {
        (0, _classCallCheck3["default"])(this, Grid);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    Grid.prototype.getFlexItemStyle = function getFlexItemStyle() {
        return {
            height: _reactNative.Dimensions.get('window').width / 4,
            borderRightWidth: this.props.hasLine ? 1 : 0
        };
    };

    Grid.prototype.render = function render() {
        var _props = this.props,
            data = _props.data,
            hasLine = _props.hasLine,
            columnNum = _props.columnNum,
            isCarousel = _props.isCarousel,
            carouselMaxRow = _props.carouselMaxRow,
            _props$onClick = _props.onClick,
            onClick = _props$onClick === undefined ? function () {} : _props$onClick;

        var dataLength = data && data.length || 0;
        var rowCount = Math.ceil(dataLength / columnNum);
        var renderItem = this.props.renderItem || function (dataItem) {
            return _react2["default"].createElement(_flex2["default"], { direction: "column", justify: "center", style: { flex: 1 } }, _react2["default"].createElement(_reactNative.Image, { source: { uri: dataItem.icon }, style: _style2["default"].icon }), _react2["default"].createElement(_reactNative.Text, { style: _style2["default"].text }, dataItem.text));
        };
        var flexItemStyle = this.getFlexItemStyle();
        var rowsArr = [];
        for (var i = 0; i < rowCount; i++) {
            var rowArr = [];

            var _loop = function _loop(j) {
                var dataIndex = i * columnNum + j;
                if (dataIndex < dataLength) {
                    (function () {
                        var el = data && data[dataIndex];
                        rowArr.push(_react2["default"].createElement(_flex2["default"].Item, { key: j, style: [_style2["default"].grayBorderBox, flexItemStyle, {
                                borderLeftWidth: hasLine && j === 0 ? 1 : 0
                            }], onPress: function onPress() {
                                return onClick(el, dataIndex);
                            } }, renderItem(el, dataIndex)));
                    })();
                } else {
                    rowArr.push(_react2["default"].createElement(_flex2["default"].Item, { key: j, style: [_style2["default"].grayBorderBox, flexItemStyle] }));
                }
            };

            for (var j = 0; j < columnNum; j++) {
                _loop(j);
            }
            rowsArr.push(_react2["default"].createElement(_flex2["default"], { key: i, style: [_style2["default"].grayBorderBox, {
                    borderTopWidth: hasLine && i === 0 ? 1 : 0,
                    borderBottomWidth: hasLine ? 1 : 0
                }] }, rowArr));
        }
        var pageCount = Math.ceil(rowCount / carouselMaxRow);
        var pagesArr = [];
        if (isCarousel && pageCount > 1) {
            for (var pageIndex = 0; pageIndex < pageCount; pageIndex++) {
                var pageRows = [];
                for (var ii = 0; ii < carouselMaxRow; ii++) {
                    var rowIndex = pageIndex * carouselMaxRow + ii;
                    if (rowIndex < rowCount) {
                        pageRows.push(rowsArr[rowIndex]);
                    } else {
                        var res = [];
                        for (var jjj = 0; jjj < columnNum; jjj++) {
                            res.push(_react2["default"].createElement(_flex2["default"].Item, { key: jjj, style: [_style2["default"].grayBorderBox, flexItemStyle] }));
                        }
                        pageRows.push(_react2["default"].createElement(_flex2["default"], { key: rowIndex, style: [_style2["default"].grayBorderBox, { borderBottomWidth: hasLine ? 1 : 0 }] }, res));
                    }
                }
                pagesArr.push(_react2["default"].createElement(_reactNative.View, { key: pageIndex, style: [_style2["default"].grayBorderBox, {
                        borderTopWidth: hasLine && pageIndex !== 0 ? 1 : 0
                    }] }, pageRows));
            }
        }
        return _react2["default"].createElement(_flex2["default"], { direction: "column" }, isCarousel && pageCount > 1 ? _react2["default"].createElement(_carousel2["default"], { infinite: false, dots: true }, pagesArr) : rowsArr);
    };

    return Grid;
}(_react2["default"].Component);

exports["default"] = Grid;

Grid.defaultProps = {
    data: [],
    hasLine: true,
    isCarousel: false,
    columnNum: 4,
    carouselMaxRow: 2
};
module.exports = exports['default'];