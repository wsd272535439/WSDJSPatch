/// <reference types="react" />
import React from 'react';
import SwipeActionProps from './PropsType';
declare class SwipeAction extends React.Component<SwipeActionProps, any> {
    static defaultProps: {
        autoClose: boolean;
        disabled: boolean;
        left: never[];
        right: never[];
        onOpen(): void;
        onClose(): void;
    };
    render(): JSX.Element;
}
export default SwipeAction;
