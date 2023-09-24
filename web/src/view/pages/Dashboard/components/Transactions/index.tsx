import { Swiper, SwiperSlide } from 'swiper/react';

import { MONTHS } from '@app/config/constants';
import { cn } from '@app/utils/cn';
import { formatCurrency } from '@app/utils/formatCurrency';
import emptyState from '@assets/empty-state.svg';
import { Spinner } from '@view/components/Spinner';
import { FilterIcon } from '@view/components/icons/FilterIcon';
import { CategoryIcon } from '@view/components/icons/categories/CategoryIcon';
import { FiltersModal } from './FiltersModal';
import { SliderNavigation } from './SliderNavigation';
import { SliderOption } from './SliderOption';
import { TransactionTypeDropdown } from './TransactionTypeDropdown';
import { useTransactionsController } from './useTransactionsController';

export function Transactions() {
  const {
    areValuesVisible,
    handleCloseFiltersModal,
    handleOpenFiltersModal,
    isFiltersModalOpen,
    isInitialLoading,
    isLoading,
    transactions,
  } = useTransactionsController();

  const hasTransactions = transactions.length > 0;

  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-gray-100 px-4 pb-12 pt-6 md:p-6">
      {isInitialLoading && (
        <div className="flex h-full w-full items-center justify-center">
          <Spinner className="h-9 w-9" />
        </div>
      )}

      {!isInitialLoading && (
        <>
          <FiltersModal open={isFiltersModalOpen} onClose={handleCloseFiltersModal} />

          <header>
            <div className="flex justify-between">
              <TransactionTypeDropdown />

              <button onClick={handleOpenFiltersModal} className="flex items-center gap-2">
                <span className="text-button-sm text-gray-800">Filtros</span>
                <FilterIcon />
              </button>
            </div>

            <div className="relative mt-6">
              <Swiper slidesPerView={3} centeredSlides>
                <SliderNavigation />

                {MONTHS.map((month, index) => (
                  <SwiperSlide key={month} className="p-2">
                    {({ isActive }) => (
                      <SliderOption isActive={isActive} month={month} index={index} />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </header>

          <div className="mt-4 flex-1 space-y-2 overflow-y-auto">
            {isLoading && (
              <div className="flex h-full flex-col items-center justify-center space-y-4">
                <Spinner className="h-9 w-9" />
              </div>
            )}

            {!hasTransactions && !isLoading && (
              <div className="flex h-full flex-col items-center justify-center space-y-4">
                <img src={emptyState} alt="Empty state" className="h-40 w-40" />
                <p className="text-center text-base-normal text-gray-700">
                  Não encontramos nenhuma transação!
                </p>
              </div>
            )}

            {hasTransactions && !isLoading && (
              <>
                <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
                  <div className="flex flex-1 items-center gap-3">
                    <CategoryIcon type="expense" category="food" />
                    <div>
                      <strong className="block text-base-bold text-gray-800">Almoço</strong>
                      <span className="text-sm-normal text-gray-600">09/08/2023</span>
                    </div>
                  </div>
                  <span
                    className={cn(
                      'text-base-medium text-red-800',
                      !areValuesVisible && 'blur-[0.375rem]'
                    )}
                  >
                    -{formatCurrency(340)}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
                  <div className="flex flex-1 items-center gap-3">
                    <CategoryIcon type="income" />
                    <div>
                      <strong className="block text-base-bold text-gray-800">Salário</strong>
                      <span className="text-sm-normal text-gray-600">09/08/2023</span>
                    </div>
                  </div>
                  <span
                    className={cn(
                      'text-base-medium text-green-800',
                      !areValuesVisible && 'blur-[0.375rem]'
                    )}
                  >
                    +{formatCurrency(4000)}
                  </span>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
