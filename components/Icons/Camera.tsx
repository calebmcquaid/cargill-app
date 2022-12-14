/* eslint-disable react/require-default-props */
import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Camera = ({
  fill = "gray",
  width = 16,
  height = 16,
}: {
  fill?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <Svg
      width={width}
      height={height}
      fill={fill || "currentColor"}
      viewBox="0 0 16 16"
    >
      <Path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
      <Path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
    </Svg>
  );
};

export default Camera;
