/// <reference types="react" />
import React from 'react';
import SwipeActionProps from './PropsType';
export interface ButtonProps {
    text?: string;
    onPress?: () => void;
    style?: {};
}
declare class SwipeAction extends React.Component<SwipeActionProps, any> {
    static defaultProps: {
        prefixCls: string;
        title: string;
        autoClose: boolean;
        disabled: boolean;
        left: never[];
        right: never[];
        onOpen(): void;
        onClose(): void;
    };
    constructor(props: any);
    onLongTap: () => void;
    onClose(): void;
    renderAndroid(): JSX.Element;
    render(): JSX.Element;
}
export default SwipeAction;
