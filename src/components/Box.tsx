import React from 'react';
import {View, ViewStyle} from 'react-native';
import {COLORS} from '../constants/Theme';

interface BoxProps {
  style?: ViewStyle | ViewStyle[];
  children: React.ReactNode;
}
type AppBox = BoxProps & ViewStyle;

export const Box: React.FC<AppBox> = ({
  children,
  flex,
  flexDirection,
  alignItems,
  justifyContent,
  opacity,
  display,
  margin,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  position,
  flexWrap,
  alignContent,
  marginBottom,
  marginRight,
  marginLeft,
  marginVertical,
  backgroundColor = COLORS.background,
  borderColor,
  borderRadius,
  borderWidth,
  marginHorizontal,
  paddingHorizontal,
  paddingVertical,
  paddingTop,
  style,
  gap,
  rowGap,
  columnGap,
  marginTop,
}) => {
  return (
    <View
      style={{
        flex,
        flexDirection,
        alignItems,
        justifyContent,
        opacity,
        display,
        margin,
        padding,
        paddingBottom,
        paddingLeft,
        paddingRight,
        position,
        flexWrap,
        alignContent,
        marginBottom,
        marginTop,
        marginRight,
        marginLeft,
        marginVertical,
        backgroundColor,
        borderColor,
        borderRadius,
        borderWidth,
        marginHorizontal,
        paddingHorizontal,
        paddingVertical,
        paddingTop,
        gap,
        rowGap,
        columnGap,
        ...style,
      }}>
      {children}
    </View>
  );
};
