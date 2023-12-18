import {BackIcon} from '../../assets';
import {PaymentIcon} from '../../assets/PaymentIcon';
import {SettingsIcon} from '../../assets/Settings';
import {FbIcon, LinkedInIcon, TwitterIcon} from '../../assets/SocialIcons';
import {UserIcon} from '../../assets/UserIcon';
import {AppText, Box} from '../components';
import {SCREENS} from '../constants/Screens';
import {COLORS} from '../constants/Theme';
import ScreenHeader from './ScreenHeader';
import {Image, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
const tempUser = {
  username: 'Umer Suleiman',
};
export function MenuScreen(props) {
  const {user = tempUser, navigation} = props;
  return (
    <Box flex={1}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={{flexDirection: 'row', alignItems: 'center', marginVertical: 2}}>
        <BackIcon />
        <AppText
          text="Menu"
          padding={4}
          paddingHorizontal={12}
          color={COLORS.accent}
          fontSize={24}
        />
      </Pressable>
      <Box paddingHorizontal={'2%'}>
        {/* user profile icon start */}
        <Pressable onPress={() => navigation.navigate(SCREENS.Profile)}>
          <Box
            padding={'2%'}
            flexDirection="row"
            paddingHorizontal={'6%'}
            alignItems="center"
            borderRadius={8}
            opacity={0.9}
            backgroundColor={'#5555'}
            gap={8}>
            <Box
              width={62}
              backgroundColor={'transparent'}
              height={62}
              borderRadius={50}>
              {user.profileImg ? (
                <FastImage
                  source={require('./profile.jpg')}
                  resizeMode={FastImage.resizeMode.cover}
                  style={{width: 62, height: 62, borderRadius: 50}}
                />
              ) : (
                <UserIcon size={62} fill={COLORS.text} />
              )}
            </Box>
            <AppText text={user.username} fontSize={20} fontWeight="700" />
          </Box>
        </Pressable>
        {/* user profile icon end */}
        {/* settings button */}
        <Box rowGap={12}>
          <AppText
            text="Settings"
            marginHorizontal={12}
            opacity={0.7}
            fontWeight="800"
            fontSize={20}
          />
          <LinkButton
            name="Account Settings"
            handlePress={() => navigation.navigate(SCREENS.Settings)}
            icon={<SettingsIcon />}
          />
          <LinkButton
            handlePress={() => navigation.navigate(SCREENS.PaymentSettings)}
            name="Payment Method Settings"
            icon={<PaymentIcon />}
          />
          {/* settings button end */}
          <AppText
            text="Social Links"
            marginHorizontal={12}
            opacity={0.7}
            fontWeight="800"
            fontSize={20}
          />
          <Box flexDirection="row" alignItems="center" gap={4}>
            <FbIcon />
            <AppText text="Connected" fontSize={20} fontWeight="700" />
          </Box>
          <Box flexDirection="row" alignItems="center" gap={4}>
            <LinkedInIcon />
            <AppText text="Connected" fontSize={20} fontWeight="700" />
          </Box>
          <Box flexDirection="row" alignItems="center" gap={4}>
            <TwitterIcon />
            <AppText text="Connected" fontSize={20} fontWeight="700" />
          </Box>
        </Box>
        <Pressable
          onPress={() => navigation.navigate(SCREENS.Login)}
          style={{
            backgroundColor: COLORS.error,
            borderRadius: 8,
            marginTop: 20,
          }}>
          <AppText
            text="Logout"
            textAlign="center"
            fontSize={20}
            fontWeight="700"
            paddingVertical={8}
          />
        </Pressable>
      </Box>
    </Box>
  );
}

interface LinkButtonProps {
  name: string;
  handlePress: () => void;
  icon: React.ReactElement;
}

export function LinkButton({name, icon, handlePress}: LinkButtonProps) {
  return (
    <Pressable
      style={{alignItems: 'center', flexDirection: 'row', gap: 4}}
      onPress={handlePress}>
      {icon}
      <AppText opacity={0.9} text={name} fontSize={19} fontWeight="700" />
    </Pressable>
  );
}
