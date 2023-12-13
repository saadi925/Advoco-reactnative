import React from 'react';
import {AppText, Box} from '../components';

export function ProfileScreen() {
  return (
    <Box flex={1} height={'100%'}>
      <Box height={'40%'}>
        <AppText text="box" />
      </Box>
      {/* about */}
      <Box>
        <AppText text="About Me" />
      </Box>
    </Box>
  );
}
