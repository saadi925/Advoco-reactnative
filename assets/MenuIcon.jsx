import React from 'react';
import { Path,Svg,G } from 'react-native-svg';
export function MenuIcon({size = 48,fill ="#fff"}) {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    id="menu"
  >
    <Path
      d="M4.484 4a.5.5 0 0 0 .051 1h6.93a.5.5 0 1 0 0-1h-6.93a.5.5 0 0 0-.05 0zm0 3a.5.5 0 0 0 .051 1h6.93a.5.5 0 1 0 0-1h-6.93a.5.5 0 0 0-.05 0zm0 3a.5.5 0 0 0 .051 1h6.93a.5.5 0 1 0 0-1h-6.93a.5.5 0 0 0-.05 0z"
      fillRule="evenodd"
      fill={fill}
    />
  </Svg>
    )
}


export function MenuDashboardIcon({size = 32, fill = '#000'}) {
  return (
    <Svg fill={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 128 96" id="email"><G data-name="Layer 2"><Path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z"></Path></G></Svg>
  )
}
