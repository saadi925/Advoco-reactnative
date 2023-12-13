import React from 'react';
import {AppText, Box} from '../components';
import {COLORS} from '../constants/Theme';

export function SearchModal() {
  return (
    <Box flex={1}>
      <AppText
        text="Search"
        padding={4}
        paddingHorizontal={12}
        color={COLORS.accent}
        fontSize={24}
      />
    </Box>
  );
}
