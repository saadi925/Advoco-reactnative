import React from 'react';
import {AppText, Box} from '../components';
import ScreenHeader from './ScreenHeader';
import {IUser} from '../components/NorificationCard';
import {FlatList, Image, Pressable} from 'react-native';
import {UserIcon} from '../../assets/UserIcon';
import {COLORS} from '../constants/Theme';

const tempRequests = [
  {
    id: '1',
    user: {
      username: 'John Doe',
      profileImg: '',
    },
  },
  {
    id: '2',
    user: {
      username: 'John Doe',
      profileImg: '',
    },
  },
  {
    id: '25',
    user: {
      username: 'John Doe',
      profileImg: '',
    },
  },
  {
    id: '276',
    user: {
      username: 'John Doe',
      profileImg: '',
    },
  },
  {
    id: '267',
    user: {
      username: 'John Doe',
      profileImg: '',
    },
  },
  {
    id: '2560',
    user: {
      username: 'John Doe',
      profileImg: '',
    },
  },
  {
    id: '256',
    user: {
      username: 'John Doe',
      profileImg: '',
    },
  },
];

export function RequestScreen() {
  return (
    <Box flex={1}>
      <Box flexDirection="row" gap={2} alignItems="center">
        <ScreenHeader heading="Requests" />
        <AppText text="(7)" fontSize={16} opacity={0.5} fontWeight="700" />
      </Box>
      <FlatList
        data={tempRequests}
        keyExtractor={tempRequests => tempRequests.id}
        renderItem={RequestCard}
      />
    </Box>
  );
}
interface RequestCardProps {
  item: {
    id: string;
    user: IUser;
  };
}

export function RequestCard({item}: RequestCardProps) {
  const {user} = item;
  return (
    <Box flexDirection="row" gap={3} width={'100%'} padding={1} marginTop={14}>
      <Box width={68} height={68} borderRadius={12}>
        {user.profileImg ? (
          <Image source={{uri: user.profileImg}} resizeMode="cover" />
        ) : (
          <UserIcon size={68} fill={COLORS.text} />
        )}
      </Box>
      <Box flex={1}>
        <Box flexDirection="row" alignItems="center">
          <AppText
            padding={'1%'}
            fontSize={18}
            numberOfLines={2}
            ellipsizeMode="tail"
            fontWeight="700"
            text={user.username}
            color={COLORS.text}
          />
          <AppText text="wants to connect with you" fontSize={16.3} />
        </Box>
        <Box flexDirection="row" gap={14} paddingRight={7}>
          <Pressable
            style={{
              backgroundColor: COLORS.error,
              paddingHorizontal: '5%',
              paddingVertical: '3%',

              borderRadius: 8,
            }}>
            <AppText fontWeight="700" text="Reject" />
          </Pressable>
          <Pressable
            style={{
              backgroundColor: COLORS.success,
              paddingVertical: '3%',
              paddingHorizontal: '5%',
              borderRadius: 8,
            }}>
            <AppText fontWeight="700" text="Accept" />
          </Pressable>
        </Box>
      </Box>
    </Box>
  );
}
