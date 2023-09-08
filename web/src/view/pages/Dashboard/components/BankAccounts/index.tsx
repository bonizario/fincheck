import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EyeIcon } from '@view/components/icons/EyeIcon';
import { BankAccountCard } from './BankAccountCard';
import { BankAccountsNavigation } from './BankAccountsNavigation';
import { useBankAccountsController } from './useBankAccountsController';

export function BankAccounts() {
  const { sliderState, setSliderState, windowWidth } = useBankAccountsController();

  const slidesPerView =
    (windowWidth >= 768 && windowWidth <= 1280) || windowWidth <= 500 ? 1.1 : 2.1;

  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-teal-900 px-4 py-8 md:p-10">
      <div>
        <span className="mb-2 block tracking-[-0.5px] text-white">Saldo total</span>

        <div className="flex items-center gap-2">
          <strong className="text-[32px] font-bold tracking-[-1px] text-white">R$ 100,00</strong>

          <button className="flex h-12 w-12 items-center justify-center">
            <EyeIcon open />
          </button>
        </div>
      </div>

      <div className="mt-10 flex flex-1 flex-col justify-end md:mt-0">
        <div>
          <Swiper
            spaceBetween={16}
            slidesPerView={slidesPerView}
            onSlideChange={swiper => {
              setSliderState({ isBeginning: swiper.isBeginning, isEnd: swiper.isEnd });
            }}
          >
            <div slot="container-start" className="mb-4 flex items-center justify-between">
              <strong className="text-lg font-bold tracking-[-1px] text-white">
                Minhas Contas
              </strong>

              <BankAccountsNavigation
                isBeginning={sliderState.isBeginning}
                isEnd={sliderState.isEnd}
              />
            </div>

            <SwiperSlide>
              <BankAccountCard type="CASH" color="#FF7A00" name="Inter" balance={7650} />
            </SwiperSlide>

            <SwiperSlide>
              <BankAccountCard type="CHECKING" color="#7950F2" name="Nubank" balance={123} />
            </SwiperSlide>

            <SwiperSlide>
              <BankAccountCard
                type="INVESTMENT"
                color="#FBC105"
                name="XP Investimentos"
                balance={9500}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
