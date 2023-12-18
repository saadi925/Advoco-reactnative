import React, {useState} from 'react';
import {Pressable} from 'react-native';
import {AppText, Box, FormInput} from '../components';
import {UserIcon} from '../../assets/UserIcon';
import {SCREENS, STACKS} from '../constants/Screens';
import {EyeIcon, LockIcon} from '../../assets/LockIcon';
import {COLORS} from '../constants/Theme';
import {HideEyeIcon} from '../../assets/EyeIcon';
export function LoginScreen({navigation}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
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
          bgColor={COLORS.background}
          placeholder="Password"
          secureTextEntry={!isPasswordVisible}
          icon={
            <Pressable onPress={togglePasswordVisibility}>
              {!isPasswordVisible ? (
                <HideEyeIcon fill={COLORS.primary} />
              ) : (
                <EyeIcon fill={COLORS.primary} />
              )}
            </Pressable>
          }
        />

        <Pressable
          onPress={() => navigation.navigate(STACKS.APP)}
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
