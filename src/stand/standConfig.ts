import { createConfig } from '@consta/stand';

import image from './ConstaImage.png';
import description from './description.mdx';
import { StandPageDecoration as standPageDecoration } from './standPageDecoration';

export const { createStand } = createConfig({
  title: 'Consta UI Kit',
  id: 'uikit',
  groups: [
    {
      title: 'О дизайн-системе',
      id: 'about',
    },
    {
      title: 'Компоненты',
      id: 'components',
      view: 'card',
    },
    {
      title: 'Миксины',
      id: 'mixs',
    },
    {
      title: 'Hocs',
      id: 'hocs',
    },
    {
      title: 'Hooks',
      id: 'hooks',
    },
    {
      title: 'Тематизация',
      id: 'theme',
    },
    {
      title: 'Как работать с Consta',
      id: 'workflow',
    },
    {
      title: 'Кастомизация',
      id: 'custom',
    },
    {
      title: 'Правила и справочники',
      id: 'reference',
    },
  ],
  group: 'библиотеки компонентов',
  image,
  description,
  standPageDecoration,
  repositoryUrl: 'https://github.com/consta-design-system/uikit',
});
