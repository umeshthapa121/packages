import * as react_jsx_runtime from 'react/jsx-runtime';
import { ButtonProps, TooltipProps, SkeletonProps } from '@mantine/core';

interface DSMButtonPropsType extends ButtonProps {
    tooltipProps?: Partial<TooltipProps>;
    skeletonProps?: SkeletonProps;
}

declare const DSMButton: (props: DSMButtonPropsType) => react_jsx_runtime.JSX.Element;

export { DSMButton };
