/// <reference types="react" />
import React from 'react';
import ActivityIndicatorProps from './PropsType';
export default class ActivityIndicator extends React.Component<ActivityIndicatorProps, any> {
    static defaultProps: {
        prefixCls: string;
        animating: boolean;
        size: string;
        color: string;
        panelColor: string;
        toast: boolean;
    };
    render(): JSX.Element | null;
}
