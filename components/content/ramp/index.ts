import { BrandProps } from "../types";
import {
  OPERATIONAL_RECAP_CONTENT,
  OPERATIONAL_RECAP_MEDIA,
  OVERVIEW_RECAP_CONTENT,
  OVERVIEW_RECAP_MEDIA,
  PERFORMANCE_RECAP_CONTENT,
  PERFORMANCE_RECAP_MEDIA,
  RUMEN_RECAP_CONTENT,
  RUMEN_RECAP_MEDIA,
  SERVICE_RECAP_CONTENT,
  SERVICE_RECAP_MEDIA,
} from "./Recaps";
import {
  OPERATIONAL_SECTION_CONTENT,
  OVERVIEW_SECTION_CONTENT,
  PERFORMANCE_SECTION_CONTENT,
  RUMEN_SECTION_CONTENT,
  SERVICE_SECTION_CONTENT,
} from "./Sections";

const RAMP_CONTENT: BrandProps[] = [
  {
    section: "Overview",
    content: OVERVIEW_SECTION_CONTENT,
    recap: OVERVIEW_RECAP_CONTENT,
    recapMedia: OVERVIEW_RECAP_MEDIA,
  },
  {
    section: "Rumen Health",
    content: RUMEN_SECTION_CONTENT,
    recap: RUMEN_RECAP_CONTENT,
    recapMedia: RUMEN_RECAP_MEDIA,
  },
  {
    section: "Performance Claims",
    content: PERFORMANCE_SECTION_CONTENT,
    recap: PERFORMANCE_RECAP_CONTENT,
    recapMedia: PERFORMANCE_RECAP_MEDIA,
  },
  {
    section: "Operational Benefits",
    content: OPERATIONAL_SECTION_CONTENT,
    recap: OPERATIONAL_RECAP_CONTENT,
    recapMedia: OPERATIONAL_RECAP_MEDIA,
  },
  {
    section: "Service Experience",
    content: SERVICE_SECTION_CONTENT,
    recap: SERVICE_RECAP_CONTENT,
    recapMedia: SERVICE_RECAP_MEDIA,
  },
];

export default RAMP_CONTENT;
