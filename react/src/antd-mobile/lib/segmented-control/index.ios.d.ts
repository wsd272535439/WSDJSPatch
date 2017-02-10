/// <reference types="react" />
import React from 'react';
import SegmentedControlProps from './PropsType';
export default class SegmentedControl extends React.Component<SegmentedControlProps, any> {
    static defaultProps: {
        tintColor: string;
        selectedIndex: number;
    };
    render(): JSX.Element;
}
