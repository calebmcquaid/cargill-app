/* eslint-disable react/require-default-props */
import * as React from "react";
import Svg, { Path } from "react-native-svg";

const TabNavStar = ({
  fill,
  width = 22,
  height = 20,
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
        d="M5.39235 19.6503C4.87852 19.9018 4.29546 19.461 4.39929 18.8982L5.50417 12.8894L0.814438 8.62614C0.376482 8.22725 0.604113 7.49807 1.19116 7.41931L7.71126 6.53514L10.6185 1.03833C10.8808 0.542889 11.5903 0.542889 11.8525 1.03833L14.7598 6.53514L21.2799 7.41931C21.867 7.49807 22.0946 8.22725 21.6553 8.62614L16.9669 12.8894L18.0718 18.8982C18.1756 19.461 17.5926 19.9018 17.0787 19.6503L11.2335 16.7843L5.39102 19.6503H5.39235Z"
        stroke="#A79E70"
        fill={fill}
      />
    </Svg>
  );
};

export default TabNavStar;
