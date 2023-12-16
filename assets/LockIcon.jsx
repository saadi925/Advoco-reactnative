import React from 'react';
import {Svg, Path} from 'react-native-svg';

export function LockIcon({size = 32, fill = '#000'}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      id="lock"
      fill={fill}
      width={size}
      height={size}
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 29 29"
      xmlSpace="preserve">
      <Path
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M14.5 2.5A5.5 5.5 0 0 1 20 8v4.5H9V8a5.5 5.5 0 0 1 5.5-5.5z"></Path>
      <Path d="M6 11.5h17a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2z"></Path>
    </Svg>
  );
}

export  function EyeIcon({size = 32 , fill = "#fff"}) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} fill={fill} viewBox="0 0 24 24" id="eye"><Path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"></Path></Svg>
    )
}
