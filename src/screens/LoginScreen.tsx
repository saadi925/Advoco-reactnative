import React from 'react';
import {Pressable} from 'react-native';
import {AppText, Box, FormInput} from '../components';
import {UserIcon} from '../../assets/UserIcon';
import {SCREENS} from '../constants/Screens';
import {LockIcon} from '../../assets/LockIcon';
export function LoginScreen({navigation}) {
  return (
    <Box paddingTop={'50%'} flex={1}>
      {/*  logo text */}
      <Box alignItems="center" justifyContent="center">
        <AppText fontSize={28} textTransform="uppercase" text="Advoco" />
      </Box>
      <Box gap={12} paddingHorizontal={'3%'}>
        <FormInput placeholder="User Name" icon={<UserIcon fill="#fff" />} />
        <FormInput
          placeholder="Password"
          secureTextEntry
          icon={<LockIcon fill="#fff" />}
        />

        <Pressable
          style={{
            paddingHorizontal: '5%',
            paddingVertical: '2%',
            backgroundColor: 'skyblue',
            borderRadius: 8,
          }}>
          <AppText
            fontSize={22}
            textAlign="center"
            fontWeight="700"
            text="Signup"
          />
        </Pressable>

        <Box flexDirection="row" gap={5}>
          <AppText text="Already have an account" />
          <Pressable onPress={() => navigation.navigate(SCREENS.Signup)}>
            <AppText text="Signup" color="blue" />
          </Pressable>
        </Box>
      </Box>
    </Box>
  );
}
