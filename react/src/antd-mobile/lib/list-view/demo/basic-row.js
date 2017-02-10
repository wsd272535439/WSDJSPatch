'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.description = exports.title = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _antdMobile = require('antd-mobile');

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var data = [{
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: '相约酒店',
    des: '不是所有的兼职汪都需要风吹日晒'
}, {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '麦当劳邀您过周末',
    des: '不是所有的兼职汪都需要风吹日晒'
}, {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: '食惠周',
    des: '不是所有的兼职汪都需要风吹日晒'
}];
var index = data.length - 1;
var NUM_ROWS = 20;
var pageIndex = 0;
exports["default"] = _react2["default"].createClass({
    displayName: 'basic-row',
    getInitialState: function getInitialState() {
        var dataSource = new _antdMobile.ListView.DataSource({
            rowHasChanged: function rowHasChanged(row1, row2) {
                return row1 !== row2;
            }
        });
        this.genData = function () {
            var pIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            var dataBlob = {};
            for (var i = 0; i < NUM_ROWS; i++) {
                var ii = pIndex * NUM_ROWS + i;
                dataBlob['' + ii] = 'row - ' + ii;
            }
            return dataBlob;
        };
        this.rData = {};
        return {
            dataSource: dataSource.cloneWithRows(this.genData()),
            isLoading: false
        };
    },
    onEndReached: function onEndReached(_event) {
        var _this = this;

        // load new data
        // console.log('reach end', event);
        this.setState({ isLoading: true });
        setTimeout(function () {
            _this.rData = (0, _objectAssign2["default"])({}, _this.rData, _this.genData(++pageIndex));
            _this.setState({
                dataSource: _this.state.dataSource.cloneWithRows(_this.rData),
                isLoading: false
            });
        }, 1000);
    },
    render: function render() {
        var _this2 = this;

        var separator = function separator(sectionID, rowID) {
            return _react2["default"].createElement(_reactNative.View, { key: sectionID + '-' + rowID, style: {
                    backgroundColor: '#F5F5F9',
                    height: 8,
                    borderStyle: 'solid',
                    borderTopWidth: 1,
                    borderTopColor: '#ECECED',
                    borderBottomWidth: 1,
                    borderBottomColor: '#ECECED'
                } });
        };
        var row = function row(_rowData, sectionID, rowID) {
            var highlightRow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (_sId, _rId) {};

            if (index < 0) {
                index = data.length - 1;
            }
            var obj = data[index--];
            return _react2["default"].createElement(_reactNative.View, { key: rowID }, _react2["default"].createElement(_reactNative.TouchableHighlight, { underlayColor: 'rgba(100,100,100,0.2)', style: [{
                    padding: 8,
                    backgroundColor: 'white'
                }], onPress: function onPress() {
                    highlightRow(sectionID, rowID);
                } }, _react2["default"].createElement(_reactNative.View, null, _react2["default"].createElement(_reactNative.View, { style: [{
                    marginBottom: 8,
                    borderStyle: 'solid',
                    borderBottomWidth: 1,
                    borderBottomColor: '#F6F6F6'
                }] }, _react2["default"].createElement(_reactNative.Text, { style: {
                    fontSize: 18,
                    fontWeight: '500',
                    padding: 2
                } }, obj.title)), _react2["default"].createElement(_reactNative.View, { style: [{
                    flexDirection: 'row'
                }] }, _react2["default"].createElement(_reactNative.Image, { style: [{ height: 64, width: 64, marginRight: 8 }], source: { uri: obj.img } }), _react2["default"].createElement(_reactNative.View, null, _react2["default"].createElement(_reactNative.Text, null, obj.des, " - ", rowID), _react2["default"].createElement(_reactNative.Text, null, _this2.props.highlightRow), _react2["default"].createElement(_reactNative.Text, null, _react2["default"].createElement(_reactNative.Text, { style: [{ fontSize: 24, color: '#FF6E27' }] }, "35"), "元/任务"))))));
        };
        return _react2["default"].createElement(_antdMobile.ListView, { dataSource: this.state.dataSource, renderHeader: function renderHeader() {
                return _react2["default"].createElement(_reactNative.Text, null, "header");
            }, renderFooter: function renderFooter() {
                return _react2["default"].createElement(_reactNative.Text, { style: { padding: 30, textAlign: 'center' } }, _this2.state.isLoading ? '加载中...' : '加载完毕');
            }, renderRow: row, renderSeparator: separator, pageSize: 4, scrollRenderAheadDistance: 500, scrollEventThrottle: 20, onEndReached: this.onEndReached, onEndReachedThreshold: 10, onChangeVisibleRows: function onChangeVisibleRows(_visibleRows, _changedRows) {
                /* tslint no-console: 0 */
                // console.log(visibleRows, changedRows);
            } });
    }
});
var title = exports.title = 'ListView Row';
var description = exports.description = 'ListView Row example';