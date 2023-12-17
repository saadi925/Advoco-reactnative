import Svg,{Path,Circle,G,Rect} from "react-native-svg"
export  function FbIcon({size =32 , fill = "#fff"}) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 112.196 112.196" id="facebook"><Circle cx="56.098" cy="56.098" r="56.098" fill="#3b5998"></Circle><Path fill="#fff" d="M70.201 58.294h-10.01v36.672H45.025V58.294h-7.213V45.406h7.213v-8.34c0-5.964 2.833-15.303 15.301-15.303l11.234.047v12.51h-8.151c-1.337 0-3.217.668-3.217 3.513v7.585h11.334l-1.325 12.876z"></Path></Svg>
  )
}

export  function TwitterIcon({size=32}) {
  return (
    <Svg width={size}  height={size} viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="#fff"/>
    </Svg>
    
    )
}

export  function LinkedInIcon({size=32}) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 201 201" id="linkedin"><Rect width="201" height="201" fill="#379ad0" rx="19" ry="19"></Rect><Path fill="#fefefe" d="M39 102v60h29V80H39zM54 39c-8 0-15 7-15 15 0 7 7 14 15 14 7 0 14-7 14-14 0-8-7-15-14-15zm107 66c-2-15-9-25-30-25-12 0-20 5-24 11V80H84v82h24v-41c0-10 2-21 15-21s14 13 14 22v40h25v-45c0-4 0-8-1-12z"></Path></Svg>
    )
}

