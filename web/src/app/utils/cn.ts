import clsx, { type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const customTwMerge = extendTailwindMerge({
  classGroups: {
    text: [
      'text-sm-normal',
      'text-sm-medium',
      'text-sm-bold',
      'text-base-normal',
      'text-base-medium',
      'text-base-bold',
      'text-lg-normal',
      'text-lg-medium',
      'text-lg-bold',
      'text-h1',
      'text-h2',
      'text-h3',
      'text-h4',
      'text-input-label',
      'text-input-placeholder',
      'text-input-helper',
      'text-button-lg',
      'text-button-sm',
    ],
  },
});

export function cn(...classes: ClassValue[]) {
  return customTwMerge(clsx(classes));
}
