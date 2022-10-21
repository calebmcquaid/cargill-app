/* eslint-disable react/require-default-props */
import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const NextCircle = () => {
  return (
    <Svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <Circle cx="32" cy="32" r="32" fill="#A79E70" />
      <Path
        d="M19 31C18.4477 31 18 31.4477 18 32C18 32.5523 18.4477 33 19 33L19 31ZM46.7071 32.7071C47.0976 32.3166 47.0976 31.6834 46.7071 31.2929L40.3431 24.9289C39.9526 24.5384 39.3195 24.5384 38.9289 24.9289C38.5384 25.3195 38.5384 25.9526 38.9289 26.3431L44.5858 32L38.9289 37.6569C38.5384 38.0474 38.5384 38.6805 38.9289 39.0711C39.3195 39.4616 39.9526 39.4616 40.3431 39.0711L46.7071 32.7071ZM19 33L46 33L46 31L19 31L19 33Z"
        fill="#1F1F1F"
      />
    </Svg>
  );
};

export default NextCircle;
