import React from 'react';
import {Pressable} from 'react-native';
import {AppText, Box, FormInput} from '../components';
import {UserIcon} from '../../assets/UserIcon';
import {SCREENS} from '../constants/Screens';
import {LockIcon} from '../../assets/LockIcon';
import {COLORS} from '../constants/Theme';
export function LoginScreen({navigation}) {
  return (
    <Box flex={1}>
      {/*  logo text */}
      <Box flex={1} alignItems="center" justifyContent="center">
        <AppText
          fontSize={28}
          color={COLORS.text}
          textTransform="uppercase"
          fontWeight="800"
          text="Advoco"
        />
      </Box>
      <Box gap={12} flex={2} paddingHorizontal={'3%'}>
        <AppText
          fontSize={28}
          color={COLORS.text}
          textAlign="center"
          text="Login to Continue"
        />
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
            backgroundColor: COLORS.primary,
            borderRadius: 8,
          }}>
          <AppText
            color={COLORS.text}
            fontSize={22}
            textAlign="center"
            fontWeight="700"
            text="Signin"
          />
        </Pressable>

        <Box flexDirection="row" gap={5}>
          <AppText
            fontSize={18}
            color={COLORS.text}
            text="Already have an account ?"
          />
          <Pressable onPress={() => navigation.navigate(SCREENS.Signup)}>
            <AppText text="Signup" fontSize={18} color={COLORS.accent} />
          </Pressable>
        </Box>
      </Box>
    </Box>
  );
}
