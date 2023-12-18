import React, {useState} from 'react';
import {Pressable} from 'react-native';
import {AppText, Box, FormInput} from '../components';
import {UserIcon} from '../../assets/UserIcon';
import {SCREENS} from '../constants/Screens';
import {EyeIcon, LockIcon} from '../../assets/LockIcon';
import {EmailIcon} from '../../assets/EmailIcon';
import {COLORS} from '../constants/Theme';
import {HideEyeIcon} from '../../assets/EyeIcon';
export function SignupScreen({navigation}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <Box flex={1}>
      {/*  logo text */}
      <Box alignItems="center" flex={1} justifyContent="center">
        <AppText
          fontSize={28}
          textTransform="uppercase"
          color={COLORS.text}
          text="Advoco"
        />
      </Box>
      <Box gap={8} flex={2} paddingHorizontal={'3%'}>
        <AppText
          fontSize={28}
          textAlign="center"
          color={COLORS.text}
          text="Signup to Continue"
        />
        <FormInput
          bgColor={COLORS.background}
          placeholder="User Name"
          icon={<UserIcon fill={COLORS.primary} />}
        />
        <FormInput
          bgColor={COLORS.background}
          placeholder="Email"
          keyboardType="email-address"
          icon={<EmailIcon fill={COLORS.primary} />}
        />
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
        {/*  Submit */}
        <Pressable
          style={{
            paddingHorizontal: '5%',
            paddingVertical: '2%',
            backgroundColor: COLORS.primary,
            borderRadius: 8,
          }}>
          <AppText
            fontSize={22}
            textAlign="center"
            fontWeight="700"
            color={COLORS.text}
            text="Signup"
          />
        </Pressable>

        <Box flexDirection="row" gap={5}>
          <AppText
            text="Already have an account"
            fontSize={18}
            color={'#fff'}
          />
          <Pressable onPress={() => navigation.navigate(SCREENS.Login)}>
            <AppText text="Login" fontSize={18} color={COLORS.accent} />
          </Pressable>
        </Box>
      </Box>
    </Box>
  );
}
