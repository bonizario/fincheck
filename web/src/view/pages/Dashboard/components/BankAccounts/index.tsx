import { PlusIcon } from '@radix-ui/react-icons';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import { cn } from '@app/utils/cn';
import { formatCurrency } from '@app/utils/formatCurrency';
import { Spinner } from '@view/components/Spinner';
import { EyeIcon } from '@view/components/icons/EyeIcon';
import { BankAccountCard } from './BankAccountCard';
import { SliderNavigation } from './SliderNavigation';
import { useBankAccounts } from './useBankAccounts';

export function BankAccounts() {
  const {
    areValuesVisible,
    bankAccounts,
    currentBalance,
    isLoading,
    openNewBankAccountModal,
    sliderState,
    setSliderState,
    toggleValueVisibility,
    windowWidth,
  } = useBankAccounts();

  const slidesPerView =
    (windowWidth >= 768 && windowWidth <= 1280) || windowWidth <= 500 ? 1.1 : 2.1;

  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-teal-900 px-4 py-8 md:p-10">
      {isLoading && (
        <div className="flex h-full w-full items-center justify-center">
          <Spinner className="h-9 w-9 fill-gray-0 text-teal-950/50" />
        </div>
      )}

      {!isLoading && (
        <>
          <div>
            <span className="mb-2 block text-base-normal text-white">Saldo total</span>

            <div className="flex items-center gap-2">
              <strong className={cn('text-h1 text-white', !areValuesVisible && 'blur-md')}>
                {formatCurrency(currentBalance)}
              </strong>

              <button
                onClick={toggleValueVisibility}
                className="flex h-12 w-12 items-center justify-center focus-visible:outline-white"
              >
                <EyeIcon open={!areValuesVisible} />
              </button>
            </div>
          </div>

          <div className="mt-10 flex flex-1 flex-col justify-end md:mt-0">
            {bankAccounts.length === 0 && (
              <>
                <div slot="container-start" className="mb-4">
                  <strong className="text-h4 text-white">Minhas Contas</strong>
                </div>

                <button
                  onClick={openNewBankAccountModal}
                  className={`
                    mt-4 flex h-52 flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed
                    border-teal-600 text-white focus-visible:border-transparent focus-visible:outline-white`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-dashed border-white">
                    <PlusIcon className="h-6 w-6" />
                  </div>
                  <span className="block w-32 text-center text-base-medium">
                    Cadastre uma nova conta
                  </span>
                </button>
              </>
            )}

            {bankAccounts.length > 0 && (
              <div>
                <Swiper
                  spaceBetween={16}
                  slidesPerView={slidesPerView}
                  onSlideChange={swiper => {
                    setSliderState({ isBeginning: swiper.isBeginning, isEnd: swiper.isEnd });
                  }}
                >
                  <div
                    slot="container-start"
                    className="mb-4 flex items-center justify-between pr-0.5 pt-0.5"
                  >
                    <strong className="text-h4 text-white">Minhas Contas</strong>

                    <SliderNavigation
                      isBeginning={sliderState.isBeginning}
                      isEnd={sliderState.isEnd}
                    />
                  </div>

                  {bankAccounts.map(bankAccount => (
                    <SwiperSlide key={bankAccount.id}>
                      <BankAccountCard
                        balance={bankAccount.currentBalance}
                        color={bankAccount.color}
                        name={bankAccount.name}
                        type={bankAccount.type}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
