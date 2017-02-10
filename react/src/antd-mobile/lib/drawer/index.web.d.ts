/// <reference types="react" />
import React from 'react';
import tsPropsType from './PropsType';
export default class Drawer extends React.Component<tsPropsType, any> {
    static defaultProps: {
        prefixCls: string;
        enableDragHandle: boolean;
    };
    render(): JSX.Element;
}
