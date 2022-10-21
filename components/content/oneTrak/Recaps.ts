import { RecapMediaProps, RecapProps } from "../types";

export const OVERVIEW_RECAP_CONTENT: RecapProps[] = [
  {
    heading: "Key takeaway #1",
    summary:
      "At approximately 40% of the diet, OneTrak is a unique approach for dairies to simplify their rations and operations.",
    mainPoints: [
      {
        main: "What it is",
        bulletPoints: [
          "At 40% of the ration, OneTrak is a foundational, macro ingredient for dairies that complements on-farm rations and eliminates the need for other sourced ingredients. It is a palatable source of energy that includes; digestible fiber, amino  acids, vitamins and minerals",
        ],
      },
      {
        main: "What it does",
        bulletPoints: [
          "OneTrak improves rumen health and results in greater energy intake and utilization of the entire diet. As a high inclusion, moisture-rich ingredient, it reduces batch time and sorting of the ration.",
        ],
      },
      {
        main: "What we sell",
        bulletPoints: [
          "OneTrak represents a unique choice for dairies to simplify their feeding practices while also improving the health and performance of their herd.",
        ],
      },
    ],
    media: [require("../images/oneTrak/Overview-recap12.jpg")],
  },
];

export const OVERVIEW_RECAP_MEDIA: RecapMediaProps = ["OverviewRecap.jpg"];

export const RUMEN_RECAP_CONTENT: RecapProps[] = [
  {
    heading: "Key takeaway #1",
    summary: "The rumen is the key to better health and greater energy",
    mainPoints: [
      { main: "A pH-stable rumen is important for health and performance" },
      {
        main: "Cows get most of their energy from the rumen – in form of VFAs",
      },
    ],
  },
  {
    heading: "Key takeaway #2",
    summary: "OneTrak promotes a healthy rumen",
    mainPoints: [
      {
        main: "Part of the starch in the diet is replaced with digestible fiber, steep and protein.",
      },
      {
        main: "Butyrate concentration increases, which aids in rumen epithelial metabolism.  This may improve VFA absorption from the rumen, helping maintain a healthy rumen pH (Krogstad et al., 2021).",
      },
      {
        main: "Rumen pH remains much more stable this leads to better health, reduced acidosis and more energy from better intake and more complete digestion of the diet.",
      },
    ],
  },
  {
    heading: "Background Research",
    researchContent: [
      {
        researchTitle:
          "Krogstad et al., 2021. Applied Anim. Sci. 37(5):559-573. Feeding a branded, modified wet corn gluten feed to lactating dairy cows: A meta-regression approach",
        researchSummary:
          "This study supports the claims of increased butyrate.  SB stands for Sweet Bran, but also includes SBR and would be the same base product as OneTrak.  OneTrak just has the added minerals/vitamins and protein.\n\nClearly, substitution strategy when including SB influences changes in the rumen environment. Butyrate concentration was increased when SB was fed, and butyrate is important for rumen epithelial metabolism. Increasing ruminal butyrate concentration has increased blood flow to the rumen and VFA absorption from the rumen (Storm et al., 2011). Increasing VFA absorption resulting from butyrate has also been suggested by Herrick et al. (2017) who observed a concomitant increase in rumen pH with butyrate supplementation. Increasing butyrate by feeding SB may improve VFA absorption from the rumen which may aid in maintaining a healthy rumen pH. Increased ruminal butyrate concentrations may also be beneficial during the transition period as it was accompanied by reduced liver lipid content of lactating dairy cows (DeFrain et al., 2006).",
      },
    ],
    media: [require("../images/oneTrak/Overview-recap6.jpg")],
  },
];

export const RUMEN_RECAP_MEDIA: RecapMediaProps = ["RumenRecap.jpg"];

