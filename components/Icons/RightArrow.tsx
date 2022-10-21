/* eslint-disable react/require-default-props */
import * as React from "react";
import Svg, { Path } from "react-native-svg";

const RightArrow = ({
  fill = "white",
  size,
}: {
  fill?: string;
  size?: number;
}) => {
  const height = size || "8";
  const width = size ? size * 0.5 : "12";
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <Path
        d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645L8.17157 0.464467C7.97631 0.269205 7.65973 0.269205 7.46447 0.464467C7.2692 0.659729 7.2692 0.976311 7.46447 1.17157L10.2929 4L7.46447 6.82843C7.2692 7.02369 7.2692 7.34027 7.46447 7.53553C7.65973 7.7308 7.97631 7.7308 8.17157 7.53553L11.3536 4.35355ZM-4.37114e-08 4.5L11 4.5L11 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
        fill={fill}
      />
    </Svg>
  );
};

export default RightArrow;
