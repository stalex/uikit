import './CheckboxGroupExampleSize.css';

import React from 'react';

import { cn } from '##/utils/bem';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { Item, items } from '../../../__mocks__/data.mock';
import { CheckboxGroup } from '../../../CheckboxGroupDeprecated';

const cnCheckboxGroupExampleSize = cn('CheckboxGroupExampleSize');

export function CheckboxGroupExampleSize() {
  const [value, setValue] = React.useState<Item[] | null>(null);

  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <CheckboxGroup
        value={value}
        items={items}
        className={cnCheckboxGroupExampleSize()}
        getLabel={(item) => item.name}
        getDisabled={(item) => item.disabled}
        onChange={({ value }) => setValue(value)}
        name="CheckboxGroup"
        direction="row"
        size="m"
      />
      <CheckboxGroup
        value={value}
        items={items}
        className={cnCheckboxGroupExampleSize()}
        getLabel={(item) => item.name}
        getDisabled={(item) => item.disabled}
        onChange={({ value }) => setValue(value)}
        name="CheckboxGroup"
        direction="row"
        size="l"
      />
    </StoryBookExample>
  );
}
