import React from 'react';
import {Text, StyleSheet, TextStyle} from 'react-native';
import {COLORS} from '../constants/Theme';

interface AppText {
  text: string;
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
type AppTextProps = TextStyle & AppText;
export const AppText: React.FC<AppTextProps> = ({
  text,
  fontWeight,
  style,
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
}) => {
  return (
    <Text
      style={[
        styles.defaultStyle,
        {
          fontWeight,
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
