/// <reference types="react" />
import React from 'react';
import tsPropsType from './PropsType';
export default class Picker extends React.Component<tsPropsType, any> {
    static defaultProps: {
        prefixCls: string;
        pickerPrefixCls: string;
        popupPrefixCls: string;
        format: (values: any) => any;
        style: {
            left: number;
            bottom: number;
        };
        cols: number;
        value: never[];
        extra: string;
        okText: string;
        dismissText: string;
        title: string;
    };
    getSel: () => void;
    render(): JSX.Element;
}
