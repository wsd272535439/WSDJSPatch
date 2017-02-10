/// <reference types="react" />
import React from 'react';
import BadgeProps from './PropsType';
export default class Badge extends React.Component<BadgeProps, any> {
    static defaultProps: {
        prefixCls: string;
        text: null;
        dot: boolean;
        corner: boolean;
        overflowCount: number;
        size: null;
    };
    render(): JSX.Element;
}
