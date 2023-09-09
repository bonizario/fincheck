import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Swiper, SwiperSlide } from 'swiper/react';

import { MONTHS } from '@app/config/constants';
import { FilterIcon } from '@view/components/icons/FilterIcon';
import { TransactionsIcon } from '@view/components/icons/TransactionsIcon';
import { SliderNavigation } from './SliderNavigation';
import { SliderOption } from './SliderOption';

export function Transactions() {
  return (
    <div className="h-full w-full rounded-2xl bg-gray-100 px-4 py-8 md:p-10">
      <header>
        <div className="flex justify-between">
          <button className="flex items-center gap-2">
            <TransactionsIcon />
            <span className="text-sm font-medium tracking-[-0.5px] text-gray-800">Transações</span>
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
                {({ isActive }) => <SliderOption isActive={isActive} month={month} index={index} />}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </header>

      <div className="mt-4">Content</div>
    </div>
  );
}
