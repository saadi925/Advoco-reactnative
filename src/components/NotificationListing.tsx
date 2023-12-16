import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {NotificationsCard} from './NorificationCard';

const tempNotifications = [
  {
    user: {username: 'Saad Bukhari'},
    alert: {
      id: '2',
      action: '',
      status: 'warn',
      message: 'Ahmed accepted your interaction ',
      timestamp: Date.now(),
    },
  },
  {
    user: {username: 'Saad Bukhari'},
    alert: {
      id: '6',
      action: '',
      status: 'warn',
      message: "Your account's security is important alaso make",
      timestamp: Date.now(),
    },
  },
  {
    user: {username: 'Saad Bukhari'},
    alert: {
      id: '6675',
      action: '',
      status: 'warn',
      message: "Your account's security is important",
      timestamp: Date.now(),
    },
  },
  {
    user: {username: 'Saad Bukhari'},
    alert: {
      id: '6767',
      action: '',
      status: 'warn',
      message: "Your account's security is important",
      timestamp: Date.now(),
    },
  },
  {
    user: {username: 'Saad Bukhari'},
    alert: {
      id: '676754',
      action: '',
      status: 'warn',
      message: "Your account's security is important",
      timestamp: Date.now(),
    },
  },
  {
    user: {username: 'Saad Bukhari'},
    alert: {
      id: '667767',
      action: '',
      status: 'warn',
      message: "Your account's security is important",
      timestamp: Date.now(),
    },
  },
  {
    user: {username: 'Saad Bukhari'},
    alert: {
      id: '677687',
      action: '',
      status: 'warn',
      message: "Your account's security is important",
      timestamp: Date.now(),
    },
  },
  {
    user: {username: 'Saad Bukhari'},
    alert: {
      id: '67876',
      action: '',
      status: 'warn',
      message: "Your account's security is important",
      timestamp: Date.now(),
    },
  },
  {
    user: {username: 'Saad Bukhari'},
    alert: {
      id: '34367',
      action: '',
      status: 'warn',
      message: "Your account's security is important",
      timestamp: Date.now(),
    },
  },
  {
    user: {username: 'Saad Bukhari'},
    alert: {
      id: '67676',
      action: '',
      status: 'warn',
      message: "Your account's security is important",
      timestamp: Date.now(),
    },
  },
  {
    user: {username: 'Saad Bukhari'},
    alert: {
      id: '67877',
      action: '',
      status: 'warn',
      message: "Your account's security is important",
      timestamp: Date.now(),
    },
  },
  {
    user: {username: 'Saad Bukhari'},
    alert: {
      id: '6547',
      action: '',
      status: 'warn',
      message: "Your account's security is important",
      timestamp: Date.now(),
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
