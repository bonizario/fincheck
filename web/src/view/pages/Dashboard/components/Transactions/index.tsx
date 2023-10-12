import { Swiper, SwiperSlide } from 'swiper/react';

import { MONTHS } from '@app/config/constants';
import { cn } from '@app/utils/cn';
import { formatCurrency } from '@app/utils/formatCurrency';
import { formatDate } from '@app/utils/formatDate';
import emptyState from '@assets/empty-state.svg';
import { Spinner } from '@view/components/Spinner';
import { FilterIcon } from '@view/components/icons/FilterIcon';
import { CategoryIcon } from '@view/components/icons/categories/CategoryIcon';
import { EditTransactionModal } from '../../modals/EditTransactionModal';
import { FiltersModal } from './FiltersModal';
import { SliderNavigation } from './SliderNavigation';
import { SliderOption } from './SliderOption';
import { TransactionTypeDropdown } from './TransactionTypeDropdown';
import { useTransactionsController } from './useTransactionsController';

export function Transactions() {
  const {
    areValuesVisible,
    filters,
    handleApplyFilters,
    handleChangeFilters,
    handleCloseEditModal,
    handleCloseFiltersModal,
    handleOpenEditModal,
    handleOpenFiltersModal,
    isEditModalOpen,
    isFiltersModalOpen,
    isLoading,
    transactionBeingEdited,
    transactions,
  } = useTransactionsController();

  const hasTransactions = transactions.length > 0;

  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-gray-100 px-4 pb-12 pt-6 md:p-6">
      <FiltersModal
        onApplyFilters={handleApplyFilters}
        onClose={handleCloseFiltersModal}
        open={isFiltersModalOpen}
      />

      <header>
        <div className="flex justify-between">
          <TransactionTypeDropdown
            onSelect={handleChangeFilters('type')}
            selectedType={filters.type}
          />

          <button
            onClick={handleOpenFiltersModal}
            className="flex items-center gap-2"
          >
            <span className="text-button-sm text-gray-800">Filtros</span>
            <FilterIcon />
          </button>
        </div>

        <div className="relative mt-6">
          <Swiper
            centeredSlides
            initialSlide={filters.month}
            onSlideChange={swiper =>
              handleChangeFilters('month')(swiper.realIndex)
            }
            slidesPerView={3}
          >
            <SliderNavigation />

            {MONTHS.map((month, index) => (
              <SwiperSlide key={month} className="p-2">
                {({ isActive }) => (
                  <SliderOption
                    isActive={isActive}
                    month={month}
                    index={index}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </header>

      <div className="mt-4 flex-1 space-y-2 overflow-y-auto">
        {!hasTransactions && (
          <div className="flex h-full flex-col items-center justify-center space-y-4">
            {!isLoading && (
              <>
                <img src={emptyState} alt="Empty state" className="h-40 w-40" />
                <p className="text-center text-base-normal text-gray-700">
                  Não encontramos nenhuma transação!
                </p>
              </>
            )}
            {isLoading && <Spinner className="h-9 w-9" />}
          </div>
        )}

        {hasTransactions && isLoading && (
          <div className="flex h-full w-full items-center justify-center">
            <Spinner className="h-9 w-9" />
          </div>
        )}

        {hasTransactions && !isLoading && (
          <>
            {transactionBeingEdited && (
              <EditTransactionModal
                open={isEditModalOpen}
                onClose={handleCloseEditModal}
                transactionBeingEdited={transactionBeingEdited}
              />
            )}

            {transactions.map(transaction => (
              <div
                key={transaction.id}
                className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4"
                role="button"
                onClick={() => handleOpenEditModal(transaction)}
              >
                <div className="flex flex-1 items-center gap-3">
                  <CategoryIcon
                    type={transaction.type}
                    category={transaction.category?.icon}
                  />
                  <div>
                    <strong className="block text-base-bold text-gray-800">
                      {transaction.name}
                    </strong>
                    <span className="text-sm-normal text-gray-600">
                      {formatDate(new Date(transaction.date))}
                    </span>
                  </div>
                </div>
                <span
                  className={cn(
                    'text-base-medium',
                    transaction.type === 'INCOME' && 'text-green-800',
                    transaction.type === 'EXPENSE' && 'text-red-800',
                    !areValuesVisible && 'blur-[0.375rem]'
                  )}
                >
                  {transaction.type === 'INCOME' ? '+' : '-'}
                  {formatCurrency(transaction.value)}
                </span>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
