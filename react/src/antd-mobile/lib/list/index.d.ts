/// <reference types="react" />
import React from 'react';
import Item from './ListItem';
import { ListProps } from './PropsType';
export default class List extends React.Component<ListProps, any> {
    static Item: typeof Item;
    render(): JSX.Element;
}
