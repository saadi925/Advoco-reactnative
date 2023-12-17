import React from 'react';
import {AppText, Box} from '.';
import {UserIcon} from '../../assets/UserIcon';
import {Image} from 'react-native';
import {COLORS} from '../constants/Theme';
import FastImage from 'react-native-fast-image';
export interface IUser {
  username: string;
  profileImg?: string | null;
}
interface Alert {
  id: string;
  action: string;
  message: string;
  status: string;
  timestamp: number;
}
export type INotification = {
  item: {
    user: IUser;
    alert: Alert;
  };
};

const formatDate = (timestamp: number) => {
  const NowDate = new Date();
  const date = new Date(timestamp);
  if (
    NowDate.getDate() === date.getDate() &&
    NowDate.getFullYear() === date.getFullYear()
  ) {
    return 'Today';
  } else if (
    NowDate.getDate() - 1 === date.getDate() &&
    NowDate.getFullYear() === date.getFullYear()
  ) {
    return 'Yesterday';
  }

  return `${date.getMonth() + 1}/${date.getDate()}`;
};

const calculateTimeAgo = (timestamp: number) => {
  const diffInMilliseconds = Date.now() - timestamp;
  const diffInMinutes = Math.floor(diffInMilliseconds / 60000);
  const diffInHours = Math.floor(diffInMilliseconds / (60000 * 60));
  const diffInDays = Math.floor(diffInMilliseconds / (60000 * 60 * 24));

  switch (true) {
    case diffInMinutes < 60:
      return `${diffInMinutes} minutes ago`;
    case diffInHours < 24:
      const remainingMinutes = diffInMinutes % 60;
      return `${diffInHours} hour${
        diffInHours > 1 ? 's' : ''
      } ${remainingMinutes} minutes ago`;
    default:
      const remainingHours = diffInHours % 24;
      return `${diffInDays} day${
        diffInDays > 1 ? 's' : ''
      } ${remainingHours} hours ago`;
  }
};

export function NotificationsCard({item}: INotification) {
  const {alert, user} = item;
  const formattedDate = formatDate(alert.timestamp);
  const minutesAgo = calculateTimeAgo(alert.timestamp);

  return (
    <Box flexDirection="row" gap={3} width={'100%'} padding={1} marginTop={14}>
      <Box width={68} height={68} borderRadius={50}>
        {user.profileImg ? (
          <FastImage
            source={require('./avatar.jpg')}
            style={{width: 68, height: 68, borderRadius: 50}}
            resizeMode={FastImage.resizeMode.cover}
          />
        ) : (
          <UserIcon size={68} fill={COLORS.text} />
        )}
      </Box>
      <Box flex={1}>
        <AppText
          fontSize={18}
          numberOfLines={2}
          ellipsizeMode="tail"
          text={alert.message}
          color={COLORS.text}
        />
        <Box
          flexDirection="row"
          justifyContent="space-between"
          paddingRight={7}>
          <AppText color={COLORS.icon} text={minutesAgo} />
          <AppText color={COLORS.icon} text={formattedDate} />
        </Box>
      </Box>
    </Box>
  );
}
