/// <reference types="react" />
import React from 'react';
import { AgreeItemPropsType } from './PropsType';
export default class AgreeItem extends React.Component<AgreeItemPropsType, any> {
    static defaultProps: {
        prefixCls: string;
    };
    render(): JSX.Element;
}
