/// <reference types="react" />
import React from 'react';
import tsPropsType from './PropsType';
import IndexedList from './Indexed.web';
export default class ListView extends React.Component<tsPropsType, any> {
    static defaultProps: {
        prefixCls: string;
        listPrefixCls: string;
    };
    static DataSource: any;
    static IndexedList: typeof IndexedList;
    render(): JSX.Element;
}
