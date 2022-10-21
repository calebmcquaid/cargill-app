import ONE_TRAK_CONTENT from "../content/oneTrak";
import SWEET_BRAN_CONTENT from "../content/sweetBran";
import { LOGO } from "../content/types";

const COURSE_DATA = [
  {
    id: 1,
    courseId: "oneTrak",
    course: "One Trak",
    logo: LOGO.oneTrak,
    header: "The dairy product solution",
    description: "Learn about the dairies product from Cargill  ",
    numOfSections: 6,
    progress: 0,
    content: ONE_TRAK_CONTENT,
  },
  {
    id: 2,
    courseId: "sweetBran",
    course: "Sweet Bran",
    logo: LOGO.sweetBran,
    header: "Learn how sweet bran helps",
    description: "",
    numOfSections: 5,
    progress: 0,
    content: SWEET_BRAN_CONTENT,
  },
  {
    id: 3,
    courseId: "ramp",
    course: "Ramp",
    logo: LOGO.ramp,
    header: "Start strong with ramp",
    description: "Learn how ramp helps",
    numOfSections: 4,
    progress: 0,
  },
];

export default COURSE_DATA;
