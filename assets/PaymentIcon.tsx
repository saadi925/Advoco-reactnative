import React from 'react';
import {Svg, Path} from 'react-native-svg';

export function PaymentIcon({size = 32, fill = '#fff'}) {
  return (
    <Svg width={size} height={size} fill="none" id="payment">
      <Path
        fill={fill}
        d="M6 14.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H6Z"></Path>
      <Path
        fill={fill}
        fill-rule="evenodd"
        d="M5 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H5Zm14 1.5H5A1.5 1.5 0 0 0 3.5 7v1.25h17V7A1.5 1.5 0 0 0 19 5.5ZM3.5 17V9.75h17V17a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 17Z"
        clip-rule="evenodd"></Path>
    </Svg>
  );
}
