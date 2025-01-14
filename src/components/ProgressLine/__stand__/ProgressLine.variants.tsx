import { useNumber, useSelect } from '@consta/stand';
import React from 'react';

import { ProgressLine } from '../ProgressLine';
import { defaultProgressLinePropSize, progressLinePropSize } from '../types';

const Variants = () => {
  const steps = useNumber('steps', undefined);
  const size = useSelect(
    'size',
    progressLinePropSize,
    defaultProgressLinePropSize,
  );
  const value = useNumber('value', undefined);

  return (
    <ProgressLine
      size={size}
      value={value}
      steps={
        Number(steps) > 0
          ? Array.from({ length: Number(steps) }, (_, i) => i + 1)
          : undefined
      }
      getItemLabel={(item) => item?.toString()}
    />
  );
};

export default Variants;
