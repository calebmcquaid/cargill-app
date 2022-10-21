import type { DrawerScreenProps } from "@react-navigation/drawer";

export type RootDrawerParamList = {
  Dashboard: undefined;
  Courses: undefined;
  CourseDetails: undefined;
  Account: undefined;
  Favorites: undefined;
  FAQs: undefined;
  Header: undefined;
};

export type Props = {
  navigation: any;
};

export type RootDrawerScreenProps<T extends keyof RootDrawerParamList> =
  DrawerScreenProps<RootDrawerParamList, T>;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
}
