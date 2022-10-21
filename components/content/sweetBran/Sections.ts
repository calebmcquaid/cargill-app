import { SectionProps } from "../types";

export const OVERVIEW_SECTION_CONTENT: SectionProps[] = [
  {
    chapterHeading: "Chapter 1",
    title: "What is Sweet Bran?",
    summary:
      "Sweet Bran is a macro, finishing ingredient specifically designed to promote a stable, healthy rumen that results in greater energy for greater gain and a strong finish.",
  },
  {
    chapterHeading: "Chapter 2",
    title: "How does it work?",
    summary:
      "Sweet Bran replaces a portion of the starch in the diet with highly digestible and palatable corn bran and nutrient-dense steep.  Bran is a highly digestible fiber source that aids in buffering the rumen while the nitrogen dense steep provides ample energy to the rumen microbiome.  This promotes a stable rumen pH and an optimal microbial population in the rumen all while reducing the chances of acidosis.  Sweet Bran has the ability to get more energy into the animal by greater utilization of the entire diet.",
  },
  {
    chapterHeading: "Chapter 3",
    title: "What are key ingredients and how is it made?",
    summary:
      "Sweet Bran is not a by-product but a functional macro ingredient designed specifically for the needs of feedyard cattle.",
    bulletSection: [
      {
        bulletHeading: "Sweet Bran contains a variety of protein sources:",
        bulletpoints: [
          "Corn Bran – The outer portion of the corn kernel that is detached during the milling process. The bran portion of our product is a highly digestible fiber source that provides an optimal rumen fermentation profile that enables a more complete utilization of the entire diet.",
          "Steep – An energy-dense liquid feed that is rich in soluble protein and simple sugars. Steep is highly fermentable, allowing for production of energy-dense volatile fatty acid production by rumen microbes. The soluble protein in steep is a valuable nitrogen source, aiding in microbial growth and fermentation.",
          "Solvent Extracted Meal (SEM)/Corn Germ Meal – This is the fiber portion of the germ that is left over after the oil is extracted. It is also a good source of protein that aids in rumen fermentation and animal performance.",
        ],
      },
    ],
  },
  {
    chapterHeading: "Chapter 4",
    title: "What are the key benefits for the animal?",
    summary:
      "Sweet Bran improves the health of the rumen, which gets more energy into the animal – for better health, gain, and performance",
    bulletSection: [
      {
        bulletpoints: [
          "The increased energy is a result of greater intake and a more complete utilization and digestion of the entire diet. This is a major difference when explaining the key benefit and difference of Sweet Bran – it is not about energy that can be calculated from the formulation, but the energy from greater intake and the energy that can actually be utilized by the animal.",
          "In addition to increased intake, Sweet Bran promotes more consistent intake and better binding of ingredients to allow for less sorting at the bunk so every bite of feed is the same.",
        ],
      },
    ],
  },
  {
    chapterHeading: "Chapter 5",
    title: "What are its benefits to the operation?",
    summary:
      "Better performance means greater profits. With Sweet Bran, a large component of the diet is now managed for you, with less time devoted to mixing and sourcing ingredients.  Sweet Bran Plus provides additional nutrient delivery in the form of trace minerals, vitamins, and medications that is completely customizable to the needs of the animals.",
  },
];

