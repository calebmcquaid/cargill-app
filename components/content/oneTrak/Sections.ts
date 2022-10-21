import { SectionProps } from "../types";

export const OVERVIEW_SECTION_CONTENT: SectionProps[] = [
  {
    chapterHeading: "Chapter 1",
    title: "What is OneTrak?",
    summary:
      "OneTrak is a high-energy product for dairies that complements on-farm ingredients and eliminates the need for most other sourced ingredients. OneTrak improves rumen health and results in greater energy intake and utilization of the entire diet.",
  },
  {
    chapterHeading: "Chapter 2",
    title: "How does it work?",
    summary:
      "OneTrak provides flexibility to replace a portion of the starch, forage fiber and protein in the diet with highly digestible corn bran, nutrient-dense steep and a combination of rumen degradable and rumen bypass protein.",
    bulletSection: [
      {
        bulletpoints: [
          "This promotes an optimal and diverse microbial population in the rumen, promoting a stable pH and the balanced production and absorption of VFAs.",
          "This reduces the chance of acidosis",
        ],
      },
    ],
  },
  {
    chapterHeading: "Chapter 3",
    title: "What are key ingredients and how is it made?",
    summary:
      "Like our other brands, OneTrak is not a by-product but a product designed for the needs of a specific animal – lactating dairy cows.",
    bulletSection: [
      {
        bulletHeading:
          "OneTrak is formulated to provide a unique combination of protein, fiber and energy to the dairy cow.  These ingredients include:",
        bulletpoints: [
          "Corn Bran – The outer portion of the corn kernel that is detached during the milling process. The bran portion of our product is a highly digestible fiber source that provides an optimal rumen fermentation profile that enables a more complete utilization of the entire diet.",
          "Steep – An energy-dense liquid feed that is rich in soluble protein and simple sugars. Steep is highly fermentable, allowing for production of energy-dense volatile fatty acid production by rumen microbes. The soluble protein in steep is a valuable nitrogen source, aiding in microbial growth and fermentation.",
          "Solvent Extracted Meal (SEM)/Corn Germ Meal – This is the fiber portion of the germ that is left over after the oil is extracted. It is also a good source of protein that aids in rumen fermentation and animal performance.",
          "Bypass Protein – Bypass protein or Ruminal Undegraded Protein (RUP) is protein that escapes rumen fermentation, allowing for utilization by the animal. For high-producing dairy cows, oftentimes ruminal microbial protein production is not enough to keep up with their protein and amino acid needs. Thus, providing protein that the animal can digest directly in the small intestine helps meet those needs. Heating causes the Maillard reaction, making proteins less soluble and more resistant to digestion by the rumen microbes. However, the proteins can be digested in the small intestine enzymatically for direct use by the animal.",
        ],
      },
    ],
  },
  {
    chapterHeading: "Chapter 4",
    title: "What are the key benefits for the animal?",
    summary:
      "By improving the health of the rumen, OneTrak gets more energy into the cow — resulting in more energy out of the cow in the form of better milk production.",
    bulletSection: [
      {
        bulletpoints: [
          "A more stable rumen pH promotes greater intake.  The more stable rumen environment leads to a more diverse microbial population in the rumen for increased digestion and utilization of the entire diet.",
        ],
      },
    ],
  },
  {
    chapterHeading: "Chapter 5",
    title: "What are its benefits to the operation?",
    summary:
      "With OneTrak, you can expect an increase in energy-corrected milk production and improved income over feed cost.",
    bulletSection: [
      {
        bulletpoints: [
          "Three to five pounds of energy-corrected milk per head, per day ",
          "25-cent to 75-cent increase in IOFC per head, per day",
          "Time and cost savings for greater efficiency across your operation",
        ],
      },
    ],
  },
];

