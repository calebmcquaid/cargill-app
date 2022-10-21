import { RecapMediaProps, RecapProps } from "../types";

export const OVERVIEW_RECAP_CONTENT: RecapProps[] = [
  {
    heading: "Key takeaway #1",
    summary: "Sweet Bran is a unique product and service partnership.",
    mainPoints: [
      {
        main: "What it is",
        bulletPoints: [
          "Sweet Bran is a highly palatable, high-energy ration ingredient for finishing cattle. It replaces a portion of the grain in the diet with digestible fiber and nutrient-dense steep.",
        ],
      },
      {
        main: "What it does",
        bulletPoints: [
          "Sweet Bran stabilizes the rumen environment which results in improved digestive health, greater energy intake, and greater utilization of the entire diet.",
        ],
      },
      {
        main: "What it represents",
        bulletPoints: [
          "Sweet Bran represents a different choice for feedyards - improving animal health and performance while creating more peace of mind with a new experience of reliable supply and quality.",
        ],
      },
    ],
    media: [require("../images/sweetBran/Overview-recap11.jpg")],
  },
];

export const OVERVIEW_RECAP_MEDIA: RecapMediaProps = [""];

export const RUMEN_RECAP_CONTENT: RecapProps[] = [
  {
    heading: "Key takeaway #1",
    summary: "The rumen is the key to better health and greater energy",
    mainPoints: [
      { main: "A pH-stable rumen is important for health and performance" },
      {
        main: "Cattle get most of their energy from the rumen – in form of VFAs",
      },
      {
        main: "High starch diets can produce VFAs faster than can be absorbed, leading to a drop in pH – and acidosis. Sub-acute acidosis reduces intake and reduces the ability to digest the entire diet.",
      },
    ],
  },
  {
    heading: "Key takeaway #2",
    summary: "Sweet Bran promotes a healthy rumen",
    mainPoints: [
      {
        main: "Part of the starch in the diet is replaced with digestible fiber, steep.",
      },
      {
        main: "Rumen pH remains much more stable this leads to better health, reduced acidosis and increased energy from better intake and more complete digestion of the diet.",
      },
    ],
    media: [require("../images/sweetBran/RumenHealth12.jpg")],
  },
];

export const RUMEN_RECAP_MEDIA: RecapMediaProps = [""];

export const PERFORMANCE_RECAP_CONTENT: RecapProps[] = [
  {
    heading: "Key takeaway #1",
    summary: "More energy from greater intake",
    mainPoints: [
      {
        main: "Improved palatability and a stable rumen results in greater intake ",
      },
    ],
  },
  {
    heading: "Key takeaway #2",
    summary: "More energy from utilizing entire diet",
    mainPoints: [
      {
        main: "Stable rumen pH keeps microbe population in balance so more of all VFAs are present to digest and utilize all the foodstuffs in the diet. Swings in pH will limit the diversity of the microbe population – leading to utilization of only part of the diet.",
      },
    ],
  },
  {
    heading: "Key takeaway #3",
    summary: "Better animal health",
  },
];

// export const PERFORMANCE_RECAP_MEDIA: RecapMediaProps = [""];

export const OPERATIONAL_RECAP_CONTENT: RecapProps[] = [
  {
    heading: "Key takeaway #1",
    summary:
      "Sweet Bran frees up the demand on your operation’s resources and time",
    mainPoints: [
      {
        main: "33% reduction in roughage needs on average",
      },
      {
        main: "1 -2 hour reduction per day in mill operations",
      },
      {
        main: "8-12 hour reduction per day in overall man hours",
      },
    ],
    media: [require("../images/sweetBran/OperationalBenefits14.jpg")],
  },
];

export const OPERATIONAL_RECAP_MEDIA: RecapMediaProps = [""];

export const SERVICE_RECAP_CONTENT: RecapProps[] = [
  {
    heading: "Key takeaway #1",
    summary: "This is a very different partnership",
    mainPoints: [
      {
        main: "As a sole supplier, we understood that value is different for our customers who now rely on us much differently than a commodity supplier. So we crafted brand promises to remove frustrations and build trust for long-term partnerships",
      },
    ],
  },
  {
    heading: "Key takeaway #2",
    summary: "Our first promise is; you know it will be there",
    mainPoints: [
      {
        main: "For many customers who now rely on Sweet Bran, they need to know it will always be there. So we remove that uncertainty.",
        bulletPoints: [
          "For most, we work with them on managing inventory and scheduling deliveries",
          "We build processes and systems around this promise; RCM teams and Cortx",
          "Instead of picking it up, we deliver to customers (iPad app drivers use)",
        ],
      },
    ],
  },
  {
    heading: "Key takeaway #3",
    summary: "Our 2nd promise is; You know what it is",
    mainPoints: [
      {
        main: "Consistent and predictable feed quality is critical and another typical frustration with commodity supply, so we remove this frustration too.",
        bulletPoints: [
          "From our operations, to delivery in dedicated rail (to guard against cross contamination), to dedicated delivery, we ensure consistent quality\n\nEvery truck load is tested",
        ],
      },
    ],
  },
  {
    heading: "Key takeaway #4",
    summary: "We make it easy to do business with us",
    mainPoints: [
      {
        main: "We want you to succeed and our field advisors include nutritionists to help you get the most from Sweet Bran but our sales team can advise you on any part of your organization",
      },
      {
        main: "Even our invoicing and billing is set up in a way to make it easy for our customers.",
      },
    ],
    media: [require("../images/sweetBran/Overview-recap10.jpg")],
  },
];

export const SERVICE_RECAP_MEDIA: RecapMediaProps = [""];
