import { Button, Container, Grid, IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { Search } from './Header';

export const SearchBar = ({ setSearchValue, searchValue }: Search) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <form>
      <TextField
        type="search"
        placeholder="Search..."
        value={searchValue}
        onChange={handleChange}
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: 'blue' }} />
      </IconButton>
    </form>
  );
};