export const RUMEN_SECTION_CONTENT: SectionProps[] = [
  {
    summary:
      "OneTrak is designed specifically to improve the health of the rumen, leading to more energy going into the cow and better utilization of the entire diet.The reality: a OneTrak diet is a higher-energy diet, because not only is intake increased, but so is utilization of the entire ration.Cows have an energy requirement, not a starch requirement.When you are feeding OneTrak, rumen pH stays more consistent — resulting in more consumption, an increased utilization of the entire diet and higher production.This challenges one of the paradigms in dairy nutrition that starch is the key nutrient needed to provide enough energy to support high lactation.Bottom line: stabilizing pH for a healthy rumen improves digestibility of the entire diet, leading to greater energy and performance.",
    chapterHeading: "Intro",
  },
  {
    chapterHeading: "Chapter 1",
    title: "Importance of a healthy rumen",
    summary:
      "A pH-stable, healthy rumen drives better health and milk production.",
    bulletSection: [
      {
        bulletpoints: [
          "Dairy animals get most of their energy from the rumen, in the form of VFAs.",
          "A healthy rumen stays stable in a pH range of 6.2 to 6.8.",
          "High-starch diets can produce VFAs faster than they can be absorbed, leading to a drop in pH level. Once pH falls below 6.2, fiber digestion slows. Once it drops below 5.5, the animal is experiencing acidosis.",
        ],
      },
    ],
    videoLinks: [
      {
        link: "https://youtu.be/73Tx7MjAotw",
        description: "Rumen Health and Performance",
      },
    ],
  },
  {
    chapterHeading: "Chapter 2",
    title: "VFAs & Digestion",
    summary:
      "The three most prevalent volatile fatty acids in the rumen are propionate, acetate and butyrate, which are each promoted by different feedstuffs. It’s a balancing act to make sure you have the proper ratio of volatile fatty acids which will continue to proliferate a balanced microbial population in the rumen that can efficiently digest the ingredients you’re feeding to the animal.You want to keep the VFA production in balance with absorption so the pH stabilizes at a level where the animal does not become acidotic.If a ration is high in starch, you’re going to drive production of VFAs at a rate greater than absorption, which will reduce rumen pH. This reduction in pH will shift the microbial population, reducing fiber digestibility. This means the animal is not fully utilizing the available energy in the diet.",
    media: [
      require("../images/oneTrak/Rumen1.jpg"),
      require("../images/oneTrak/Rumen2.jpg"),
    ],
    videoLinks: [
      {
        link: "https://youtu.be/7GwYko1Sb1Q",
        description: "Rumen Health and pH",
      },
      {
        link: "https://youtu.be/46A-BeIeALU",
        description: "OneTrak - Types of VFAs",
      },
    ],
  },
  {
    chapterHeading: "Chapter 3",
    title: "Acidosis impact",
    summary:
      "As acid load increases, the pH drops and causes subacute acidosis — resulting in the cow eating less and less often.",
    bulletSection: [
      {
        bulletpoints: [
          "Once the pH sustains a level of 5.4, the animal is in full acidosis and can stop eating altogether, until pH rises again — resulting in cyclical, inconsistent feeding.",
          "Side effects over time will be reduced dry matter intake, decreased milk production and potentially milk fat depression.",
        ],
      },
    ],
    media: [require("../images/oneTrak/Acidosis6.jpg")],
    videoLinks: [
      {
        link: "https://youtu.be/lzskvfnT2F4",
        description: "OneTrak - Acidosis",
      },
    ],
  },
  {
    chapterHeading: "Chapter 4",
    title: "How OneTrak promotes a healthy rumen",
    summary:
      "A portion of the starch is replaced with high-energy, digestible fiber, steep and protein. This keeps VFA production balanced, and at a rate that they can be easily absorbed, leading to a stable pH and a healthy animal.",
    bulletSection: [
      {
        bulletpoints: [
          "A more stable pH in the rumen promotes greater intake from your herd.",
          "The healthy rumen environment has a more diverse population of microbes, improving digestibility of the entire diet, resulting in more overall energy utilization.",
        ],
      },
    ],
    videoLinks: [
      {
        link: "https://youtu.be/Gg0LQP7Y0Hw",
        description: "OneTrak - Healthy Rumen",
      },
    ],
  },
];

