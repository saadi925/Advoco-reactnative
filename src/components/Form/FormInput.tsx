import React, {ReactElement, useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {Box} from '..';
import {COLORS} from '../../constants/Theme';

interface InputProps {
  placeholder?: string;
  placeholderTextColor?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'numeric' | 'email-address';
  icon?: ReactElement;
  bgColor?: string;
}

export const FormInput: React.FC<InputProps> = ({
  placeholder,
  placeholderTextColor,
  onChangeText,
  value,
  secureTextEntry,
  keyboardType,
  icon,
  bgColor = '#000',
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <Box>
      <Box
        flexDirection="row"
        alignItems="center"
        width={'100%'}
        borderWidth={1}
        borderRadius={5}
        backgroundColor={bgColor}
        style={isFocused ? styles.focused : styles.unFocused}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor || '#fff'}
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {icon}
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '90%',
    paddingLeft: '4%',
    paddingHorizontal: '5%',
    fontSize: 18,
    borderRadius: 8,
    fontWeight: '500',
    backgroundColor: COLORS.background,
  },
  focused: {
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 8,
  },
  unFocused: {
    borderWidth: 1,
    borderColor: 'gray',
  },
  inputWrapper: {
    // borderWidth: 1,
  },
});
