import { ButtonProps, SkeletonProps, TooltipProps } from '@mantine/core';

export interface DSMButtonPropsType extends ButtonProps {
  tooltipProps?: Partial<TooltipProps>;
  skeletonProps?: SkeletonProps;
}
