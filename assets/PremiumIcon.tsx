import React from 'react';
import {Path, Svg} from 'react-native-svg';

export function PremiumIcon() {
  return (
    <Svg viewBox="0 0 20 20" id="badge">
      <path
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        d="M16 11.5V4.9c0-.6-.6-1.1-1.2-1-.4.1-.8.1-1.2.1-1.1 0-2.2-.3-3-.9-.3-.2-.7-.2-1 0-1 .6-1.9.9-3 .9-.5 0-1 0-1.4-.1-.6-.2-1.2.3-1.2 1V11.6"></path>
      <Path
        fill="none"
        stroke="#000"
        stroke-miterlimit="10"
        d="M4 7.2V13c0 .8.4 1.4 1.1 1.8l4 2.1c.6.3 1.2.3 1.8 0l4-2c.7-.3 1.1-1 1.1-1.8V7.2"></Path>
      <Path
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        d="m10.2 7.2.7 1.4c.1.2.3.3.5.3l1.5.2c.2 0 .2.2.1.3l-1.1 1.1c-.1.1-.2.3-.2.5l.3 1.5c0 .2-.1.3-.3.2l-1.4-.7c-.2-.1-.4-.1-.6 0l-1.4.7c-.1.1-.3 0-.3-.2l.3-1.5c0-.2 0-.4-.2-.5l-1-1c-.2-.1-.1-.3.1-.3L8.7 9c.2 0 .4-.2.5-.3l.7-1.4c0-.2.2-.2.3-.1z"></Path>
    </Svg>
  );
}
