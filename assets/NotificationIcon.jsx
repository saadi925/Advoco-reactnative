import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, Circle, G, Path } from 'react-native-svg';

export function NotificationIcon({size = 32, fill = '#ffff', now=0}) {
  return (
    <View style={styles.container}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        height={size}
        width={size}
        viewBox="0 0 24 24"
        id="notification">
        <G
          fill="none"
          fillRule="evenodd"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          transform="translate(3.5 2)">
          <Path d="M.00082545485 11.7871203L.00082545485 11.568135C.0329512746 10.9202451.240598836 10.2924906.602355621 9.74960514 1.20450201 9.09746185 1.61670318 8.29830554 1.79571385 7.43597814 1.79571385 6.76950123 1.79571385 6.09350321 1.85392645 5.4270263 2.15469153 2.21841601 5.32727806 3.37507799e-14 8.46105618 3.37507799e-14L8.53867298 3.37507799e-14C11.6724511 3.37507799e-14 14.8450376 2.21841601 15.1555048 5.4270263 15.2137174 6.09350321 15.1555048 6.76950123 15.2040153 7.43597814 15.3854338 8.30030508 15.7972211 9.10194449 16.3973735 9.75912624 16.7618363 10.2972046 16.9698126 10.9226612 16.9989037 11.568135L16.9989037 11.7775992C17.0205591 12.6480449 16.720769 13.4968208 16.1548211 14.167395 15.4069586 14.9514753 14.392113 15.4392693 13.3024038 15.5384332 10.1069938 15.8812057 6.8830333 15.8812057 3.68762325 15.5384332 2.59914366 15.4349924 1.58575794 14.9479001.835206008 14.167395.278 13.496309-.0177593319 12.6525831.00082545485 11.7871203zM6.05493552 18.8517756C6.55421005 19.478449 7.28739599 19.8840184 8.09222803 19.978725 8.89706007 20.0734316 9.70716835 19.8494655 10.3432635 19.3563938 10.5389031 19.2105605 10.7149406 19.0410062 10.8671768 18.8517756"></Path>
        </G>
      </Svg>
      {now > 0 && (
        <View style={styles.badge}>
          <Text style={styles.text}>{now}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    right: -12,
    top: -2,
    backgroundColor: 'red',
    borderRadius: 9,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 12,
  },
});
