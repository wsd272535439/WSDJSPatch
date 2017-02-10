/// <reference types="react" />
import React from 'react';
import StepProps from './PropsType';
export default class Stepper extends React.Component<StepProps, any> {
    static defaultProps: {
        prefixCls: string;
        step: number;
        readOnly: boolean;
        showNumber: boolean;
        focusOnUpDown: boolean;
    };
    render(): JSX.Element;
}
