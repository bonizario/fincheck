import { ClothesIcon } from './expense/ClothesIcon';
import { DefaultExpenseIcon } from './expense/DefaultExpenseIcon';
import { EducationIcon } from './expense/EducationIcon';
import { FoodIcon } from './expense/FoodIcon';
import { FunIcon } from './expense/FunIcon';
import { GroceryIcon } from './expense/GroceryIcon';
import { HomeIcon } from './expense/HomeIcon';
import { TransportIcon } from './expense/TransportIcon';
import { TravelIcon } from './expense/TravelIcon';
import { DefaultIncomeIcon } from './income/DefaultIncomeIcon';

export const iconsMap = {
  income: {
    default: DefaultIncomeIcon,
  },
  expense: {
    default: DefaultExpenseIcon,
    food: FoodIcon,
    fun: FunIcon,
    grocery: GroceryIcon,
    home: HomeIcon,
    education: EducationIcon,
    clothes: ClothesIcon,
    transport: TransportIcon,
    travel: TravelIcon,
  },
};
