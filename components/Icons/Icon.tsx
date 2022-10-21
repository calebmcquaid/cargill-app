/* eslint-disable react/require-default-props */
import React from "react";
import { LOGO } from "../content/types";
import oneTrak from "./OneTrakLogo";
import ramp from "./RampLogo";
import sweetbran from "./SweetbranLogo";

const icons = {
  sweetbran,
  oneTrak,
  ramp,
};

const Icon = ({
  icon,
  fill,
  width,
  height,
  ...otherProps
}: {
  icon: LOGO;
  fill?: string;
  width?: any;
  height?: number;
}) => {
  return React.createElement(icons[icon], {
    fill,
    width,
    height,
    ...otherProps,
  });
};
export default Icon;