export const RUMEN_SECTION_CONTENT: SectionProps[] = [
  {
    summary:
      "Sweet Bran was designed to promote a healthy rumen by minimizing the negative effects of a high-starch diet. Sweet Bran replaces a portion of the starch with digestible fiber and steep. This keeps VFA production and absorption in balance which keeps pH stable and the animal feeling well. \n\nThe healthy rumen environment has a more diverse population of microbes, improving digestibility of all the foodstuffs in the diet, resulting in more overall energy utilization of the entire ration.",
    chapterHeading: "Intro",
  },
  {
    chapterHeading: "Chapter 1",
    title: "Cattle have an energy requirement, not a starch requirement.",
    summary:
      "When you feed Sweet Bran, rumen pH stays more consistent, minimizing acidosis — resulting in more energy from greater intake and from better utilization of the entire diet.",
    bulletSection: [
      {
        bulletpoints: [
          "This challenges one of the paradigms that say you have to feed a lot of starch to produce enough energy. The reality: Sweet Bran results in higher energy diets because not only is intake increased, but so is utilization of the entire ration.",
        ],
      },
    ],
    media: [],
  },
  {
    chapterHeading: "Chapter 2",
    title: "Importance of a healthy rumen",
    summary: "A pH-stable, healthy rumen drives better health and performance.",
    bulletSection: [
      {
        bulletpoints: [
          "Cattle get most of their energy from the rumen, in the form of VFAs",
          "A healthy rumen stays stable in a pH range of 5.6 to 6.0 and above.",
          "High-starch diets can produce VFAs faster than they can be absorbed, leading to a drop in pH level – and an acidotic state.",
        ],
      },
    ],
    media: [],
  },
  {
    chapterHeading: "Chapter 3",
    title: "VFAs and Digestion",
    summary:
      "The three most prevalent volatile fatty acids in the rumen are acetate, propionate, and butyrate, which are each promoted by different feedstuffs. It’s a balancing act to make sure you have the proper ratio of volatile fatty acids from the digestion of the ingredients that you’re feeding to the animal.",
    bulletSection: [
      {
        bulletpoints: [
          "Proper balance is important for VFAs being produced. We also want balance with the production and absorption of VFAs.",
          "If a ration is high in starch, you’re going to drive production of VFAs at a rate greater than absorption, which will reduce rumen pH. This reduction in pH will shift the microbial population, reducing fiber digestibility. This means the animal is not fully utilizing the available energy in the diet.",
        ],
      },
    ],
    media: [
      require("../images/sweetBran/SweetBran-Graphic2.jpg"),
      require("../images/sweetBran/SweetBran-Graphic3.jpg"),
      require("../images/sweetBran/SweetBran-Graphic4.jpg"),
    ],
    videoLinks: [
      {
        link: "https://www.youtube.com/watch?v=6ZQYQY4ZQ0o",
        description: "Sweet Bran RAMP - Types of VFA's",
      },
    ],
  },
  {
    chapterHeading: "Chapter 4",
    title: "Acidosis impact",
    summary:
      "As acid load increases, the pH drops and results in subclinical (or subacute) acidosis and the animal stops eating.",
    bulletSection: [
      {
        bulletpoints: [
          "Once the pH sustains a level of 5.4, the animal is in an acidotic state and can stop eating altogether, until pH rises again – resulting in cyclical, inconsistent feeding",
          "Side effects over time will be reduced dry matter intake and decreased gain and performance",
        ],
      },
    ],
    media: [require("../images/sweetBran/SweetBran-Graphic5.jpg")],
  },
];

export const PERFORMANCE_SECTION_CONTENT: SectionProps[] = [
  {
    summary:
      "Sweet Bran is designed to promote a healthy rumen, resulting in greater energy, overall health, and performance.",
    chapterHeading: "Intro",
    bulletSection: [
      {
        bulletHeading: "Sweet Bran Recommended Levels of Inclusion",
        bulletpoints: [
          "For dry rolled corn (Nebraska:    	20 – 30 % ",
          "For steamed flake corn (Texas): 	18 – 22%",
        ],
      },
    ],
  },
  {
    chapterHeading: "Chapter 1",
    title: "More energy intake",
    summary:
      "A stable rumen pH reduces the risk of acidosis and cyclical feeding. This results in greater overall intake",
  },
  {
    chapterHeading: "Chapter 2",
    title: "More energy from the entire diet",
    summary: "You see increased digestibility from the entire diet.",
    bulletSection: [
      {
        bulletpoints: [
          "By promoting a stable pH in the rumen, a more diverse microbe population can thrive, enabling the digestion and utilization of more of the entire diet.",
          "We provide a highly digestible fiber source in the form of bran, that provides a substrate for the fiber digesting bacteria.  This process increases the production of all VFA’s providing a less variable pH through the day and night.  With this less variable pH we see more smaller meals throughout the day and night which also results in overall more intake throughout the feeding period.",
        ],
      },
    ],
  },
  // INSERT CHART???
  {
    chapterHeading: "Chapter 3",
    title: "Animal Health",
    summary: "Sweet Bran reduces swings in pH and the chance of acidosis.",
    bulletSection: [
      {
        bulletpoints: [
          "This happens because we have displaced a portion of the starch in the diet with energy from a fiber source and soluble steep. This essentially leverages a more diverse fermentation pattern in the rumen – resulting in variable pH swings.",
          "This is how Sweet Bran maximizes energy intake. It is no longer a calculation on the formulation sheet, it is now about maximizing energy through increased intake and through a more complete utilization of the entire diet.",
        ],
      },
    ],
  },
  {
    chapterHeading: "Chapter 4",
    title: "Consistency",
    summary:
      "Because Sweet Bran is an intentionally designed product, the nutrients and dry matter/fiber we provide will be the most consistent element in the diet",
  },
];

export const OPERATIONAL_SECTION_CONTENT: SectionProps[] = [
  {
    chapterHeading: "Chapter 1",
    title: "Operational benefits of Sweet Bran",
    bulletSection: [
      {
        bulletHeading:
          "Because a large component of the ration is now managed for you,  there is less mixing time to hit your nutritional targets — and you will hit targets more consistently.",
        bulletpoints: [
          "Less time sourcing ingredients",
          "Store fewer ingredients",
          "Save time mixing rations",
        ],
      },
    ],
  },
  {
    chapterHeading: "Chapter 2",
    title: "Partnership/relationship benefits",
    summary:
      "Sweet Bran is delivered through an unique service experience and partnership designed to eliminate typical frustrations.",
    bulletSection: [
      {
        bulletpoints: [
          "You know it will be there\nScheduling and inventory management\nDeliveries",
          "You know what it is",
          "Advisory services",
          "Invoicing and billing",
        ],
      },
    ],
  },
];

