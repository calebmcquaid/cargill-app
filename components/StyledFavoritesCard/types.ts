import { BrandProps } from "../content/types";

export enum LOGO {
  sweetBran = "sweetbran",
  oneTrak = "oneTrak",
  ramp = "ramp",
}

export interface FavoritesPropType {
  id?: number;
  course: string;
  logo: LOGO;
  header: string;
  description: string;
  numOfSections: number;
  progress: number;
  content: BrandProps[];
}
