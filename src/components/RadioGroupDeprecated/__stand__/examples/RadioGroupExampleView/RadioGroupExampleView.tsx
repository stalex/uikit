import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { simpleItems } from '../../../__mocks__/data.mock';
import { RadioGroup } from '../../../RadioGroupDeprecated';

export function RadioGroupExampleView() {
  const [value, setValue] = React.useState<string | null>(simpleItems[0]);

  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <RadioGroup
        value={value}
        items={simpleItems}
        getLabel={(item) => item}
        onChange={({ value }) => setValue(value)}
        direction="row"
        view="primary"
      />
      <RadioGroup
        value={value}
        items={simpleItems}
        getLabel={(item) => item}
        onChange={({ value }) => setValue(value)}
        direction="row"
        view="ghost"
      />
    </StoryBookExample>
  );
}
