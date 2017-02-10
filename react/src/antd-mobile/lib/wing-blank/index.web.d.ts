/// <reference types="react" />
import React from 'react';
import WingBlankProps from './PropsType';
export default class WingBlank extends React.Component<WingBlankProps, any> {
    static defaultProps: {
        prefixCls: string;
        size: string;
    };
    render(): JSX.Element;
}
