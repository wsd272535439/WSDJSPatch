/// <reference types="react" />
import React from 'react';
import { FlexItemProps } from './PropsType';
export default class FlexItem extends React.Component<FlexItemProps, any> {
    static defaultProps: {
        flex: number;
    };
    render(): JSX.Element;
}
