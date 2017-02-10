/// <reference types="react" />
import React from 'react';
import { RadioItemProps } from './PropsType';
export default class RadioItem extends React.Component<RadioItemProps, any> {
    static defaultProps: {
        prefixCls: string;
        listPrefixCls: string;
    };
    render(): JSX.Element;
}
