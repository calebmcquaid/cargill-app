import { StyleSheet } from "react-native";

export const COLORS = {
  pureWhite: "#FFFFFF",
  background: "#000000",
  primary: "#A79E70",
  gray: {
    black: "#1F1F1F",
    dark: "#272727",
    lighterBlack: "#333333",
    med: "#444444",
    medLight: "#595959",
    light: "#C4C4C4",
    offWhite: "#FBFBFB",
  },
  tGray: {
    4: "#BDBDBD",
    5: "#E0E0E0",
    6: "#F2F2F2",
  },
};

export const FONTS = {
  HelvNeue: "Helvetica Neue",
};

const styles = {
  h1: {
    fontFamily: FONTS.HelvNeue,
    fontSize: 30,
    color: COLORS.tGray[6],
    lineHeight: 30 * 1.05,
    letterSpacing: -0.01,
  },
  h2: {
    fontFamily: FONTS.HelvNeue,
    fontSize: 18,
    color: COLORS.tGray[6],
    lineHeight: 18 * 1.1,
    letterSpacing: -0.01,
  },
  h3: {
    fontFamily: FONTS.HelvNeue,
    fontSize: 15,
    color: COLORS.tGray[6],
    lineHeight: 15 * 1.29,
    letterSpacing: -0.01,
  },
  h4: {
    fontFamily: FONTS.HelvNeue,
    fontSize: 14,
    color: COLORS.tGray[6],
    lineHeight: 14 * 0.98,
  },
  sectionTitle: {
    fontFamily: FONTS.HelvNeue,
    fontSize: 25,
    color: COLORS.tGray[5],
    lineHeight: 25 * 1.05,
    letterSpacing: -0.01,
  },
  paragraph: {
    fontFamily: FONTS.HelvNeue,
    fontSize: 12,
    color: COLORS.tGray[4],
    lineHeight: 12 * 1.25,
  },
};

const iPadStyles = {
  h1: {
    fontFamily: FONTS.HelvNeue,
    fontSize: 50,
    color: COLORS.tGray[6],
    lineHeight: 50 * 1.05,
    letterSpacing: -0.01,
  },
  h2: {
    fontFamily: FONTS.HelvNeue,
    fontSize: 20,
    color: COLORS.tGray[6],
    lineHeight: 20 * 1.1,
    letterSpacing: -0.01,
  },
  h3: {
    fontFamily: FONTS.HelvNeue,
    fontSize: 20,
    color: COLORS.pureWhite,
    lineHeight: 20 * 1.29,
    letterSpacing: -0.01,
  },
  h4: {
    fontFamily: FONTS.HelvNeue,
    fontSize: 14,
    color: COLORS.tGray[6],
    lineHeight: 14 * 0.98,
  },
  sectionTitle: {
    fontFamily: FONTS.HelvNeue,
    fontSize: 35,
    color: COLORS.tGray[5],
    lineHeight: 35 * 1.05,
    letterSpacing: -0.01,
  },
  paragraph: {
    fontFamily: FONTS.HelvNeue,
    fontSize: 18,
    color: COLORS.tGray[4],
    lineHeight: 18 * 1.25,
  },
};

export const TABLET_TYPOGRAPHY = StyleSheet.create(iPadStyles);
export const TYPOGRAPHY = StyleSheet.create(styles);
