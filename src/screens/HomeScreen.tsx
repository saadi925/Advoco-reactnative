import React, {useState} from 'react';
import {AppText, Box} from '../components';
import ScreenHeader from './ScreenHeader';
import {ClientScreenTempData} from '../../mockData/ClientScreenData';
import {LawyerListing} from '../components/LawyerListing';
import {CaseListings} from '../components/CaseListing';
import {LawyerScreenTempData} from '../../mockData/LawyerScreenData';
import {Pressable} from 'react-native';
import {COLORS} from '../constants/Theme';
export function HomeScreen() {
  const [role, setRole] = useState('Lawyer');
  return (
    <Box flex={1}>
      <Pressable
        style={{
          backgroundColor: COLORS.primary,
          padding: 10,
          position: 'absolute',
          top: 0,
          right: 0,
          zIndex: 1,
        }}
        onPress={() => setRole(`${role === 'Client' ? 'Lawyer' : 'Client'}`)}>
        <AppText
          fontWeight="700"
          text={`Shift to ${role === 'Lawyer' ? 'Client' : 'Lawyer'}`}
        />
      </Pressable>
      <ScreenHeader heading={role} />
      {role === 'Client' ? (
        <LawyerListing data={ClientScreenTempData} />
      ) : (
        <CaseListings data={LawyerScreenTempData} />
      )}
    </Box>
  );
}
