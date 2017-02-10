/// <reference types="react" />
import React from 'react';
import { SearchBarProps, SearchBarState } from './PropsType';
export default class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
    static defaultProps: any;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    onSubmit: (e: any) => void;
    onChangeText: (value: any) => void;
    onCancel: () => void;
    render(): JSX.Element;
}
