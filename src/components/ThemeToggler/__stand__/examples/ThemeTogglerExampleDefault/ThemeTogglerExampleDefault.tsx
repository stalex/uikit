import './ThemeTogglerExampleDefault.css';

import React, { useState } from 'react';

import { cn } from '##/utils/bem';

import { Theme } from '../../../../Theme/Theme';
import {
  exampleThemesThree,
  Theme as ThemeType,
} from '../../../__mocks__/data.mock';
import { ThemeToggler } from '../../../ThemeToggler';

const cnThemeTogglerExampleDefault = cn('ThemeTogglerExampleDefault');

export const ThemeTogglerExampleDefault = () => {
  const [value, setValue] = useState<ThemeType>(exampleThemesThree[0]);

  return (
    <Theme preset={value.theme} className={cnThemeTogglerExampleDefault()}>
      <ThemeToggler
        items={exampleThemesThree}
        value={value}
        onChange={({ value }) => setValue(value)}
        direction="downStartLeft"
      />
    </Theme>
  );
};
