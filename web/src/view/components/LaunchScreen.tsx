import { Transition } from '@headlessui/react';

import { Logo } from './Logo';
import { Spinner } from './Spinner';

type LaunchScreenProps = {
  isLoading: boolean;
};

export function LaunchScreen({ isLoading }: LaunchScreenProps) {
  return (
    <Transition
      appear
      show={isLoading}
      enter="transition-opacity duration-250"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-250"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed grid h-full w-full place-items-center bg-teal-900">
        <div className="flex flex-col items-center justify-center gap-2">
          <Logo className="h-10 text-white" />
          <Spinner className="fill-white text-teal-900" />
        </div>
      </div>
    </Transition>
  );
}
