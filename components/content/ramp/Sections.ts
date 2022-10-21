import { SectionProps } from "../types";

export const OVERVIEW_SECTION_CONTENT: SectionProps[] = [
  {
    chapterHeading: "Chapter 1",
    title: "What is RAMP?",
    summary:
      "RAMP is a complete starter ration that is designed to get cattle started on feed quickly. It creates a healthy rumen and stimulates more frequent feeding.",
  },
  {
    chapterHeading: "Chapter 2",
    title: "How does it work?",
    summary:
      "RAMP does not use starch, and instead consists of highly digestible and palatable corn bran, roughage, and nutrient-dense steep.",
    bulletSection: [
      {
        bulletpoints: [
          "This helps cattle get on feed faster.",
          "This promotes a stable rumen pH and an optimal microbial population in the rumen to fully utilize the whole diet.",
          "This reduces the chance of acidosis and changes their feeding pattern that results in more, smaller meals through a 24-hour period.",
        ],
      },
    ],
  },
  {
    chapterHeading: "Chapter 3",
    title: "What are key ingredients and how is it made?",
    summary:
      "RAMP is not a by-product but a complete ration designed for the specific needs of starter cattle.",
    bulletSection: [
      {
        bulletpoints: [
          "Corn Bran – The outer portion of the corn kernel that is detached during the milling process. The bran portion of our product is a highly digestible fiber source that provides an optimal rumen fermentation profile that enables a more complete utilization of the entire diet.",
          "Steep – An energy-dense liquid feed that is rich in soluble protein and simple sugars. Steep is highly fermentable, allowing for production of energy-dense volatile fatty acid production by rumen microbes. The soluble protein in steep is a valuable nitrogen source, aiding in microbial growth and fermentation.",
          "Solvent Extracted Meal (SEM)/Corn Germ Meal – This is the fiber portion of the germ that is left over after the oil is extracted. It is also a good source of protein that aids in rumen fermentation and animal performance.",
          "Added Roughage – Roughage is a key component to stimulating proper rumen fermentation and balancing VFA production. Roughage helps to provide actual physical stimulation of the rumen (scratch factor) and aids in rumen health that helps adapt the rumen to the finishing diet.",
        ],
      },
    ],
    media: [],
  },
  {
    chapterHeading: "Chapter 4",
    title: "What are the key benefits for the animal?",
    summary:
      "RAMP promotes a healthy, stable rumen, which results in getting more energy into the animal – setting it up for a healthy and successful transition to the finishing phase.",
    bulletSection: [
      {
        bulletpoints: [
          "Cattle will increase intake throughout a 24-hour period",
          "A more stable rumen pH allows for greater digestion and utilization of the entire diet.",
          "The rumen microbiome is optimized for better adaptation to the finishing diet",
        ],
      },
    ],
    media: [require("../images/ramp/Ramp-Graphic1.jpg")],
  },
];

export const RUMEN_SECTION_CONTENT: SectionProps[] = [
  {
    summary:
      "RAMP was designed to create a healthy rumen environment that will lead to better intake and health – setting them up for a successful transition to the finishing phase.",
    chapterHeading: "Intro",
  },
  {
    chapterHeading: "Chapter 1",
    title: "Importance of a healthy rumen",

    bulletSection: [
      {
        bulletHeading:
          "A pH-stable, healthy rumen drives better health and performance",
        bulletpoints: [
          "Cattle get most of their energy from the rumen, in the form of VFAs",
          "A healthy rumen stays stable in a pH range of 5.6 to 6.0 and above.",
          "High-starch diets can produce VFAs faster than they can be absorbed, leading to a drop in pH level – and potentially an acidotic state.",
        ],
      },
      {
        bulletHeading: "VFAs and Digestion",
        bulletpoints: [
          "The three most prevalent volatile fatty acids in the rumen are acetate, propionate, and butyrate, which are each promoted by different feedstuffs. It’s a balancing act to make sure you have the proper ratio of volatile fatty acids from the  digested ingredients that you feed  the animal. ",
        ],
      },
      {
        bulletHeading:
          "You want to keep the VFAs in balance with each other so the pH stabilizes at a level that promotes absorption/utilization and the animal doesn’t go into acidosis",
        bulletpoints: [
          "If a ration is high in starch, you’re going to drive production of propionate and also some lactate, which can drop rumen pH.  This also means that some microbes are not present to consume other parts of the ration, so the animal is not fully utilizing all the available energy in the diet.",
        ],
      },
    ],
    media: [
      require("../images/ramp/Ramp-Graphic2.jpg"),
      require("../images/ramp/Ramp-Graphic3.jpg"),
    ],
    videoLinks: [
      {
        link: "https://youtu.be/RwG1Nn04lTo",
        description: "Sweet Bran RAMP Digestion",
      },
    ],
  },
  {
    chapterHeading: "Chapter 2",
    title: "Optimizing Adaptation of the Rumen",
    summary:
      "RAMP digestion yields greater overall VFA production (Acetate, Propionate, and Butyrate) compared to a traditional starter high roughage diet.  During the first days to weeks on RAMP the cattle’s rumen is adapted to a high energy output (VFA output).  So as they start to transition onto the finisher that has more starch (that produces high energy low pH VFAs), they have the rumen microbiome to balance this with all VFA production.",
    bulletSection: [
      {
        bulletHeading:
          "RAMP is actually altering the rumen microbiome to handle a future starch profile while also fully utilizing other substrates present in the diet.",
        bulletpoints: [
          "Once the pH sustains a level of 5.4, the animal is in an acidotic state and can stop eating altogether, until pH rises again – resulting in cyclical, inconsistent feeding",
          "Side effects over time will be reduced dry matter intake and decreased gain and performance",
        ],
      },
    ],
  },
  {
    chapterHeading: "Chapter 3",
    title: "How RAMP Promotes a Healthy Rumen",
    summary:
      "Starch is replaced with high-energy, digestible fiber and steep.   This keeps VFA production and absorption in balance and rumen pH stable with the animal feeling well.",
    bulletSection: [
      {
        bulletpoints: [
          "Cattle eat more often over a 24-hour period",
          "The healthy rumen environment has a more diverse population of microbes, improving digestibility of all the foodstuffs in the diet, resulting in more overall energy utilization of the entire ration",
        ],
      },
      {
        bulletHeading:
          "Cattle have an energy requirement, not a starch requirement. \n\nWhen you are feeding RAMP, rumen pH stays more consistent — resulting in a new pattern of cattle eating more, smaller meals over a 24-hour period.",
        bulletpoints: [
          "This challenges one of the paradigms that say you have to feed a lot of starch to provide enough energy",
        ],
      },
    ],
  },
];

