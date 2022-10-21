/* eslint-disable react/require-default-props */
import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Calendar = ({
  fill = "#A79E70",
  width = 22,
  height = 22,
}: {
  fill?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 22 22" fill="none">
      <Path
        d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
        fill={fill}
      />
    </Svg>
  );
};

export default Calendar;
