/// <reference types="react" />
import React from 'react';
import { ListItemProps, BriefProps } from './PropsType';
export declare class Brief extends React.Component<BriefProps, any> {
    render(): JSX.Element;
}
declare const highOrderListItem: React.ClassicComponentClass<{
    onTouchStart?: ((e: any) => void) | undefined;
    onTouchEnd?: ((e: any) => void) | undefined;
    onTouchCancel?: ((e: any) => void) | undefined;
    activeStyle?: any;
} & ListItemProps>;
export default highOrderListItem;
