import ONE_TRAK_CONTENT from "./oneTrak";
import RAMP_CONTENT from "./ramp";
import SWEET_BRAN_CONTENT from "./sweetBran";
import { CourseProps, LOGO } from "./types";

const COURSE_DATA: CourseProps[] = [
  {
    course: "One Trak",
    logo: LOGO.oneTrak,
    header: "The dairy product solution",
    description: "Learn about the dairies product from Cargill  ",
    numOfSections: ONE_TRAK_CONTENT.length,
    progress: 2,
    content: ONE_TRAK_CONTENT,
  },
  {
    course: "Sweet Bran",
    logo: LOGO.sweetBran,
    header: "Finish strong with sweetbran",
    description: "Learn how sweet bran helps",
    numOfSections: SWEET_BRAN_CONTENT.length,
    progress: 0,
    content: SWEET_BRAN_CONTENT,
  },
  {
    course: "Ramp",
    logo: LOGO.ramp,
    header: "Start strong with ramp",
    description: "Learn how ramp helps",
    numOfSections: RAMP_CONTENT.length,
    progress: 0,
    content: RAMP_CONTENT,
  },
];

export default COURSE_DATA;
