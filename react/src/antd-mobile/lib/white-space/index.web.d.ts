/// <reference types="react" />
import React from 'react';
import WhiteSpaceProps from './PropsType';
export default class WhiteSpace extends React.Component<WhiteSpaceProps, any> {
    static defaultProps: {
        prefixCls: string;
        size: string;
    };
    render(): JSX.Element;
}
