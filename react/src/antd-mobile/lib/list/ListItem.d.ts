/// <reference types="react" />
import React from 'react';
import { ListItemProps } from './PropsType';
export default class Item extends React.Component<ListItemProps, any> {
    static defaultProps: {
        error: boolean;
        multipleLine: boolean;
        wrap: boolean;
    };
    static Brief: any;
    render(): JSX.Element;
}
