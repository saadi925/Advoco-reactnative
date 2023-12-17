import React from 'react';
import {Box} from '../components';
import {BackIcon} from '../../assets/Back';
import ScreenHeader from './ScreenHeader';
import {Pressable} from 'react-native';
export function SettingsScreen({navigation}) {
  return (
    <Box flex={1}>
      <Pressable
        style={{flexDirection: 'row', gap: 3, alignItems: 'center'}}
        onPress={() => navigation.goBack()}>
        <BackIcon size={40} />
        <ScreenHeader heading="Account Settings" />
      </Pressable>
    </Box>
  );
}
