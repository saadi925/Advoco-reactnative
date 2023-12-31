import React from 'react';
import {Svg, Path, G} from 'react-native-svg';
export function EmailIcon({size = 32, fill = '#000'}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      viewBox="0 0 128 96"
      width={size}
      height={size}
      id="email">
      <G>
        <Path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z"></Path>
      </G>
    </Svg>
  );
}
