import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { Radio } from '../../../Radio';

const emptyFunction = () => {};

export const RadioExampleSize = () => (
  <StoryBookExample className={cnDocsDecorator('Section')}>
    <Radio
      size="m"
      label="Размер m"
      onChange={emptyFunction}
      checked={undefined}
    />
    <Radio
      size="l"
      label="Размер l"
      onChange={emptyFunction}
      checked={undefined}
    />
  </StoryBookExample>
);
