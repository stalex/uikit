import './DragNDropFieldExampleMaxSize.css';

import React from 'react';

import { cn } from '##/utils/bem';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { Text } from '../../../../Text/Text';
import { DragNDropField } from '../../../DragNDropField';
import imageFile from './images/too_big_file.png';

export default {
  title: 'Ошибка: файл слишком большой',
};

const image = {
  src: imageFile,
  alt: 'Ошибка: файл слишком большой',
};

const cnDragNDropFieldExampleMaxSize = cn('DragNDropFieldExampleMaxSize');

export const DragNDropFieldExampleMaxSize = () => (
  <StoryBookExample
    className={cnDocsDecorator('Section', [cnDragNDropFieldExampleMaxSize()])}
  >
    <div>
      <DragNDropField
        maxSize={1 * 1024 * 1024}
        onDropFiles={(files) => console.log(files)}
      >
        <Text>Сюда можно перетаскивать файлы</Text>
        <Text>размером 1 Мб или меньше</Text>
      </DragNDropField>
    </div>
  </StoryBookExample>
);

export const DragNDropFieldExampleMaxSizeError = () => (
  <StoryBookExample
    className={cnDocsDecorator('Section', [cnDragNDropFieldExampleMaxSize()])}
  >
    <div>
      <img src={image.src} alt={image.alt} />
    </div>
  </StoryBookExample>
);
