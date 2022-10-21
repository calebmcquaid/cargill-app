/* eslint-disable react/require-default-props */
import * as React from "react";
import Svg, { Rect } from "react-native-svg";

const PageProgressIcon = () => {
  return (
    <Svg width="73" height="10" viewBox="0 0 73 10" fill="none">
      <Rect width="25" height="10" rx="5" fill="#A79E70" />
      <Rect x="39" width="10" height="10" rx="5" fill="#333333" />
      <Rect x="63" width="10" height="10" rx="5" fill="#333333" />
    </Svg>
  );
};

export default PageProgressIcon;
