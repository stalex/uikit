import { PropsWithHTMLAttributesAndRef } from '../../utils/types/PropsWithHTMLAttributes';

export type SwitchGroupDefaultItem = {
  label: string;
  disabled?: boolean;
};

export const switchGroupDirections = ['column', 'row'] as const;
export type SwitchGroupDirection = typeof switchGroupDirections[number];
export const switchGroupDefaultDirection: SwitchGroupDirection =
  switchGroupDirections[0];

export const switchGroupSizes = ['m', 'l'] as const;
export type SwitchGroupPropSize = typeof switchGroupSizes[number];
export const switchGroupDefaultSize: SwitchGroupPropSize = switchGroupSizes[0];

export const switchGroupViews = ['primary', 'ghost'] as const;
export type SwitchGroupPropView = typeof switchGroupViews[number];
export const switchGroupDefaultView: SwitchGroupPropView = switchGroupViews[0];

export type SwitchGroupPropGetItemLabel<ITEM> = (item: ITEM) => string;
export type SwitchGroupPropGetItemDisabled<ITEM> = (
  item: ITEM,
) => boolean | undefined;

export type SwitchGroupProps<ITEM = SwitchGroupDefaultItem> =
  PropsWithHTMLAttributesAndRef<
    {
      value?: ITEM[] | null;
      items: ITEM[];
      getItemLabel?: SwitchGroupPropGetItemLabel<ITEM>;
      getItemDisabled?: SwitchGroupPropGetItemDisabled<ITEM>;
      onChange: (props: {
        e: React.ChangeEvent<HTMLInputElement>;
        value: ITEM[] | null;
      }) => void;
      name: string;
      direction?: SwitchGroupDirection;
      size?: SwitchGroupPropSize;
      view?: SwitchGroupPropView;
      disabled?: boolean;
      className?: string;
    },
    HTMLDivElement
  > &
    (ITEM extends { label: SwitchGroupDefaultItem['label'] }
      ? {}
      : {
          getItemLabel: SwitchGroupPropGetItemLabel<ITEM>;
        });

export type SwitchGroupComponent = <ITEM>(
  props: SwitchGroupProps<ITEM>,
) => React.ReactElement | null;
