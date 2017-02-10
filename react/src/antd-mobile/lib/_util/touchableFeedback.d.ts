/// <reference types="react" />
/**
 *  fix active style
 *  on Uc browser, css :active not work normal
 */
import React from 'react';
export default function touchableFeedback<Props>(ComposedComponent: any, statics?: any): React.ClassicComponentClass<{
    onTouchStart?: ((e: any) => void) | undefined;
    onTouchEnd?: ((e: any) => void) | undefined;
    onTouchCancel?: ((e: any) => void) | undefined;
    activeStyle?: any;
} & Props>;
