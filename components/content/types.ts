export interface BrandProps {
  section: string;
  content: SectionProps[];
  recap?: RecapProps[];
  recapMedia?: RecapMediaProps;
}

export interface SectionProps {
  chapterHeading: string;
  title?: string;
  summary?: string;
  bulletSection?: {
    bulletHeading?: string;
    bulletpoints?: string[];
  }[];
  media?: string[];
  videoLinks?: { link: string; description: string }[];
}

export interface SearchCardProps {
  chapterHeading: string;
  title?: string;
  summary?: string | null;
  bulletHeading?: string;
  bulletpoints?: string[];
  media?: string[];
  navigation?: any;
  course?: BrandProps[];
  courseName: LOGO;
}

export interface CellItemProps {
  text: string;
  superscript?: string;
}

export interface ResearchContentRowProps {
  title: CellItemProps;
  data?: CellItemProps[];
}

export interface ResearchTableProps {
  title?: string;
  head: CellItemProps[];
  rows: {
    mainData: ResearchContentRowProps;
    subData?: ResearchContentRowProps[];
  }[];
  footnotes?: CellItemProps[];
}

export interface RecapProps {
  heading: string;
  summary?: string;
  mainPoints?: {
    main?: string;
    bulletPoints?: string[];
  }[];
  media?: string[];
  researchContent?: {
    researchTitle?: string;
    table?: ResearchTableProps[];
    researchSummary?: string;
  }[];
}

export type RecapMediaProps = string[];

export enum LOGO {
  sweetBran = "sweetbran",
  oneTrak = "oneTrak",
  ramp = "ramp",
}

export interface CourseProps {
  id?: number;
  course: string;
  logo: LOGO;
  header: string;
  description: string;
  numOfSections: number;
  progress: number;
  content?: BrandProps[];
}