export const PERFORMANCE_RECAP_CONTENT: RecapProps[] = [
  {
    heading: "Key takeaway #1",
    summary:
      "a OneTrak diet is a higher-energy diet, because not only is intake increased, but so is utilization of the entire ration",
    mainPoints: [
      {
        main: "Improved palatability and a stable rumen results in greater intake ",
        bulletPoints: [
          "High starch diets can produce VFAs faster than can be absorbed, leading to a drop in pH – and sub-acute acidosis. Sub-acute acidosis results in the cow eating less and less often.",
        ],
      },
      {
        main: "Stable rumen pH keeps the microbe population in balance so more of all VFAs are present to digest and utilize all the foodstuffs in the diet. Swings in pH will limit the microbe population – leading to utilization of only part of the diet.",
      },
    ],
  },
  {
    heading: "Key takeaway #2",
    summary: "Better herd health",
    mainPoints: [
      {
        main: "A stable rumen pH minimizes acidosis and increases energy, resulting in a healthier herd.",
        bulletPoints: [
          "High starch diets can produce VFAs faster than can be absorbed, leading to a drop in pH – and sub-acute acidosis. Sub-acute acidosis results in the cow eating less and less often.",
        ],
      },
    ],
  },
  {
    heading: "Key takeaway #3",
    summary: "Better Production",
    mainPoints: [
      {
        main: "Research studies consistently show an average of 8.5 lbs improvement in energy-corrected milk (Boddugari et al., 2001; Brouk et al., 2006, and Mullins et al., 2010).",
      },
      {
        main: "Field results consistently demonstrate 3-5 lbs improvement in energy-corrected milk.",
      },
    ],
  },
  {
    heading: "Background Research",
    researchContent: [
      {
        researchTitle:
          "Boddugari et al., 2001. J. Dairy Sci. 84:873-884. Maximal Replacement of Forage and Concentrate with a New Wet Corn Milling Product for Lactating Dairy Cows",
        researchSummary:
          "40% inclusion of SBR (replacing forage and concentrate) vs no Sweet Bran control",
        table: [
          {
            title:
              "Table 16. Milk production and composition, BW, and body condition as influenced by diet (experiment 3).",
            head: [
              { text: "Item" },
              { text: "Control" },
              { text: "CMP", superscript: "1" },
              { text: "SE" },
            ],
            rows: [
              {
                mainData: {
                  title: { text: "Milk, kg/d" },
                  data: [
                    { text: "38.6", superscript: "b" },
                    { text: "43.9", superscript: "a" },
                    { text: "1.6" },
                  ],
                },
              },
              {
                mainData: {
                  title: { text: "Milk fat" },
                },
                subData: [
                  {
                    title: { text: "%" },
                    data: [
                      { text: "3.99" },
                      { text: "4.11" },
                      { text: "0.10" },
                    ],
                  },
                  {
                    title: { text: "kg/d" },
                    data: [
                      { text: "1.55", superscript: "b" },
                      { text: "1.81", superscript: "a" },
                      { text: "0.08" },
                    ],
                  },
                ],
              },
              {
                mainData: {
                  title: { text: "Milk Protein" },
                },
                subData: [
                  {
                    title: { text: "%" },
                    data: [
                      { text: "3.41" },
                      { text: "3.42" },
                      { text: "0.04" },
                    ],
                  },
                  {
                    title: { text: "kg/d" },
                    data: [
                      { text: "1.32", superscript: "b" },
                      { text: "1.51", superscript: "a" },
                      { text: "0.05" },
                    ],
                  },
                ],
              },
              {
                mainData: {
                  title: { text: "Milk lactose" },
                },
                subData: [
                  {
                    title: { text: "%" },
                    data: [
                      { text: "4.76" },
                      { text: "4.79" },
                      { text: "0.03" },
                    ],
                  },
                  {
                    title: { text: "kg/d" },
                    data: [
                      { text: "1.83", superscript: "b" },
                      { text: "2.12", superscript: "a" },
                      { text: "0.06" },
                    ],
                  },
                ],
              },
              {
                mainData: {
                  title: { text: "4% FCM, kg/d" },
                  data: [
                    { text: "38.5", superscript: "b" },
                    { text: "44.6", superscript: "a" },
                    { text: "1.0" },
                  ],
                },
              },
              {
                mainData: {
                  title: { text: "FCM/DMI, kg/kg" },
                  data: [
                    { text: "1.47", superscript: "b" },
                    { text: "1.79", superscript: "a" },
                    { text: "0.08" },
                  ],
                },
              },
              {
                mainData: {
                  title: { text: "Average BW, kg" },
                  data: [{ text: "613" }, { text: "612" }, { text: "10" }],
                },
              },
              {
                mainData: {
                  title: { text: "BCS", superscript: "2" },
                  data: [{ text: "2.93" }, { text: "3.00" }, { text: "0.05" }],
                },
              },
              {
                mainData: {
                  title: { text: "BCS change, wk 1 to 9" },
                  data: [{ text: "0.05" }, { text: "0.12" }, { text: "0.04" }],
                },
              },
              {
                mainData: {
                  title: { text: "NEB, Mcal/d", superscript: "3" },
                  data: [{ text: "10.8" }, { text: "7.9" }, { text: "1.5" }],
                },
              },
            ],
            footnotes: [
              {
                text: "Means within a row with unlike superscripts differ (P < 0.05).",
                superscript: "a,b",
              },
              {
                text: "Wet corn milling feed product.",
                superscript: "1",
              },
              {
                text: "Body condition score (1 = thin to 5 = obese; Wildman et al., 1982).",
                superscript: "2",
              },
              {
                text: "Net evergy balance (NE(intake) - NE(maintenance) - NE(milk)).",
                superscript: "3",
              },
              {
                text: "Journal of Dairy Science Vol. 84, No. 4, 2001",
              },
            ],
          },
          {
            title: "",
            head: [
              { text: "Item" },
              { text: "Control" },
              { text: "CMP" },
              { text: "Difference" },
            ],
            rows: [
              {
                mainData: {
                  title: { text: "Milk (lbs)" },
                  data: [{ text: "85.1" }, { text: "96.8" }, { text: "11.7" }],
                },
              },
              {
                mainData: {
                  title: { text: "Milk fat (lbs)" },
                  data: [{ text: "3.42" }, { text: "3.99" }, { text: "0.57" }],
                },
              },
              {
                mainData: {
                  title: { text: "Milk Protein (lbs)" },
                  data: [{ text: "2.9" }, { text: "3.3" }, { text: "0.4" }],
                },
              },
              {
                mainData: {
                  title: { text: "Fat Corrected Milk (lbs)" },
                  data: [{ text: "84.9" }, { text: "98.3" }, { text: "13.4" }],
                },
              },
            ],
          },
        ],
      },
      {
        researchTitle:
          "Mullins et al., 2010. J. Dairy Sci. 93:5329-5337.   Effects of feeding increasing levels of wet corn gluten feed on production and ruminal fermentation in lactating dairy cows",
        table: [
          {
            title:
              "Table 3. Effects of level of wet corn gluten feed (WCGF) on performance of lactating Holstein cows",
            head: [
              { text: "Item", superscript: "1" },
              { text: "0%", superscript: "a" },
              { text: "11%", superscript: "a" },
              { text: "23%", superscript: "a" },
              { text: "34%", superscript: "a" },
              { text: "SEM" },
              { text: "Linear", superscript: "b" },
              { text: "Quadractic", superscript: "b" },
            ],
            rows: [
              {
                mainData: {
                  title: { text: "DMI, kg/d" },
                  data: [
                    { text: "26.7" },
                    { text: "25.9" },
                    { text: "29.3" },
                    { text: "29.7" },
                    { text: "1.6" },
                    { text: "0.03" },
                    { text: "0.55" },
                  ],
                },
              },
              {
                mainData: {
                  title: { text: "Yeild (kg/d)" },
                },
                subData: [
                  {
                    title: { text: "Milk" },
                    data: [
                      { text: "36.9" },
                      { text: "37.0" },
                      { text: "40.1" },
                      { text: "38.9" },
                      { text: "2.6" },
                      { text: "0.007" },
                      { text: "0.28" },
                    ],
                  },
                  {
                    title: { text: "Milk fat" },
                    data: [
                      { text: "1.37" },
                      { text: "1.39" },
                      { text: "1.49" },
                      { text: "1.44" },
                      { text: "0.11" },
                      { text: "0.06" },
                      { text: "0.21" },
                    ],
                  },
                  {
                    title: { text: "Milk protein" },
                    data: [
                      { text: "1.11" },
                      { text: "1.14" },
                      { text: "1.21" },
                      { text: "1.21" },
                      { text: "0.08" },
                      { text: "0.01" },
                      { text: "0.49" },
                    ],
                  },
                  {
                    title: { text: "Milk lactose" },
                    data: [
                      { text: "1.85" },
                      { text: "1.85" },
                      { text: "2.02" },
                      { text: "1.95" },
                      { text: "0.13" },
                      { text: "0.01" },
                      { text: "0.32" },
                    ],
                  },
                  {
                    title: { text: "SCM" },
                    data: [
                      { text: "35.2" },
                      { text: "35.7" },
                      { text: "38.5" },
                      { text: "37.2" },
                      { text: "2.5" },
                      { text: "0.01" },
                      { text: "0.19" },
                    ],
                  },
                  {
                    title: { text: "ECM" },
                    data: [
                      { text: "38.2" },
                      { text: "38.8" },
                      { text: "41.7" },
                      { text: "40.4" },
                      { text: "2.8" },
                      { text: "0.01" },
                      { text: "0.19" },
                    ],
                  },
                ],
              },
              {
                mainData: {
                  title: { text: "Milk fat (%)" },
                  data: [
                    { text: "3.65" },
                    { text: "3.76" },
                    { text: "3.72" },
                    { text: "3.67" },
                    { text: "0.11" },
                    { text: "0.93" },
                    { text: "0.23" },
                  ],
                },
              },
              {
                mainData: {
                  title: { text: "Milk protein (%)" },
                  data: [
                    { text: "3.02" },
                    { text: "3.07" },
                    { text: "3.05" },
                    { text: "3.11" },
                    { text: "0.08" },
                    { text: "0.13" },
                    { text: "0.80" },
                  ],
                },
              },
              {
                mainData: {
                  title: { text: "Milk lactose (%)" },
                  data: [
                    { text: "5.02" },
                    { text: "5.00" },
                    { text: "5.03" },
                    { text: "5.01" },
                    { text: "0.03" },
                    { text: "0.94" },
                    { text: "0.96" },
                  ],
                },
              },
              {
                mainData: {
                  title: { text: "SCC (1000/ml)" },
                  data: [
                    { text: "40.6" },
                    { text: "64.1" },
                    { text: "31.9" },
                    { text: "50.2" },
                    { text: "14.8" },
                    { text: "0.96" },
                    { text: "0.87" },
                  ],
                },
              },
              {
                mainData: {
                  title: { text: "MUN (mg/dl)" },
                  data: [
                    { text: "17.2" },
                    { text: "16.3" },
                    { text: "16.3" },
                    { text: "17.3" },
                    { text: "0.90" },
                    { text: "0.83" },
                    { text: "0.08" },
                  ],
                },
              },
              {
                mainData: {
                  title: { text: "ECM/DMI (kg/kg)" },
                  data: [
                    { text: "1.44" },
                    { text: "1.50" },
                    { text: "1.34" },
                    { text: "1.29" },
                    { text: "0.06" },
                    { text: "0.007" },
                    { text: "0.20" },
                  ],
                },
              },
              {
                mainData: {
                  title: { text: "NE/DMI (Mcal/lg)", superscript: "2" },
                  data: [
                    { text: "1.02" },
                    { text: "1.05" },
                    { text: "0.97" },
                    { text: "0.98" },
                    { text: "0.06" },
                    { text: "0.33" },
                    { text: "0.75" },
                  ],
                },
              },
              {
                mainData: {
                  title: { text: "BW change (kg/28 d)" },
                  data: [
                    { text: "45.6" },
                    { text: "14.3" },
                    { text: "9.2" },
                    { text: "29.7" },
                    { text: "17.6" },
                    { text: "0.65" },
                    { text: "0.73" },
                  ],
                },
              },
              {
                mainData: {
                  title: { text: "BCS change /28 d" },
                  data: [
                    { text: "-0.02" },
                    { text: "0.09" },
                    { text: "0.15" },
                    { text: "0.25" },
                    { text: "0.07" },
                    { text: "0.02" },
                    { text: "0.92" },
                  ],
                },
              },
            ],
            footnotes: [
              {
                text: "Dietary ECGF (DM basis)",
                superscript: "a",
              },
              {
                text: "P-value",
                superscript: "b",
              },
              {
                text: "Total n = 24 for DMI, ECM/DMI, and NE/DMI; n = 25 for SCC; n = 28 for other variables. The SEM shown is the mean of treatment SEM",
                superscript: "1",
              },
              {
                text: "NE = net energy for productive use, defined as milk energy plus energy for BCS gain.",
                superscript: "2",
              },
            ],
          },
          {
            title:
              "Brouk et al., 2006. KSU Dairy Research Report. 14-17. RESPONSES OF LACTATING HOLSTEIN COWS TO INCREASING AMOUNTS OF WET CORN GLUTEN FEED",
            head: [
              { text: "Item" },
              { text: "Control" },
              { text: "23%" },
              { text: "34%" },
              { text: "Difference" },
            ],
            rows: [
              {
                mainData: {
                  title: { text: "Milk (lbs)" },
                  data: [
                    { text: "81.13" },
                    { text: "88.4" },
                    { text: "85.75" },
                    { text: "4.62 Milk protein" },
                  ],
                },
              },

              {
                mainData: {
                  title: { text: "(lbs)" },
                  data: [
                    { text: "2.44" },
                    { text: "2.67" },
                    { text: "2.67" },
                    { text: "0.23" },
                  ],
                },
              },
              {
                mainData: {
                  title: { text: "ECM (lbs)" },
                  data: [
                    { text: "84.2" },
                    { text: "91.9" },
                    { text: "89.1" },
                    { text: "4.9" },
                  ],
                },
              },
              {
                mainData: {
                  title: { text: "Milk fat (lbs)" },
                  data: [
                    { text: "3.02" },
                    { text: "3.28" },
                    { text: "3.17" },
                    { text: "0.15" },
                  ],
                },
              },
            ],
          },
          {
            title: "Table 2. Effects ofDiets on Performance of Lactating Cows",
            head: [
              { text: "Item" },
              { text: "0%", superscript: "a" },
              { text: "12%", superscript: "a" },
              { text: "24%", superscript: "a" },
              { text: "36%", superscript: "a" },
              { text: "SEM" },
            ],
            rows: [
              {
                mainData: {
                  title: { text: "DM intake, lb/day" },
                  data: [
                    { text: "56.8" },
                    { text: "56.2" },
                    { text: "57.3" },
                    { text: "57.4" },
                    { text: "0.92" },
                  ],
                },
              },
              {
                mainData: {
                  title: { text: "Milk, lb/d" },
                  data: [
                    { text: "80.7", superscript: "a" },
                    { text: "82.8", superscript: "ab" },
                    { text: "85.5", superscript: "b" },
                    { text: "89.3", superscript: "c" },
                    { text: "1.42" },
                  ],
                },
              },
              {
                mainData: {
                  title: { text: "Milk fat, %" },
                  data: [
                    { text: "3.58" },
                    { text: "3.54" },
                    { text: "3.73" },
                    { text: "3.67" },
                    { text: "0.08" },
                  ],
                },
              },
              {
                mainData: {
                  title: { text: "Milk protein, %" },
                  data: [
                    { text: "2.96", superscript: "a" },
                    { text: "2.96", superscript: "ab" },
                    { text: "2.98", superscript: "b" },
                    { text: "3.02", superscript: "b" },
                    { text: "0.02" },
                  ],
                },
              },
              {
                mainData: {
                  title: { text: "Milk MUN, mg/dL" },
                  data: [
                    { text: "17.0" },
                    { text: "16.3" },
                    { text: "16.5" },
                    { text: "17.0" },
                    { text: "0.35" },
                  ],
                },
              },
              {
                mainData: {
                  title: { text: "Milk fat, lb/day" },
                  data: [
                    { text: "2.88", superscript: "a" },
                    { text: "2.93", superscript: "b" },
                    { text: "3.15", superscript: "c" },
                    { text: "3.29", superscript: "c" },
                    { text: "0.08" },
                  ],
                },
              },
              {
                mainData: {
                  title: { text: "Milk protein, lb/day" },
                  data: [
                    { text: "2.37", superscript: "a" },
                    { text: "2.44", superscript: "b" },
                    { text: "2.54", superscript: "b" },
                    { text: "2.68", superscript: "b" },
                    { text: "0.09" },
                  ],
                },
              },
              {
                mainData: {
                  title: { text: "ECM, lb/day", superscript: "2" },
                  data: [
                    { text: "80.8", superscript: "a" },
                    { text: "82.5", superscript: "a" },
                    { text: "87.06", superscript: "b" },
                    { text: "91.08", superscript: "c" },
                    { text: "1.62" },
                  ],
                },
              },
              {
                mainData: {
                  title: { text: "ECM/DM intake" },
                  data: [
                    { text: "1.42", superscript: "a" },
                    { text: "1.47", superscript: "ab" },
                    { text: "1.52", superscript: "b" },
                    { text: "1.60", superscript: "c" },
                    { text: "0.03" },
                  ],
                },
              },
            ],
            footnotes: [
              {
                text: "DIET: 0% = 0% WCGF, 12% = 12% WCGF, 24% = 24% WCGF, 36% = 36% WCGF (DM basis).",
                superscript: "1",
              },
              {
                text: "Energy corrected milk",
                superscript: "2",
              },
            ],
          },
          {
            title: "",
            head: [
              { text: "Item" },
              { text: "Control" },
              { text: "36%" },
              { text: "Difference" },
            ],
            rows: [
              {
                mainData: {
                  title: { text: "Milk (lbs)" },
                  data: [{ text: "80.7" }, { text: "89.3" }, { text: "8.6" }],
                },
              },

              {
                mainData: {
                  title: { text: "Milk fat (lbs)" },
                  data: [{ text: "2.88" }, { text: "3.29" }, { text: "0.41" }],
                },
              },
              {
                mainData: {
                  title: { text: "Milk protein (lbs)" },
                  data: [{ text: "2.37" }, { text: "2.68" }, { text: "0.31" }],
                },
              },
              {
                mainData: {
                  title: { text: "ECM (lbs)" },
                  data: [
                    { text: "80.8" },
                    { text: "91.08" },
                    { text: "10.28" },
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
    media: [require("../images/oneTrak/Overview-recap7.jpg")],
  },
];

export const PERFORMANCE_RECAP_MEDIA: RecapMediaProps = [""];

export const CONSISTENCY_RECAP_CONTENT: RecapProps[] = [
  {
    heading: "Key takeaway #1",
    summary: "The importance of consistency",
    mainPoints: [
      {
        main: "Consistency in your ration is one of the hardest goals to achieve on your own. With OneTrak, what gets formulated, what gets mixed, what gets fed and what gets consumed is consistent every time — for consistent health of your herd and better performance for your dairy.",
        bulletPoints: [
          "The ration can be formulated to perfection on paper, but when mixed and fed you can get variations in ingredient quality, mixing errors and sorting at the bunk. Without OneTrak, these variations and errors are much bigger.",
        ],
      },
    ],
  },
  {
    heading: "Key takeaway #2",
    summary: "OneTrak bring consistency and simplifies the operation",
    mainPoints: [
      {
        main: "Guaranteed quality with every load",
      },
      {
        main: "Simplicity of the OneTrak program makes it easier to make a consistent batch. There is less nutrient deviation – and this can be verified with the OneTrak dashboard",
      },
      {
        main: "Moisture content helps bind ingredients for less sorting",
      },
    ],
    media: [require("../images/oneTrak/Overview-recap8.jpg")],
  },
];

export const CONSISTENCY_RECAP_MEDIA: RecapMediaProps = [""];

export const OPERATIONAL_RECAP_CONTENT: RecapProps[] = [
  {
    heading: "Key takeaway #1",
    summary: "Profitability",
    mainPoints: [
      {
        main: "Your dairy is either increasing production or maintaining production while decreasing costs. ($0.25-0.75 improvement in IOFC/hd/d)",
      },
    ],
  },
  {
    heading: "Key takeaway #2",
    summary: "Operational efficiency",
    mainPoints: [
      {
        main: "Reduces batch time (2-10 minutes/batch savings)",
      },
      {
        main: "Less time and resources (about $0.09/hd/d savings)",
      },
      {
        main: "Reduced shrink. (about $0.12/hd/d savings)",
      },
    ],
    media: [require("../images/oneTrak/Overview-recap9.jpg")],
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
        main: "For many customers who now rely on OneTrak, they need to know it will always be there. So we remove that uncertainty.",
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
        main: "We want you to succeed and our field advisors include nutritionists to help you get the most from OneTrak but our sales team can advise you on any part of your organization",
      },
      {
        main: "Even our invoicing and billing is set up in a way to make it easy for our customers.",
      },
    ],
    media: [require("../images/oneTrak/Overview-recap10.jpg")],
  },
];

export const SERVICE_RECAP_MEDIA: RecapMediaProps = [""];
