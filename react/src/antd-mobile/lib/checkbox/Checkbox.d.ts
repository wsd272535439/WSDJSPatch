/// <reference types="react" />
import React from 'react';
import { CheckboxProps } from './PropsType';
export default class Checkbox extends React.Component<CheckboxProps, any> {
    static CheckboxItem: any;
    static AgreeItem: any;
    constructor(props: CheckboxProps, context: any);
    componentWillReceiveProps(nextProps: CheckboxProps): void;
    handleClick: () => void;
    render(): JSX.Element;
}
