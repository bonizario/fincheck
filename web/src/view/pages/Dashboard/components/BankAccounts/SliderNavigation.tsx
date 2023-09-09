import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useSwiper } from 'swiper/react';

type SliderNavigationProps = {
  isBeginning: boolean;
  isEnd: boolean;
};

export function SliderNavigation({ isBeginning, isEnd }: SliderNavigationProps) {
  const swiper = useSwiper();

  return (
    <div>
      <button
        disabled={isBeginning}
        onClick={() => swiper.slidePrev()}
        className="rounded-full p-3 transition-colors enabled:hover:bg-black/10 disabled:opacity-40"
      >
        <ChevronLeftIcon className="h-6 w-6 text-white" />
      </button>
      <button
        disabled={isEnd}
        onClick={() => swiper.slideNext()}
        className="rounded-full p-3 transition-colors enabled:hover:bg-black/10 disabled:opacity-40"
      >
        <ChevronRightIcon className="h-6 w-6 text-white" />
      </button>
    </div>
  );
}
