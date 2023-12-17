import React from 'react';
import {Text, StyleSheet, TextStyle, TextProps} from 'react-native';
import {COLORS} from '../constants/Theme';

interface AppText {
  text: React.ReactNode;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  style?: TextStyle | TextStyle[];
}
type AppTextProps = TextStyle & AppText & TextProps;
export const AppText: React.FC<AppTextProps> = ({
  text,
  fontWeight,
  style,
  fontSize,
  textAlign,
  textTransform,
  color = COLORS.text,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  marginLeft,
  marginRight,
  marginTop,
  paddingTop,
  paddingHorizontal,
  paddingVertical,
  marginVertical,
  ellipsizeMode,
  numberOfLines,
  opacity,
}) => {
  return (
    <Text
      ellipsizeMode={ellipsizeMode}
      numberOfLines={numberOfLines}
      style={[
        styles.defaultStyle,
        {
          fontWeight,
          opacity,
          fontSize,
          textAlign,
          textTransform,
          color,
          padding,
          paddingBottom,
          paddingLeft,
          paddingRight,
          marginLeft,
          marginRight,
          marginTop,
          paddingTop,
          paddingHorizontal,
          paddingVertical,
          marginVertical,
        },
        style,
      ]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    fontSize: 16,
    color: COLORS.text,
  },
});
