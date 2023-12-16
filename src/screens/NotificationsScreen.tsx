import React from 'react';
import {AppText, Box} from '../components';
import {COLORS} from '../constants/Theme';
import {NotificationListing} from '../components/NotificationListing';

export default function NotificationsScreen() {
  return (
    <Box flex={1}>
      <AppText
        textAlign="center"
        text="Notifications"
        fontWeight="800"
        color={COLORS.primary}
        fontSize={24}
      />
      <NotificationListing />
    </Box>
  );
}
