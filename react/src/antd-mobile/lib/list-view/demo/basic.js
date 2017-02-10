'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.description = exports.title = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _antdMobile = require('antd-mobile');

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
var NUM_SECTIONS = 5;
var NUM_ROWS_PER_SECTION = 5;
var pageIndex = 0;
exports["default"] = _react2["default"].createClass({
    displayName: 'basic',
    getInitialState: function getInitialState() {
        var _this = this;

        var getSectionData = function getSectionData(dataBlob, sectionID) {
            return dataBlob[sectionID];
        };
        var getRowData = function getRowData(dataBlob, _sectionID, rowID) {
            return dataBlob[rowID];
        };
        var dataSource = new _antdMobile.ListView.DataSource({
            getRowData: getRowData,
            getSectionHeaderData: getSectionData,
            rowHasChanged: function rowHasChanged(row1, row2) {
                return row1 !== row2;
            },
            sectionHeaderHasChanged: function sectionHeaderHasChanged(s1, s2) {
                return s1 !== s2;
            }
        });
        this.dataBlob = {};
        this.sectionIDs = [];
        this.rowIDs = [];
        this._genData = function () {
            var pIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            for (var i = 0; i < NUM_SECTIONS; i++) {
                var ii = pIndex * NUM_SECTIONS + i;
                var sectionName = 'Section ' + ii;
                _this.sectionIDs.push(sectionName);
                _this.dataBlob[sectionName] = sectionName;
                _this.rowIDs[ii] = [];
                for (var jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
                    var rowName = 'S' + ii + ', R' + jj;
                    _this.rowIDs[ii].push(rowName);
                    _this.dataBlob[rowName] = rowName;
                }
            }
            // new object ref
            _this.sectionIDs = [].concat(_this.sectionIDs);
            _this.rowIDs = [].concat(_this.rowIDs);
        };
        this._genData();
        return {
            dataSource: dataSource.cloneWithRowsAndSections(this.dataBlob, this.sectionIDs, this.rowIDs),
            headerPressCount: 0
        };
    },
    onEndReached: function onEndReached(_event) {
        var _this2 = this;

        // load new data
        this.setState({ isLoading: true });
        setTimeout(function () {
            _this2._genData(++pageIndex);
            _this2.setState({
                dataSource: _this2.state.dataSource.cloneWithRowsAndSections(_this2.dataBlob, _this2.sectionIDs, _this2.rowIDs),
                isLoading: false
            });
        }, 1000);
    },
    render: function render() {
        var _this3 = this;

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
                }] }, _react2["default"].createElement(_reactNative.Image, { style: [{ height: 64, width: 64, marginRight: 8 }], source: { uri: obj.img } }), _react2["default"].createElement(_reactNative.View, null, _react2["default"].createElement(_reactNative.Text, null, obj.des, " - ", rowID), _react2["default"].createElement(_reactNative.Text, null, _this3.props.highlightRow), _react2["default"].createElement(_reactNative.Text, null, _react2["default"].createElement(_reactNative.Text, { style: [{ fontSize: 24, color: '#FF6E27' }] }, "35"), "元/任务"))))));
        };
        return _react2["default"].createElement(_antdMobile.ListView, { dataSource: this.state.dataSource, renderHeader: function renderHeader() {
                return _react2["default"].createElement(_reactNative.Text, { style: [{ padding: 30 }] }, "列表头");
            }, renderFooter: function renderFooter() {
                return _react2["default"].createElement(_reactNative.Text, { style: [{ padding: 30, textAlign: 'center' }] }, _this3.state.isLoading ? '加载中...' : '加载完毕');
            }, renderSectionHeader: function renderSectionHeader(sectionData) {
                return _react2["default"].createElement(_reactNative.Text, { style: [{
                        padding: 10, color: 'blue',
                        backgroundColor: 'rgba(150, 150, 150, 0.6)'
                    }] }, '\u4EFB\u52A1 ' + sectionData.split(' ')[1]);
            }, renderRow: row, renderSeparator: separator, pageSize: 4, onEndReached: this.onEndReached, onEndReachedThreshold: 10, onChangeVisibleRows: function onChangeVisibleRows(_visibleRows, _changedRows) {
                // console.log(visibleRows, changedRows);
            } });
    }
});
var title = exports.title = 'ListView';
var description = exports.description = 'ListView example';