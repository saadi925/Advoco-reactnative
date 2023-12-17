import React from 'react';
import {AppText} from '../components';
import {COLORS} from '../constants/Theme';

export default function ScreenHeader({heading}: {heading: string}) {
  return (
    <AppText
      text={heading}
      fontWeight="800"
      color={COLORS.primary}
      fontSize={28}
    />
  );
}
