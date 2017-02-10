/// <reference types="react" />
import React from 'react';
import SegmentedControlProps from './PropsType';
export default class SegmentedControl extends React.Component<SegmentedControlProps, any> {
    static defaultProps: {
        prefixCls: string;
        selectedIndex: number;
        enabled: boolean;
        values: never[];
        onChange(): void;
        onValueChange(): void;
        style: {};
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    onClick(e: any, index: any, value: any): void;
    render(): JSX.Element;
}
