/// <reference types="react" />
import React from 'react';
import { RadioProps } from './PropsType';
export default class Radio extends React.Component<RadioProps, any> {
    static RadioItem: any;
    static defaultProps: {
        prefixCls: string;
        wrapLabel: boolean;
    };
    render(): JSX.Element;
}
