import { type TransactionType } from '@app/entities/Transaction';
import { iconsMap } from './iconsMap';

interface CategoryIconProps {
  type: TransactionType;
  category?: string;
}

export function CategoryIcon({ type, category }: CategoryIconProps) {
  const Icon =
    iconsMap[type][
      category as keyof (typeof iconsMap.EXPENSE | typeof iconsMap.INCOME)
    ] ?? iconsMap[type].default;

  return <Icon />;
}
