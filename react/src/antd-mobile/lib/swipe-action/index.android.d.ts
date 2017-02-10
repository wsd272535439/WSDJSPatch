/// <reference types="react" />
import React from 'react';
import SwipeActionProps from './PropsType';
export interface ButtonProps {
    text?: string;
    onPress?: () => void;
    style?: {};
}
declare class SwipeAction extends React.Component<SwipeActionProps, any> {
    static propTypes: {
        autoClose: React.Requireable<any>;
        disabled: React.Requireable<any>;
        title: React.Requireable<any>;
        left: React.Requireable<any>;
        right: React.Requireable<any>;
        onOpen: React.Requireable<any>;
        onClose: React.Requireable<any>;
        children: React.Requireable<any>;
    };
    static defaultProps: {
        title: string;
        autoClose: boolean;
        disabled: boolean;
        left: never[];
        right: never[];
        onOpen(): void;
        onClose(): void;
    };
    constructor(props: any);
    hide: () => void;
    onClose(): void;
    onLongPress: () => void;
    _renderAndroidModal(): JSX.Element;
    render(): JSX.Element;
}
export default SwipeAction;
