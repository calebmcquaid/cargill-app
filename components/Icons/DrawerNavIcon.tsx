/* eslint-disable import/extensions */
/* eslint-disable react/require-default-props */
import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { COLORS } from "../../project.config";

const DrawerNavIcon = ({
  fill = COLORS.pureWhite,
  size,
}: {
  fill?: string;
  size?: number;
}) => {
  const height = size || "24";
  const width = size ? size * 0.5 : "33";
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={fill}
    >
      <Path
        d="M1 1H32"
        stroke="#F2F2F2"
        stroke-width="2"
        stroke-linecap="round"
      />
      <Path
        d="M1 12H22.2105"
        stroke="#F2F2F2"
        stroke-width="2"
        stroke-linecap="round"
      />
      <Path
        d="M1 23H11.6053"
        stroke="#F2F2F2"
        stroke-width="2"
        stroke-linecap="round"
      />
    </Svg>
  );
};

export default DrawerNavIcon;
