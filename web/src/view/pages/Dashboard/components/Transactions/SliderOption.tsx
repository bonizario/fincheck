import { useSwiper } from 'swiper/react';

import { cn } from '@app/utils/cn';

type SliderOptionProps = {
  index: number;
  isActive: boolean;
  month: string;
};

export function SliderOption({ index, isActive, month }: SliderOptionProps) {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slideTo(index)}
      tabIndex={-1}
      className={cn(
        'h-12 w-full rounded-full text-sm font-medium tracking-[-0.5px] text-gray-800',
        isActive && 'bg-white'
      )}
    >
      {month}
    </button>
  );
}
