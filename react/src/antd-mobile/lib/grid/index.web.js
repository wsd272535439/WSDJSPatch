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

var _flex = require('../flex');

var _flex2 = _interopRequireDefault(_flex);

var _index = require('../carousel/index.web');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Grid = function (_React$Component) {
    (0, _inherits3["default"])(Grid, _React$Component);

    function Grid() {
        (0, _classCallCheck3["default"])(this, Grid);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));

        _this.clientWidth = document.documentElement.clientWidth;
        return _this;
    }

    Grid.prototype.render = function render() {
        var _this2 = this,
            _classNames;

        var _props = this.props,
            prefixCls = _props.prefixCls,
            className = _props.className,
            data = _props.data,
            hasLine = _props.hasLine,
            columnNum = _props.columnNum,
            isCarousel = _props.isCarousel,
            carouselMaxRow = _props.carouselMaxRow,
            _props$onClick = _props.onClick,
            _onClick = _props$onClick === undefined ? function () {} : _props$onClick;

        var dataLength = data && data.length || 0;
        var rowCount = Math.ceil(dataLength / columnNum);
        var renderItem = this.props.renderItem || function (dataItem) {
            return _react2["default"].createElement("div", { className: prefixCls + '-item-contain column-num-' + columnNum, style: { height: _this2.clientWidth / columnNum + 'px' } }, _react2["default"].createElement("img", { className: prefixCls + '-icon', src: dataItem.icon }), _react2["default"].createElement("div", { className: prefixCls + '-text' }, dataItem.text));
        };
        var rowsArr = [];
        for (var i = 0; i < rowCount; i++) {
            var rowArr = [];

            var _loop = function _loop(j) {
                var dataIndex = i * columnNum + j;
                if (dataIndex < dataLength) {
                    (function () {
                        var el = data && data[dataIndex];
                        rowArr.push(_react2["default"].createElement(_flex2["default"].Item, { key: 'griditem-' + dataIndex, className: prefixCls + '-item', onClick: function onClick() {
                                return _onClick(el, dataIndex);
                            } }, renderItem(el, dataIndex)));
                    })();
                } else {
                    rowArr.push(_react2["default"].createElement(_flex2["default"].Item, { key: 'griditem-' + dataIndex }));
                }
            };

            for (var j = 0; j < columnNum; j++) {
                _loop(j);
            }
            rowsArr.push(_react2["default"].createElement(_flex2["default"], { justify: "center", align: "stretch", key: 'gridline-' + i }, rowArr));
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
                        // 空节点为了确保末尾页的最后未到底的行有底线(样式中last-child会没线)
                        pageRows.push(_react2["default"].createElement("div", { key: 'gridline-' + rowIndex }));
                    }
                }
                pagesArr.push(_react2["default"].createElement("div", { key: 'pageitem-' + pageIndex, className: prefixCls + '-carousel-page' }, pageRows));
            }
        }
        return _react2["default"].createElement("div", { className: (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls, true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-line', hasLine), (0, _defineProperty3["default"])(_classNames, className, className), _classNames)) }, isCarousel && pageCount > 1 ? _react2["default"].createElement(_index2["default"], null, pagesArr) : rowsArr);
    };

    return Grid;
}(_react2["default"].Component);

exports["default"] = Grid;

Grid.defaultProps = {
    data: [],
    hasLine: true,
    isCarousel: false,
    columnNum: 4,
    carouselMaxRow: 2,
    prefixCls: 'am-grid'
};
module.exports = exports['default'];