export const PERFORMANCE_SECTION_CONTENT: SectionProps[] = [
  {
    summary:
      "OneTrak works counter to conventional wisdom. OneTrak lets dairy producers use Sweet Bran at higher levels than industry standards — replacing some of the starch, protein and forages that would normally be in the diet.",
    chapterHeading: "Intro",
    bulletSection: [
      {
        bulletpoints: [
          "OneTrak gets more energy into the animal, challenging the idea that starch has to be the key to providing adequate energy to support high production.",
        ],
      },
    ],
  },
  {
    chapterHeading: "Chapter 1",
    title: "More energy intake",
    summary:
      "Through improved palatability and promoting better rumen health, cows consume more energy throughout the day.",
  },
  {
    chapterHeading: "Chapter 2",
    title: "More energy from the entire diet",
    bulletSection: [
      {
        bulletpoints: [
          "By promoting a stable pH in the rumen, a more diverse microbe population can thrive, enabling the digestion and utilization of more feedstuffs and a steadier, healthier production of VFAs.",
          "OneTrak promotes a healthy mix of acetate and propionate, which are needed to support high production and milk fat. It also increases butyrate, which improves rumen epithelium health, leading to increased VFA absorption.",
        ],
      },
    ],
  },
  {
    chapterHeading: "Chapter 3",
    title: "Better Production",
    bulletSection: [
      {
        bulletpoints: [
          "A series of university research studies shows an average improvement in energy corrected milk (ECM) of 8.5 lbs when OneTrak ingredients are fed within a target range. (Boddugari et al., 2001, Brouk et al., 2006, and Mullins  et al., 2010).",
          "Field results consistently show a 3-5 lb improvement in ECM",
        ],
      },
    ],
    videoLinks: [
      {
        link: "https://youtu.be/AKPPNfXGfIY",
        description: "OneTrak - Energy and Intake Utilization",
      },
    ],
  },
];

// WAITING ON CONTENT UPDATE FOR THIS SECTION FROM RED THREADS TEAM (JENNY)
export const CONSISTENCY_SECTION_CONTENT: SectionProps[] = [
  {
    chapterHeading: "Intro",
    summary:
      "Consistency in your ration is one of the hardest goals to achieve on your own. With OneTrak, what gets formulated, what gets mixed, what gets fed and what gets consumed is consistent every time — for consistent health of your herd and better performance for your dairy.",
    bulletSection: [
      {
        bulletpoints: [
          "The ration can be formulated to perfection on paper, but when mixed and fed you can get variations in ingredient quality, mixing errors and sorting at the bunk.",
        ],
      },
    ],
  },
  {
    chapterHeading: "Chapter 1",
    title: "Consistent Quality",
    bulletSection: [
      {
        bulletHeading:
          "In-house and third-party testing assures that the product our customers receive is the same every load.",
        bulletpoints: [
          "Customers can be confident that 40% of their ration is the same every day.",
          "Because this is an intentionally manufactured product, OneTrak will be the most consistent thing in the diet.",
        ],
      },
    ],
  },
  {
    chapterHeading: "Chapter 2",
    title: "Consistent Supply",
    bulletSection: [
      {
        bulletHeading:
          "Our logistics team ensures that our customers have a consistent supply of feed and never run out of product.",
        bulletpoints: [
          "We continually track on-farm inventory and usage using real-time feedback from feed software and truck drivers.",
        ],
      },
    ],
  },
  {
    chapterHeading: "Chapter 3",
    title: "Batching and Mixing",
    bulletSection: [
      {
        bulletHeading:
          "The simplicity of the OneTrak program makes it easier to make a consistent batch of the mixed ration. There is less nutrient deviation, and this can be tracked in the OneTrak Dashboard.",
      },
    ],
  },
  {
    chapterHeading: "Chapter 4",
    title: "Binding Characteristics",
    bulletSection: [
      {
        bulletHeading:
          "Once the ration is delivered to the bunk, it is difficult for the cows to sort, so they are getting the same nutrition in every bite.",
        bulletpoints: [
          "Because of handling characteristics and moisture content, OneTrak binds together with other ingredients, reducing the chance of sorting.",
        ],
      },
    ],
    videoLinks: [
      {
        link: "https://youtu.be/MGLKYT1emgs",
        description: "OneTrak - Consistency",
      },
    ],
  },
];

