import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {NotificationsCard} from './NorificationCard';
import {data} from '../../fake/data';

const tempNotifications = [
  {
    user: {
      username: 'Saad Bukhari',
      profileImg: './avatar.jpg',
    },
    alert: {
      id: '2',
      action: '',
      status: 'warn',
      message: 'Ahmed accepted your interaction ',
      timestamp: Date.now(),
    },
  },
  {
    user: {
      username: 'Ali Raza',
      profileImg: './avatar2.jpg',
    },
    alert: {
      id: '3',
      action: '',
      status: 'info',
      message: 'Fatima sent you a message',
      timestamp: Date.now() - 1000 * 60 * 60 * 24 * 1, // 1 day ago
    },
  },
  {
    user: {
      username: 'Zainab Ahmed',
      profileImg: './avatar3.jpg',
    },
    alert: {
      id: '4',
      action: '',
      status: 'success',
      message: 'Your appointment with Dr. Khan is confirmed',
      timestamp: Date.now() - 1000 * 60 * 60 * 24 * 2, // 2 days ago
    },
  },
  {
    user: {
      username: 'Usman Ali',
      profileImg: './avatar4.jpg',
    },
    alert: {
      id: '5',
      action: '',
      status: 'warn',
      message: 'Your subscription will end in 3 days',
      timestamp: Date.now() - 1000 * 60 * 60 * 24 * 3, // 3 days ago
    },
  },
  {
    user: {
      username: 'Ayesha Khan',
      profileImg: './avatar5.jpg',
    },
    alert: {
      id: '6',
      action: '',
      status: 'error',
      message: 'Payment failed for your latest invoice',
      timestamp: Date.now() - 1000 * 60 * 60 * 24 * 4, // 4 days ago
    },
  },
];
export function NotificationListing() {
  return (
    <>
      <FlatList
        style={{paddingBottom: 4}}
        data={tempNotifications}
        keyExtractor={notifications => notifications.alert.id}
        renderItem={NotificationsCard}
      />
    </>
  );
}
