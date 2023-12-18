import React from 'react';
import {Box} from '../components';
import ScreenHeader from './ScreenHeader';
import {BackIcon} from '../../assets';
import {Pressable} from 'react-native';
export const PaymentScreen = ({navigation}) => {
  return (
    <Box flex={1}>
      <Pressable
        style={{flexDirection: 'row', gap: 3, alignItems: 'center'}}
        onPress={() => navigation.goBack()}>
        <BackIcon size={40} />
        <ScreenHeader heading="Payment Settings" />
      </Pressable>
    </Box>
  );
};