export const PERFORMANCE_SECTION_CONTENT: SectionProps[] = [
  {
    summary:
      "RAMP gets starter cattle right to the bunk and promotes a healthy rumen for greater energy and overall health.",
    chapterHeading: "Intro",
    bulletSection: [
      {
        bulletpoints: [
          "With a healthy rumen, cattle feel better and eat more often throughout the day",
          "The rumen environment promotes greater digestibility and utilization of the entire diet for energy production. We are essentially programming the rumen to better adapt to the finishing diet but creating a better microbial population that will more readily shift to a higher starch ratio environment.",
        ],
      },
    ],
  },
  {
    chapterHeading: "Chapter 1",
    title: "More energy intake",
    summary:
      "Through improved palatability and promoting better rumen health, starter cattle will eat more throughout the day and night",
    bulletSection: [
      {
        bulletpoints: [
          "A stable pH in the rumen results in greater intake over a 24-hour period",
          "You get a dry matter intake response at an equal or greater energy density",
        ],
      },
    ],
  },
  {
    chapterHeading: "Chapter 2",
    title: "More energy from the entire diet",
    summary: "You see increased digestibility from the entire diet.",
    bulletSection: [
      {
        bulletpoints: [
          "By promoting a stable pH in the rumen, a more diverse microbe population can thrive, enabling the digestion and utilization of more foodstuffs and a steadier, healthier production of VFAs.",
        ],
      },
    ],
  },
  {
    chapterHeading: "Chapter 3",
    title: "Leveraging Diverse Energy",
    summary:
      "RAMP doesn’t rely on starch as the energy source and gives the animal and a more diverse energy profile that promotes greater intake and utilization of the diet throughout the day.",
    bulletSection: [
      {
        bulletpoints: [
          "This not only helps promote intake during the starter phase but also reduces the risk associated with the adaptation phase. ",
        ],
      },
    ],
    media: [
      require("../images/ramp/Ramp-Graphic4.jpg"),
      require("../images/ramp/Ramp-Graphic5.jpg"),
      require("../images/ramp/Ramp-Graphic6.jpg"),
      require("../images/ramp/Ramp-Graphic7.jpg"),
    ],
  },
  {
    chapterHeading: "Chapter 4",
    title: "Consistency",
    summary: "RAMP is a complete ration, so consistency of the diet is assured",
    bulletSection: [
      {
        bulletpoints: [
          "We are removing variation and adding stability, leading to more predictable results.",
        ],
      },
    ],
    media: [require("../images/ramp/Ramp-Graphic8.jpg")],
  },
];

export const OPERATIONAL_SECTION_CONTENT: SectionProps[] = [
  {
    chapterHeading: "Chapter 1",
    title: "Operational benefits of RAMP",
    bulletSection: [
      {
        bulletHeading:
          "As  a complete feed, RAMP takes the pressure off your feed mill.",
        bulletpoints: [
          "Less downtime, less chance of disruption",
          "Time and resource savings",
        ],
      },
    ],
    media: [require("../images/ramp/TimeAndResource.jpg")],
  },
  {
    chapterHeading: "Chapter 2",
    title: "Partnership/relationship benefits",
    summary:
      "RAMP is delivered through an unique service experience and partnership designed to eliminate typical frustrations.",
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
      "We represent a sole supplier to our customers as our brands are proprietary and unique. This is a very different relationship for our customers as they had to rely on us and trust us. Early on, we created a set of core brand promises to allay this concern and these promises create the foundation of the part of our brands that are the service experience. At its core, we want to remove frustrations and worry and replace this with a worry-free experience.\n\n We don’t want our customers to have to worry that they will run out of feed so we created a promise to them; You Know it Will Be There. And we set up a system designed to keep this promise. We also don’t want our customers to worry about inconsistent quality so we created a 2nd promise to them; You Know What It is. Again, we designed a system to deliver on this promise with every load.",
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
