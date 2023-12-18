import {Text, TouchableOpacity} from 'react-native';
import {AppText, Box, UserAvatar} from '.';
import {LawyerCard} from './LawyerListing';
import {COLORS} from '../constants/Theme';
const CheckRating = (rating: number) => {
  if (rating < 2) {
    return COLORS.error;
  } else if (rating < 4) {
    return COLORS.icon;
  } else {
    return COLORS.success;
  }
};
const Availability = (status: string) => {
  if (status === 'Available') {
    return COLORS.success;
  } else {
    return COLORS.error;
  }
};

import {Rating, AirbnbRating} from 'react-native-ratings';

export function LawyerCardItem({item}: {item: LawyerCard}) {
  const {user} = item;
  const ratingColor = CheckRating(user.rating);
  const availability = Availability(user.status);

  return (
    <Box
      borderRadius={12}
      padding={'4%'}
      opacity={0.9}
      borderColor={COLORS.primary}
      borderWidth={1}
      marginBottom={'7%'}>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        gap={4}>
        <Box flexDirection="row">
          <UserAvatar isOnline={user.isOnline} imageUrl={user.profileImg} />
          <Box>
            <AppText fontWeight="700" text={user.name} />
            <AppText fontWeight="700" color={availability} text={user.status} />
          </Box>
        </Box>
        <AppText color={COLORS.primary} fontWeight="700" text={user.location} />
      </Box>
      <AppText fontWeight="700" fontSize={20} text={user.description} />
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <AppText
          fontSize={18}
          color={COLORS.primary}
          fontWeight="700"
          text={user.category}
        />
        {/*  */}
        <AppText fontSize={18} color={COLORS.primary} text={'Experience'} />
      </Box>

      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <Text style={{color: ratingColor, fontWeight: '700'}}>
          {user.rating}
          <Rating
            imageSize={20}
            readonly
            ratingColor={ratingColor}
            startingValue={user.rating}
            tintColor={COLORS.background}
          />
        </Text>

        <Text style={{color: ratingColor, fontSize: 20}}>
          {user.experience + ' ' + 'years'}
        </Text>
      </Box>
      <TouchableOpacity
        style={{
          paddingVertical: '4%',
          paddingHorizontal: '3%',
          backgroundColor: COLORS.icon,
          borderRadius: 8,
        }}
        onPress={() => console.log('req sent')}>
        <AppText textAlign="center" text="Contact Me" />
      </TouchableOpacity>
    </Box>
  );
}
