import React from 'react';
import {Svg, Path, G} from 'react-native-svg';

export function SearchIcon({size = 32, fill = '#fff'}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={fill}
      viewBox="0 0 24 24"
      id="search">
      <G data-name="Layer 2">
        <Path
          d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"
          data-name="search"></Path>
      </G>
    </Svg>
  );
}
