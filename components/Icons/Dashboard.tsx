/* eslint-disable react/require-default-props */
import * as React from "react";
import Svg, { Rect } from "react-native-svg";

const DashboardIcon = ({
  fill = "white",
  size,
}: {
  fill?: string;
  size?: number;
}) => {
  const height = size || "45";
  const width = size ? size * 0.5 : "90";
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <Rect x="0.651367" width="84.0606" height="45" rx="22.5" fill={fill} />
      <Rect
        x="29.4092"
        y="10.3301"
        width="10.855"
        height="9.81413"
        rx="2"
        fill="#A79E70"
      />
      <Rect
        x="29.4092"
        y="25.3784"
        width="10.855"
        height="9.81413"
        rx="2"
        fill="#A79E70"
      />
      <Rect
        x="46.0537"
        y="10.3301"
        width="10.855"
        height="9.81413"
        rx="2"
        fill="#A79E70"
      />
      <Rect
        x="46.0537"
        y="25.3784"
        width="10.855"
        height="9.81413"
        rx="2"
        fill="#A79E70"
      />
    </Svg>
  );
};

export default DashboardIcon;
