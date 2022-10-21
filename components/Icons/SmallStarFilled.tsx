/* eslint-disable react/require-default-props */
import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SmallStarFilled = ({
  fill,
  width = 17,
  height = 17,
}: {
  fill?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <Path
        d="M3.72474 16.2716C3.32654 16.4872 2.8747 16.1093 2.95516 15.627L3.81139 10.4766L0.177077 6.82234C-0.162318 6.48043 0.0140848 5.85542 0.469019 5.78791L5.52178 5.03005L7.77478 0.318495C7.978 -0.106165 8.52785 -0.106165 8.73107 0.318495L10.9841 5.03005L16.0368 5.78791C16.4918 5.85542 16.6682 6.48043 16.3277 6.82234L12.6945 10.4766L13.5507 15.627C13.6312 16.1093 13.1793 16.4872 12.7811 16.2716L8.25138 13.8151L3.7237 16.2716H3.72474Z"
        fill="#A79E70"
      />
    </Svg>
  );
};

export default SmallStarFilled;
