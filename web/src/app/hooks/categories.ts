import { useQuery } from '@tanstack/react-query';

import { categoriesService } from '@app/services/categoriesService';

export function useGetAllCategories() {
  const { data: categories, isFetching: isFetchingCategories } = useQuery({
    queryKey: ['categories'],
    queryFn: categoriesService.getAll,
    staleTime: Infinity,
  });

  return { isFetchingCategories, categories: categories ?? [] };
}
