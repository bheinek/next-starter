import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import type { NextPage } from 'next';
import { useFindFilmByTitleQuery } from '../hooks';
import { SearchBar } from '../components/SearchBar';
import { MovieCard } from '../components/MovieCard';
import { Header } from '../components/Header';
import { useState } from 'react';

const Home: NextPage = () => {
  const [searchValue, setSearchValue] = useState('');
  // Data fetched on client-side
  const { data, isLoading, error } = useFindFilmByTitleQuery({
    title: 'Harry Potter',
  });

  // You should see this data output in the browser console, which means that the data is being fetched on the client-side
  // as opposed to the server-side
  console.log(data);
  console.log('search: ', searchValue);

  return (
    <Container sx={{ m: 2 }}>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Grid container spacing={2}>
        {data && data?.Search?.map((film) => <MovieCard movie={film} />)}
      </Grid>
    </Container>
  );
};

export default Home;