export const OPERATIONAL_SECTION_CONTENT: SectionProps[] = [
  {
    chapterHeading: "Chapter 1",
    title: "Profitability",
    bulletSection: [
      {
        bulletHeading:
          "Depending on your baseline (the type of ration you are feeding now), you will encounter one of two scenarios: \n\nProduction stays the same, or even increases, but your costs go down\n\nProduction greatly increases, and your costs stay affordable",
        bulletpoints: [
          "25-cent to 75-cent increase in IOFC per head, per day",
          "Additional cost savings associated with time savings and shrink reduction of a consistent, simplified ration",
          "All of this can be tracked and measured in the OneTrak Dashboard",
        ],
      },
    ],
  },
  {
    chapterHeading: "Chapter 2",
    title: "Better Production",
    summary:
      "Three to five pounds of energy-corrected milk per head, per day, is fairly typical.",
  },
  {
    chapterHeading: "Chapter 3",
    title: "Operational Efficiency",
    summary:
      "OneTrak eliminates 5 to 10 ingredients from your ration, so a large component of diet is managed for you, yielding a number of operational benefits:",
    bulletSection: [
      {
        bulletpoints: [
          "Reduces batch time by 2 – 10 minutes/batch depending on baseline diet.",
          "Time savings on equipment and people translates to about $0.09/hd/d.",
          "Less sourcing and fewer vendors to deal with",
          "Fewer bays needed to hold ingredients",
          "Reduced shrink because of the handling characteristics of OneTrak and ability to remove high shrink ingredients from diet is worth about $0.12/hd/d.",
        ],
      },
    ],
  },
];
export const SERVICE_SECTION_CONTENT: SectionProps[] = [
  {
    chapterHeading: "Intro",
    summary:
      "We represent a sole supplier to our customers as our brands are proprietary and unique. This is a very different relationship for our customers as they had to rely on us and trust us. Early on, we created a set of core brand promises to allay this concern and these promises create the foundation of the part of our brands that are the service experience. At its core, we want to remove frustrations and worry and replace this with a worry-free experience. We don’t want our customers to have to worry that they will run out of feed so we created a promise to them; You Know it Will Be There. And we set up a system designed to keep this promise. We also don’t want our customers to worry about inconsistent quality so we created a 2nd promise to them; You Know What It is. Again, we designed a system to deliver on this promise with every load. ",
  },
  {
    chapterHeading: "Chapter 1",
    title: "You Know it Will Be There",
    summary:
      "We set out to remove frustrations and worry, so we don’t just make sure product is available, we take on the role of managing inventory for our customers and use our carrier partners to deliver the product directly to them. This is very different but was necessary to deliver the right experience. Here’s how it works.",
    bulletSection: [
      {
        bulletHeading: "Scheduling and Inventory Management",
        bulletpoints: [
          "Our goal is for the customer to never run out of feed.  As we think about our supply chain, there are multiple places where there could be a breakdown (the railroad, manufacturing plants, trucks, etc.), so we are proactive in holding inventory at customer sites, as well as at bagged inventory at our plants.  Generally, our expectations are that customers never have less than 1.5 days of feed onsite, with the typical range being 1.5-3.5 days.  The amount of inventory can depend on customer usage, product type, capability to hold inventory, location from the plant, weather conditions, and gate/delivery hour constraints. Inventories will fluctuate throughout the day but we never want to get below 1.0 days of inventory by the end of feeding that day. This helps ensure that their animals will never be impacted by not having our Branded Feeds onsite.  Likewise, we set maximum levels to help ensure that customers can properly rotate inventory so they always have fresh feed.",
          "Our dedicated team of Regional Commitment Managers (RCMs) ensure that customers have the feed they need, when they need it.  Working in combination with feedback from our truck drivers via the driver app, information from customer feed software and internal projections, our team will schedule loads for our customers so they don’t have to think about it or worry about calling in their schedule.",
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
