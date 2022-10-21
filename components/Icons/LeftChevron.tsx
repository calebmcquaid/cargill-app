/* eslint-disable react/require-default-props */
import * as React from "react";
import Svg, { Path } from "react-native-svg";

const LeftChevron = ({
  fill = "white",
  size,
}: {
  fill?: string;
  size?: number;
}) => {
  const height = size || "16";
  const width = size ? size * 0.5 : "16";
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <Path
        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
        fill={fill}
      />
    </Svg>
  );
};

export default LeftChevron;
