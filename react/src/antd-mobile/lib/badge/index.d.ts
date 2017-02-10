/// <reference types="react" />
import React from 'react';
import BadgeProps from './PropsType';
export default class Badge extends React.Component<BadgeProps, any> {
    static defaultProps: {
        size: string;
        overflowCount: number;
        corner: boolean;
        dot: boolean;
    };
    render(): JSX.Element;
}
