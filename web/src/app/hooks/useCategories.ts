import { useQuery } from '@tanstack/react-query';

import { categoriesService } from '@app/services/categoriesService';

export function useCategories() {
  const { data, isFetching } = useQuery({
    queryKey: ['categories'],
    queryFn: categoriesService.getAll,
    staleTime: Infinity,
  });

  return { categories: data ?? [], isFetching };
}
