'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactNative = require('react-native');

var styles = _reactNative.StyleSheet.create({
    modal: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    header: {
        flex: 1,
        height: 44,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e7e7e7'
    },
    headerItem: {
        height: 44,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    actionText: {
        color: '#0ae',
        fontSize: 18,
        textAlign: 'center'
    },
    title: {
        color: '#666',
        fontSize: 18,
        textAlign: 'center'
    }
});
exports["default"] = styles;
module.exports = exports['default'];