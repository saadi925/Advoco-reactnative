import React from 'react';
import {G, Path, Svg} from 'react-native-svg';

export  function ChatIcon({size = 32, fill = '#000'}) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} fill={fill} viewBox="0 0 24 24" id="chat"><Path d="M8,11a1,1,0,1,0,1,1A1,1,0,0,0,8,11Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,12,11Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,16,11ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,.3-.71,1,1,0,0,0-.3-.7A8,8,0,1,1,12,20Z"></Path></Svg>
  );
}
