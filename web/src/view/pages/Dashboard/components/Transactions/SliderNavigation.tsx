import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useSwiper } from 'swiper/react';

export function SliderNavigation() {
  const swiper = useSwiper();

  return (
    <>
      <button
        onClick={() => swiper.slidePrev()}
        className={`
          absolute -left-3 top-1/2 flex h-12 w-12 -translate-y-1/2
          items-center justify-center bg-gradient-to-r from-gray-100 to-transparent`}
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className={`
          absolute -right-3 top-1/2 flex h-12 w-12 -translate-y-1/2
          items-center justify-center bg-gradient-to-l from-gray-100 to-transparent`}
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-800" />
      </button>
    </>
  );
}
