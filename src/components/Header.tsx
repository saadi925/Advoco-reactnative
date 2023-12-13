import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Box} from './Box';
import {AppText, UserAvatar} from '.';
import {ChatIcon} from '../../assets/ChatIcon';
import {NotificationIcon} from '../../assets/NotificationIcon';
import {COLORS} from '../constants/Theme';
import {SearchIcon} from '../../assets/Search';
import {SCREENS} from '../constants/Screens';
export const Header = ({navigation}) => {
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      padding={'3%'}>
      <Text style={styles.logo}>Advoco</Text>
      <Box flexDirection="row" gap={8} alignItems="center">
        <Pressable onPress={() => navigation.navigate(SCREENS.Search)}>
          <SearchIcon fill={COLORS.text} />
        </Pressable>
        <Pressable onPress={() => console.log('menu')}>
          <NotificationIcon fill={COLORS.text} />
        </Pressable>
        <Pressable onPress={() => console.log('menu')}>
          <ChatIcon fill={COLORS.icon} />
        </Pressable>

        <Pressable onPress={() => console.log('menu')}>
          <UserAvatar isOnline />
        </Pressable>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  menu: {
    fontSize: 24,
  },
});
