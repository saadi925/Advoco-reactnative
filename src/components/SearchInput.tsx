import React from 'react';
import {Box, FormInput} from '.';
import {SearchIcon} from '../../assets/Search';

export function SearchInput() {
  return (
    <Box>
      <FormInput placeholder="Search here" icon={<SearchIcon />} />
    </Box>
  );
}
