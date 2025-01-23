import { Button, Tooltip } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';
import classes from './index.module.css';
import { DSMButtonPropsType } from './types';
import { DsmButtonSkeleton } from './skeleton';

export const DSMButton = (props: DSMButtonPropsType) => {
  const {
    tooltipProps = { label: '' },
    children,
    skeletonProps = { visible: false },
    ...restProps
  } = props;
  return (
    <DsmButtonSkeleton {...skeletonProps}>
      <Tooltip
        label=""
        withArrow
        arrowSize={8}
        disabled={!tooltipProps?.label}
        {...tooltipProps}
      >
        <Button
          leftSection={<IconPhoto size={16} />}
          classNames={classes}
          {...restProps}
        >
          {children}
        </Button>
      </Tooltip>
    </DsmButtonSkeleton>
  );
};
