import { Skeleton, SkeletonProps } from '@mantine/core';
import React from 'react';

export const DsmButtonSkeleton = (props: SkeletonProps) => {
  const { visible, width: skeletonWidth = 100, ...restProps } = props;
  return (
    <Skeleton
      visible={visible}
      width={!visible ? 'fit-content' : skeletonWidth}
      radius={4}
      {...restProps}
    />
  );
};
