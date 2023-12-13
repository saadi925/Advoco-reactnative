import React from 'react';
import { Circle,Rect,Path,Svg,G, Line } from 'react-native-svg';
export function MenuIcon({size = 40, fill = '#000', color=""}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={fill}
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 64 64"
      id="menu">
      <G>
        <Rect width={size} height={size} fill="none"></Rect>
        <Circle cx="32" cy="32" r="26" fill="#3fc1c9"></Circle>
        <Path
          fill={color}
          d="M180,754L204,754C205.104,754 206,753.104 206,752C206,750.896 205.104,750 204,750L180,750C178.896,750 178,750.896 178,752C178,753.104 178.896,754 180,754Z"
          transform="translate(-160 -720)"></Path>
        <Path
          fill={color}
          d="M180,754L204,754C205.104,754 206,753.104 206,752C206,750.896 205.104,750 204,750L180,750C178.896,750 178,750.896 178,752C178,753.104 178.896,754 180,754Z"
          transform="translate(-160 -730)"></Path>
        <Path
          fill={color}
          d="M180,754L204,754C205.104,754 206,753.104 206,752C206,750.896 205.104,750 204,750L180,750C178.896,750 178,750.896 178,752C178,753.104 178.896,754 180,754Z"
          transform="translate(-160 -710)"></Path>
      </G>
    </Svg>
  );
}


export function MenuDashboardIcon({size = 32, fill = '#000'}) {
  return (
    <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 128 96" id="email"><G data-name="Layer 2"><Path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z"></Path></G></Svg>
  )
}
