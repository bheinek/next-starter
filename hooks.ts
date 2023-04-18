import { useQuery } from '@tanstack/react-query';
import apiClient from './api';
import { FilmResponse, SearchResponse } from './types';

export const findFilmByTitleRequest = async (title: string) => {
  return apiClient.get<SearchResponse>('http://www.omdbapi.com', {
    params: { s: title },
  });
};

export const useFindFilmByTitleQuery = (variables: { title: string }) => {
  return useQuery(
    ['FILM_SEARCH_RESULT'],
    () => findFilmByTitleRequest(variables.title),
    { select: (data) => data.data }
  );
};
