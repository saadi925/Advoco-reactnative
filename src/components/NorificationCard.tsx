import React from 'react';
import {AppText, Box} from '.';
import {UserIcon} from '../../assets/UserIcon';
import {Image} from 'react-native';
import {COLORS} from '../constants/Theme';

interface IUser {
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
  }
  return `${date.getMonth() + 1}/${date.getDate()}`;
};

const calculateMinutesAgo = (timestamp: number) => {
  return Math.floor((Date.now() - timestamp) / 60000);
};

export function NotificationsCard({item}: INotification) {
  const {alert, user} = item;
  const formattedDate = formatDate(alert.timestamp);
  const minutesAgo = calculateMinutesAgo(alert.timestamp);

  return (
    <Box flexDirection="row" gap={3} width={'100%'} padding={1} marginTop={14}>
      <Box width={52} height={52} borderRadius={12}>
        {user.profileImg ? (
          <Image source={{uri: user.profileImg}} resizeMode="cover" />
        ) : (
          <UserIcon size={52} fill={COLORS.text} />
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
          <AppText color={COLORS.icon} text={`${minutesAgo} minutes ago`} />
          <AppText color={COLORS.icon} text={formattedDate} />
        </Box>
      </Box>
    </Box>
  );
}
