import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Box} from './Box';
import {UserIcon} from '../../assets/UserIcon';
import {COLORS} from '../constants/Theme';

interface UserAvatarProps {
  isOnline: boolean;
  imageUrl?: string;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({isOnline, imageUrl}) => {
  return (
    <Box flexDirection="row" alignItems="center">
      {imageUrl ? <Image source={{uri: imageUrl}} /> : <UserIcon size={42} />}
      <View
        style={[
          styles.statusIndicator,
          isOnline ? styles.online : styles.offline,
        ]}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  statusIndicator: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    position: 'absolute',
    left: 0,
    top: 2,
    borderWidth: 2,
    borderColor: 'white',
  },
  online: {
    backgroundColor: COLORS.accent,
  },
  offline: {
    backgroundColor: 'gray',
  },
});
