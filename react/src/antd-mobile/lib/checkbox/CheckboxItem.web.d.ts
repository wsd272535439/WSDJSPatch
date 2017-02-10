/// <reference types="react" />
import React from 'react';
import { CheckboxItemProps } from './PropsType';
export default class CheckboxItem extends React.Component<CheckboxItemProps, any> {
    static defaultProps: {
        prefixCls: string;
        listPrefixCls: string;
    };
    render(): JSX.Element;
}
