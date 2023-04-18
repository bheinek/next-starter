import { Grid, Typography } from '@mui/material';
import { SearchBar } from './SearchBar';
import { Dispatch, SetStateAction } from 'react';

export type Search = {
  setSearchValue: Dispatch<SetStateAction<string>>;
  searchValue: string;
};

export const Header = ({ setSearchValue, searchValue }: Search) => (
  <Grid>
    <Typography variant="h1"> Movie database</Typography>
    <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
  </Grid>
);
