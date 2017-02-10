/// <reference types="react" />
import React from 'react';
import tsPropsType from './PropsType';
export default class MIndexedList extends React.Component<tsPropsType, any> {
    static defaultProps: {
        prefixCls: string;
        listPrefixCls: string;
        listViewPrefixCls: string;
    };
    render(): JSX.Element;
}
