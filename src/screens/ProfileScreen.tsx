import {Dimensions} from 'react-native';
import {StyleSheet, Pressable} from 'react-native';
import {useState} from 'react';
import {AppText, Box} from '../components';
import ScreenHeader from './ScreenHeader';
import FastImage from 'react-native-fast-image';
import {BackIcon} from '../../assets/Back';
import {COLORS} from '../constants/Theme';
import {LocationIcon} from '../../assets/Location';
import {FbIcon, LinkedInIcon, TwitterIcon} from '../../assets/SocialIcons';
import {ScrollView} from 'react-native-gesture-handler';
import App from '../../App';
export function ProfileScreen({navigation}) {
  const [role, setRole] = useState('Lawyer');
  let desc = `“I am a criminal law specialist with three years of experience. My journey in the legal field has been marked by a deep understanding of criminal law, and a track record of successfully representing clients in a wide range of criminal cases. I meticulously analyze case details, conduct thorough research, and formulate strong, evidence-based defenses. My negotiation skills are exceptional, and I am known for my ability to achieve favorable outcomes for my clients.”`;
  const vh = Dimensions.get('window').height;
  return (
    <ScrollView style={{flex: 1, position: 'relative', height: vh}}>
      <Box paddingHorizontal={'3%'}>
        <Pressable
          style={{flexDirection: 'row', gap: 3, alignItems: 'center'}}
          onPress={() => navigation.goBack()}>
          <BackIcon size={40} />
          <ScreenHeader heading="Profile" />
        </Pressable>
        <Box
          width={'100%'}
          flex={0.5}
          justifyContent="center"
          alignItems="center">
          <FastImage
            source={require('./profile.jpg')}
            style={styles.profileImage}
          />
        </Box>
        <Box width={'100%'} flex={2}>
          <AppText
            textAlign="center"
            fontWeight="700"
            fontSize={24}
            text="Umer Suleiman"
          />
          <AppText
            text={`${role === 'Lawyer' ? 'Description' : 'Bio'}`}
            fontSize={22}
            opacity={0.8}
            fontWeight="700"
            paddingLeft={'3%'}
          />
          <AppText
            fontSize={17}
            text={`${
              role === 'Lawyer'
                ? desc
                : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies ultrices, nisl nisl ultricies nisl'
            }`}
            paddingLeft={'3%'}
            paddingHorizontal={'12%'}
          />
          <Box
            flexDirection="row"
            paddingVertical={6}
            alignItems="center"
            justifyContent="space-between">
            <Box flexDirection="row" gap={3}>
              {role === 'Lawyer' ? <LocationIcon size={40} /> : null}
              <AppText
                fontSize={22}
                opacity={0.8}
                marginTop={'2%'}
                paddingLeft={'3%'}
                text="Location"
              />
            </Box>
            <AppText fontSize={22} color={COLORS.primary} text="Rawalpindi" />
          </Box>
          {role === 'Lawyer' ? (
            <>
              <AppText text="Office Address" fontSize={18} fontWeight="700" />
              <AppText
                text="Raja Bazar FC05 Street , Rawalpindi"
                fontSize={17}
              />
              <AppText text="Contact" fontSize={18} fontWeight="700" />
              <AppText text="0300-1234567" fontSize={17} />
              <AppText text="Email" fontSize={18} fontWeight="700" />
              <AppText text="example@g.com" fontSize={17} />
              <AppText text="Social Links" fontSize={18} fontWeight="700" />
            </>
          ) : (
            <>
              <AppText text="Profession" fontSize={18} fontWeight="700" />
              <AppText text="Contact" fontSize={18} fontWeight="700" />
            </>
          )}
          <Box flexDirection="row" gap={12} justifyContent="center">
            <FbIcon size={40} />
            <LinkedInIcon size={40} />
            <TwitterIcon size={40} />
          </Box>
        </Box>
      </Box>
      <Pressable
        style={{
          backgroundColor: COLORS.primary,
          padding: 10,
          top: 0,
          right: 0,
          position: 'absolute',
        }}
        onPress={() => setRole(`${role === 'Client' ? 'Lawyer' : 'Client'}`)}>
        <AppText
          fontWeight="700"
          text={`Shift to ${role === 'Lawyer' ? 'Client' : 'Lawyer'}`}
        />
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
