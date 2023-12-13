import React from 'react';
import {Pressable} from 'react-native';
import {AppText, Box} from '../components';
import {COLORS} from '../constants/Theme';
import {BackIcon} from '../../assets/Back';
import {SCREENS} from '../constants/Screens';
import {SearchInput} from '../components/SearchInput';

export function SearchModal({navigation}) {
  return (
    <Box flex={1} padding={3} gap={2}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={{flexDirection: 'row', alignItems: 'center', marginVertical: 2}}>
        <BackIcon />
        <AppText
          text="Search"
          padding={4}
          paddingHorizontal={12}
          color={COLORS.accent}
          fontSize={24}
        />
      </Pressable>
      <SearchInput />
    </Box>
  );
}
