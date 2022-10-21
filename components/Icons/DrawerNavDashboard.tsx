/* eslint-disable react/require-default-props */
import * as React from "react";
import Svg, { Rect } from "react-native-svg";

const DrawerDashboardIcon = ({
  fill = "white",
  size,
}: {
  fill?: string;
  size?: number;
}) => {
  const height = size || "17";
  const width = size ? size * 0.5 : "19";
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <Rect width="7.3622" height="6.65623" rx="2" fill="#A79E70" />
      <Rect y="10.2062" width="7.3622" height="6.65623" rx="2" fill="#A79E70" />
      <Rect x="11.2886" width="7.3622" height="6.65623" rx="2" fill="#A79E70" />
      <Rect
        x="11.2886"
        y="10.2062"
        width="7.3622"
        height="6.65623"
        rx="2"
        fill="#A79E70"
      />
    </Svg>
  );
};

export default DrawerDashboardIcon;
