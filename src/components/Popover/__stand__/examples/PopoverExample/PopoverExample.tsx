import './PopoverExample.css';

import React, { useRef, useState } from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { cn } from '../../../../../utils/bem';
import { Button } from '../../../../Button/Button';
import { Text } from '../../../../Text/Text';
import { Popover, Position } from '../../../Popover';

const cnPopoverExample = cn('PopoverExample');

export const PopoverPositionedByCoordsExample = () => {
  const [position, setPosition] = useState<Position>(undefined);

  const handleMouseMove = (event: React.MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <div
        className={cnPopoverExample({ for: 'anchor' })}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setPosition(undefined)}
      >
        <Text>Область, в которой работает отслеживание мышки</Text>
      </div>
      <Popover
        direction="upCenter"
        spareDirection="downStartLeft"
        offset="2xs"
        arrowOffset={0}
        onClickOutside={() => {}}
        isInteractive={false}
        position={position}
      >
        {(direction) => (
          <div className={cnPopoverExample('Content')}>
            <Text size="xs">
              Это содержимое поповера: здесь может быть что угодно, например,
              этот текст.
            </Text>
            <Text size="xs">Направление: {direction}</Text>
          </div>
        )}
      </Popover>
    </StoryBookExample>
  );
};

export const PopoverPositionedByAnchorExample = () => {
  const anchorRef = useRef<HTMLButtonElement>(null);
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const handleClickOnAnchor = () => {
    setIsPopoverVisible(!isPopoverVisible);
  };

  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <div className={cnPopoverExample()}>
        <Button
          label="Нажмите меня"
          type="button"
          onClick={handleClickOnAnchor}
          ref={anchorRef}
        />
      </div>
      {isPopoverVisible && (
        <Popover
          direction="upCenter"
          spareDirection="downStartLeft"
          offset="2xs"
          arrowOffset={0}
          onClickOutside={() => {}}
          isInteractive
          anchorRef={anchorRef}
          equalAnchorWidth={false}
        >
          <div className={cnPopoverExample('Content')}>
            <Text size="xs">
              Это содержимое поповера: здесь может быть что угодно, например,
              этот текст.
            </Text>
          </div>
        </Popover>
      )}
    </StoryBookExample>
  );
};