export const SERVICE_SECTION_CONTENT: SectionProps[] = [
  {
    chapterHeading: "Intro",
    summary:
      "We represent a sole supplier to our customers as our brands are proprietary and unique. This is a very different relationship for our customers as they had to rely on us and trust us. Early on, we created a set of core brand promises to allay this concern and these promises create the foundation of the part of our brands that are the service experience. At its core, we want to remove frustrations and worry and replace this with a worry-free experience. We don’t want our customers to have to worry that they will run out of feed so we created a promise to them; You Know it Will Be There. And we set up a system designed to keep this promise. We also don’t want our customers to worry about inconsistent quality so we created a 2nd promise to them; You Know What It is. Again, we designed a system to deliver on this promise with every load.",
  },
  {
    chapterHeading: "Chapter 1",
    title: "You Know it Will Be There",
    summary:
      "We set out to remove frustrations and worry, so we don’t just make sure product is available, we take on the role of managing inventory for our customers and use our carrier partners to deliver the product directly to them. This is very different but it is was necessary to deliver the right experience. Here’s how it works.",
    bulletSection: [
      {
        bulletHeading: "Scheduling and Inventory Management",
        bulletpoints: [
          "Our goal is for the customer to never run out of feed.  As we think about our supply chain, there are multiple places where there could be a breakdown (the railroad, manufacturing plants, trucks, etc.), so we are proactive in holding inventory at customer sites, as well as bagged inventory at our plants.  Generally, our expectations are that customers never have less than 1.5 days of feed onsite, with the typical range being 1.5-3.5 days.  The amount of inventory can depend on customer usage, product type, capability to hold inventory, location from the plant, weather conditions, and gate/delivery hour constraints. Inventories will fluctuate throughout the day but we never want to get below 1.0 days of inventory by the end of feeding that day. This helps ensure that their animals will never be impacted by not having our Branded Feeds onsite.  Likewise, we set maximum levels to help ensure that customers can properly rotate inventory so they always have fresh feed.",
          "Our dedicated team of Regional Commitment Managers (RCMs) ensure that customers have the feed they need, when they need it.  Working in combination with feedback from our truck drivers via the driver app, information from customer feed software and internal projections, our team will schedule loads for our customers so they don’t have to think about it or worry about calling in their schedule. ",
          "If customers do need to visit with someone about their schedule, they can call our RCM team directly at 1-800-317-8825.  This line is answered 24/7 and customers can get in touch directly with those scheduling their loads.",
        ],
      },
      {
        bulletHeading: "Managed and Unmanaged Accounts",
        bulletpoints: [
          "Managed Customer- Our RCM team actively manages the customer inventory. We will maintain inventory levels based on usage, and proactively prepare for upcoming impacts (winter storm, outages etc) to ensure our customers don’t run out of feed.",
          "Unmanaged – Our team does not actively manage inventory at these accounts.  Typically these customers call in for their loads, and set a schedule with limited input from the RCM team. The goal is to move customers from unmanaged to managed accounts.",
        ],
      },
      {
        bulletHeading: "CORTX is our tool to manage inventories and deliveries",
        bulletpoints: [
          "We worked with Cargill Digital Labs to build a tool that integrates with existing systems to help us manage inventories, production and deliveries to our customers. It is an example of not just innovating for new feed ingredients, but innovating to continue to improve on the experience we deliver.",
          "Cortx is where the RCMs find key details for each account",
        ],
      },
      {
        bulletHeading: "Understanding the graphs:",
        bulletpoints: [
          "Load Entry – enter loads into the system. Put the desired schedule in, hit save and the loads populate. Will reach back to CMMP to get LO#s.",
          "Usage Method – 1 week, 1 month, 3 month and a custom we can set to whatever we want. This may be a smaller time frame, 5-10 days or larger 14-30 days, depending on the size of customer and load schedule to have enough data to give an accurate usage.",
          "Set Point – We adjust the set point based on usage and is a desired amount of inventory we want at the customer. Typically 1.5-3.5 days inventory depending on usage, product type, capability to hold inventory, location from the plant, weather conditions and gate/delivery hour constraints. Inventories will fluctuate throughout the day. During the time of feeding, it will be decreasing and after deliveries, it will increase.",
          "The blue dots on the graph indicate the inventory level estimated by the driver after they unload at the customer location.",
          "The red dot indicates current inventory at the customer that is calculated by Cortx based on deliveries, usage, feeding window, etc.",
        ],
      },
      {
        bulletHeading: "Deliveries",
        bulletpoints: [
          "We work with carrier partners that have a dedicated fleet of trucks and trailers to service our Branded Feed customers.  Each product is delivered in a trailer that is branded with that product name.  After our RCMs schedule customers' loads, the carriers dispatch them to the drivers with target times for those loads to be picked up.  The carriers, plants, and RCM group have access to our program that monitors daily loads and indicates which loads are onsite at a plant ready to be loaded.",
          "When our drivers arrive at the plant to pick up a load, they check in using an iPad.  This alerts the plant they are onsite and starts the process to plan what product they will be making.  The drivers then have a checklist of items to answer in regards to their trailer and prepping to get loaded.  Once on the scale, there is a QR code the drivers scan that talks to the batching system to make sure the load in the mixer matches up with the load the driver is planning to load and deliver.",
          "Once the feed is loaded, the driver will head to the customer location and will have GPS verification steps both at the customer site, and also at the unload location at the customer. This is to ensure that the feed is taken to the right customer and unloaded in the right place.",
          "Once the driver unloads this will complete the loop from scheduled to delivered and inventory estimates will be uploaded for that customer based on driver feedback.",
          "If a customer has any issues with deliveries, they can call their sales account representative, or can call 1-800-317-8825.",
          "Our drivers all use iPads as the vehicle to check in at the plant, see an overview of loads they are scheduled to deliver, have access to customer location and unload GPS, along with delivery instructions. Different colored screens will appear to alert drivers of any issues. Drivers can also enter comments about a location in the app, that will alert the carriers and our team about any potential issues.",
        ],
      },
    ],
    media: [
      require("../images/oneTrak/cortex.png"),
      require("../images/oneTrak/scheduler.png"),
      require("../images/oneTrak/Driver-app.jpg"),
      require("../images/oneTrak/driver_app.png"),
    ],
    videoLinks: [
      { link: "https://youtu.be/v5q0EuUe1GM", description: "Cortx Overview" },
    ],
  },
  {
    chapterHeading: "Chapter 2",
    title: "You Know What It Is",
    summary:
      "With every load of feed we make, there is a multi-pronged approach to ensure consistent product quality and food safety.  Prior to manufacturing any final product, quality and food safety starts with our ingredients and monitoring process. Cargill has a specialized team responsible for evaluating and auditing our suppliers and, if necessary, adjusting our ingredient supply if any issues with quality or safety are identified. At the time of manufacturing, quality and safety is maintained through our process capabilities, manufacturing parameters, and product analysis. Our computerized systems monitor our ingredient inclusions in real-time to ensure they fall within the target ranges prior to shipment. Operations processes are verified through finished feed analysis, mixer uniformity studies, medicated feed assays and process equipment calibrations and checks. Any non-conformances are promptly investigated through root-cause analysis tools and corrective actions to prevent a recurrence. All Sweet Bran, RAMP, and OneTrak shipments are sampled and tested prior to leaving for customer delivery. All shipments need to meet specifications before they ship. We utilize NIR technology, along with wet chemistry methods to verify nutrient content of ingredients in our formulations, along with nutrient content of the final product.",
  },
  {
    chapterHeading: "Chapter 3",
    title: "Advisory Services",
    summary:
      "Our team of field sales and technical sales individuals is the best out there.  Our goal is to be a partner with our customers, and oftentimes we have the opportunity to provide advice or help troubleshoot issues for them that are in no way related to our feed products.  In addition to our commercial team, we have a ton of Cargill resources behind us, from expertise in engineering, human resources, safety, and personal development, just to name a few.  Each customer we have is unique and thanks to our diverse team, we have the ability to be a resource to them in a variety of ways.",
  },
  {
    chapterHeading: "Chapter 4",
    title: "Invoicing and Billing",
    summary:
      "As with all other parts of doing business with our Branded Feed group, we have an invoicing system that is also simple and accurate.  All of our customers are invoiced weekly and their accounts are drafted weekly for those loads.  It is a simple process for our customers and our accounting team has a spectacular track record.",
    bulletSection: [
      {
        bulletpoints: [
          "Our business week is Saturday at 6:00 am until the next Saturday at 5:59 am.",
          "The invoice date is determined by what time the truck leaves the plant, not what time it arrives at the customer.",
          "We use our weights for billing purposes, not the customer weights.",
          "EFT: Invoices sent out on Monday and the funds will be drafted on Wednesday.  In the event that Monday is a bank holiday, invoices will be sent on Tuesday and funds drafted on Thursday.  In the event that Wednesday is a bank holiday, funds will be drafted on Thursday.",
        ],
      },
    ],
  },
];
