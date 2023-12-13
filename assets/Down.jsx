import React from 'react';
import {Svg, Path, G, Rect, Circle} from 'react-native-svg';
export function Down() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      stroke-miterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 64 64"
      id="menu">
      <G>
        <Rect width="64" height="64" fill="none"></Rect>
        <Circle cx="32" cy="32" r="26" fill="#3fc1c9"></Circle>
        <Path
          fill="#eaeaea"
          d="M180,754L204,754C205.104,754 206,753.104 206,752C206,750.896 205.104,750 204,750L180,750C178.896,750 178,750.896 178,752C178,753.104 178.896,754 180,754Z"
          transform="translate(-160 -720)"></Path>
        <Path
          fill="#eaeaea"
          d="M180,754L204,754C205.104,754 206,753.104 206,752C206,750.896 205.104,750 204,750L180,750C178.896,750 178,750.896 178,752C178,753.104 178.896,754 180,754Z"
          transform="translate(-160 -730)"></Path>
        <Path
          fill="#eaeaea"
          d="M180,754L204,754C205.104,754 206,753.104 206,752C206,750.896 205.104,750 204,750L180,750C178.896,750 178,750.896 178,752C178,753.104 178.896,754 180,754Z"
          transform="translate(-160 -710)"></Path>
      </G>
    </Svg>
  );
}
