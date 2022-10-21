/* eslint-disable react/require-default-props */
import * as React from "react";
import Svg, { Path } from "react-native-svg";

const DropdownCaret = ({
  fill = "white",
  width = 7,
  height = 5,
}: {
  fill?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 7 5" fill="none">
      <Path
        d="M5.5863 0L1.41334 0C0.522433 0 0.0771402 1.07714 0.707105 1.70711L2.79289 3.79289C3.18342 4.18342 3.81658 4.18342 4.20711 3.79289L6.29289 1.70711C6.92286 1.07714 6.47721 0 5.5863 0Z"
        fill={fill}
      />
    </Svg>
  );
};

export default DropdownCaret;
