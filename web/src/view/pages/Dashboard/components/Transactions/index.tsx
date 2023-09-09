import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Swiper, SwiperSlide } from 'swiper/react';

import { MONTHS } from '@app/config/constants';
import { cn } from '@app/utils/cn';
import { formatCurrency } from '@app/utils/formatCurrency';
import { Spinner } from '@view/components/Spinner';
import { FilterIcon } from '@view/components/icons/FilterIcon';
import { TransactionsIcon } from '@view/components/icons/TransactionsIcon';
import { CategoryIcon } from '@view/components/icons/categories/CategoryIcon';
import { SliderNavigation } from './SliderNavigation';
import { SliderOption } from './SliderOption';
import { useTransactionsController } from './useTransactionsController';

export function Transactions() {
  const { areValuesVisible, isLoading } = useTransactionsController();

  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-gray-100 px-4 py-8 md:p-10">
      {isLoading && (
        <div className="flex h-full w-full items-center justify-center">
          <Spinner className="h-9 w-9" />
        </div>
      )}

      {!isLoading && (
        <>
          <header>
            <div className="flex justify-between">
              <button className="flex items-center gap-2">
                <TransactionsIcon />
                <span className="text-sm font-medium tracking-[-0.5px] text-gray-800">
                  Transações
                </span>
                <ChevronDownIcon width={24} height={24} className="text-gray-900" />
              </button>

              <button className="flex items-center gap-2">
                <span className="text-sm font-medium tracking-[-0.5px] text-gray-800">Filtrar</span>
                <FilterIcon />
              </button>
            </div>

            <div className="relative mt-6">
              <Swiper slidesPerView={3} centeredSlides>
                <SliderNavigation />
                {MONTHS.map((month, index) => (
                  <SwiperSlide key={month}>
                    {({ isActive }) => (
                      <SliderOption isActive={isActive} month={month} index={index} />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </header>

          <div className="mt-4 flex-1 space-y-2 overflow-y-auto">
            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <div className="flex flex-1 items-center gap-3">
                <CategoryIcon type="expense" category="food" />

                <div>
                  <strong className="block font-bold tracking-[-0.5px] text-gray-800">
                    Almoço
                  </strong>
                  <span className="text-sm text-gray-600">09/08/2023</span>
                </div>
              </div>

              <span
                className={cn(
                  'font-medium tracking-[-0.5px] text-red-800',
                  !areValuesVisible && 'blur-[6px]'
                )}
              >
                -{formatCurrency(340)}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <div className="flex flex-1 items-center gap-3">
                <CategoryIcon type="income" />

                <div>
                  <strong className="block font-bold tracking-[-0.5px] text-gray-800">
                    Salário
                  </strong>
                  <span className="text-sm text-gray-600">09/08/2023</span>
                </div>
              </div>

              <span
                className={cn(
                  'font-medium tracking-[-0.5px] text-green-800',
                  !areValuesVisible && 'blur-[6px]'
                )}
              >
                +{formatCurrency(4000)}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
