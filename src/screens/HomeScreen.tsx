import React from 'react';
import {Box} from '../components';
import ScreenHeader from './ScreenHeader';
import {ClientScreenTempData} from './tempData';
import {LawyerListing} from '../components/LawyerListing';

export function HomeScreen() {
  return (
    <Box flex={1}>
      <ScreenHeader heading="Home" />
      {/* <CaseListings data={LawyerScreenTempData} /> */}
      <LawyerListing data={ClientScreenTempData} />
    </Box>
  );
}
