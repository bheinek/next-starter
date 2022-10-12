import { useQuery } from '@tanstack/react-query';
import apiClient from './api';
import { FilmResponse } from './types';

export const findFilmByTitleRequest = async (title: string) => {
  return apiClient.get<FilmResponse>('http://www.omdbapi.com', {
    params: { t: title },
  });
};

export const useFindFilmByTitleQuery = (variables: { title: string }) => {
  return useQuery(
    ['FILM_SEARCH_RESULT'],
    () => findFilmByTitleRequest(variables.title),
    { select: (data) => data.data }
  );
};
