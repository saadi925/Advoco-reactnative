import React from 'react';
import {Box} from '../components';
import {NotificationListing} from '../components/NotificationListing';
import ScreenHeader from './ScreenHeader';

export default function NotificationsScreen() {
  return (
    <Box flex={1}>
      <ScreenHeader heading="Notifications" />
      <NotificationListing />
    </Box>
  );
}
