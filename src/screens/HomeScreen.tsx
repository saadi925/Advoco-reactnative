import React from 'react';
import {AppText, Box} from '../components';
import {CardListings} from '../components/CardListings';

export function HomeScreen() {
  return (
    <Box flex={1}>
      <AppText text="home screen" />
      <CardListings />
    </Box>
  );
}
