import { iconsMap } from './iconsMap';

type BankAccountIconProps = {
  type: keyof typeof iconsMap;
};

export function BankAccountIcon({ type }: BankAccountIconProps) {
  const Icon = iconsMap[type];

  return <Icon />;
}
