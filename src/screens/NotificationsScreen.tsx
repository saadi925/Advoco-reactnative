import React from 'react';
import {AppText, Box} from '../components';
import {COLORS} from '../constants/Theme';

export default function NotificationsScreen() {
  return (
    <Box flex={1}>
      <AppText
        textAlign="center"
        text="Notifications"
        padding={4}
        fontWeight="800"
        paddingTop={7}
        paddingHorizontal={12}
        color={COLORS.primary}
        fontSize={24}
      />
    </Box>
  );
}
