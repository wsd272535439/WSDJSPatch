/// <reference types="react" />
import React from 'react';
import { RadioProps } from './PropsType';
export default class Radio extends React.Component<RadioProps, any> {
    static RadioItem: any;
    constructor(props: RadioProps, context: any);
    componentWillReceiveProps(nextProps: RadioProps): void;
    handleClick: () => void;
    render(): JSX.Element;
}
