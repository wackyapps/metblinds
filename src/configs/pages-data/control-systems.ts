import cordedBlinds from "./control-systems/corded-blinds";
import cordlessBlinds from "./control-systems/cordless-blinds";
import electricWand from "./control-systems/electric-wand";
import manualWand from "./control-systems/manual-wand";
import motorizedBlinds from "./control-systems/motorized-blinds";
import smartControl from "./control-systems/smart-control";

export const controlSystemPage = {
  /**
   * control system banner
   */
  controlSystemBanner: {
    heading: "Introducing Smart Control Systems",
    subHeading:
      "Discover the perfect control system for your blinds, from classic corded options to smart home integrations. Choose the best fit for convenience, safety, and style.",
    buttonText: "Request free Quote",
    coverImage: "/banners/about-banner-img.png",
  },
  /**
   * control system table
   */
  controlSystemTable: {
    heading: "Find the Right Control System for Your Blinds",
    subHeading:
      "Use the table below to check which control options are available for your preferred blinds. Click to expand and view details.",
    controlOptions: [
      "Corded",
      "Cordless",
      "Manual Wand",
      "Electric Wand",
      "Motorized Control",
      "Smart Control",
    ],
    blindsDetails: [
      {
        blindType: "Zebra Blinds",
        controls: {
          Corded: true,
          Cordless: true,
          "Manual Wand": false,
          "Electric Wand": true,
          "Motorized Control": true,
          "Smart Control": true,
        },
      },
      {
        blindType: "Roller Blinds",
        controls: {
          Corded: true,
          Cordless: true,
          "Manual Wand": false,
          "Electric Wand": true,
          "Motorized Control": true,
          "Smart Control": true,
        },
      },
      {
        blindType: "Double Roller Blinds",
        controls: {
          Corded: false,
          Cordless: true,
          "Manual Wand": false,
          "Electric Wand": true,
          "Motorized Control": true,
          "Smart Control": true,
        },
      },
      {
        blindType: "Sunscreen Blinds",
        controls: {
          Corded: true,
          Cordless: true,
          "Manual Wand": false,
          "Electric Wand": true,
          "Motorized Control": true,
          "Smart Control": true,
        },
      },
      {
        blindType: "Trifold Blinds",
        controls: {
          Corded: true,
          Cordless: false,
          "Manual Wand": false,
          "Electric Wand": true,
          "Motorized Control": true,
          "Smart Control": true,
        },
      },
      {
        blindType: "Honeycomb Blinds",
        controls: {
          Corded: false,
          Cordless: true,
          "Manual Wand": false,
          "Electric Wand": false,
          "Motorized Control": true,
          "Smart Control": true,
        },
      },
      {
        blindType: "Honeycomb DNN Blinds",
        controls: {
          Corded: false,
          Cordless: true,
          "Manual Wand": false,
          "Electric Wand": false,
          "Motorized Control": true,
          "Smart Control": true,
        },
      },
      {
        blindType: "Roman Shades",
        controls: {
          Corded: false,
          Cordless: true,
          "Manual Wand": false,
          "Electric Wand": false,
          "Motorized Control": true,
          "Smart Control": true,
        },
      },
      {
        blindType: "Luxury Roman Shades",
        controls: {
          Corded: false,
          Cordless: true,
          "Manual Wand": false,
          "Electric Wand": false,
          "Motorized Control": true,
          "Smart Control": true,
        },
      },
      {
        blindType: "Dream Curtains",
        controls: {
          Corded: true,
          Cordless: false,
          "Manual Wand": true,
          "Electric Wand": false,
          "Motorized Control": true,
          "Smart Control": true,
        },
      },
      {
        blindType: "Drapery",
        controls: {
          Corded: false,
          Cordless: false,
          "Manual Wand": true,
          "Electric Wand": false,
          "Motorized Control": true,
          "Smart Control": true,
        },
      },
      {
        blindType: "Skylights",
        controls: {
          Corded: false,
          Cordless: true,
          "Manual Wand": true,
          "Electric Wand": false,
          "Motorized Control": true,
          "Smart Control": true,
        },
      },
    ],
  },
  /**
   * control system details
   */
  controlSystemDetails: {
    heading: "Explore Control Options for Your Blinds",
    subHeading:
      "Discover a range of control systems designed for convenience, safety, and style. Select the perfect option for your home.",
    controlSystemOptions: [
      {
        name: "Corded binds",
        description:
          "Corded blinds offer a traditional yet practical solution for window coverings. Choose from durable materials like PVC, fabric, or stainless steel cords, all encased in a MET Sleeve for longevity. Our corded blinds come with a child-lock safety mechanism to ensure a secure environment for kids and pets.",
      },
      {
        name: "Cordless Blinds",
        description:
          "Eliminate the hassle of dangling cords with our advanced gravity control cordless system. Designed for smooth, precise operation, these blinds adjust effortlessly with a gentle push or pull. With almost no failure rate and no need for spring readjustments, cordless blinds provide a streamlined, hassle-free experience.",
      },
      {
        name: "Manual Wand",
        description:
          "“Simple, functional, and easy to use for everyday convenience.”For those who prefer a hands-on approach, our manual wand system provides seamless, direct control over your blinds. Available in various sizes, these wands offer effortless adjustments. Special extendable wands with hooks are available for skylight blinds, ensuring easy operation even for high windows.",
      },
      {
        name: "Electric Wand",
        description:
          "“A budget-friendly step towards automation.” Upgrade to an electric wand for an affordable yet sophisticated touch. Available in different colors and sizes, these wands add motorized convenience at a fraction of the cost of full automation. Perfect for those looking for ease of use without a major investment in smart home technology.",
      },
      {
        name: "Motorized Control",
        description:
          "“Experience next-level convenience with remote and wall switch controls.” Our motorized blinds come equipped with high-quality motors backed by a 5-year warranty, ensuring reliability and smooth operation. Control them via remote or a wall switch, making them ideal for large windows, offices, or modern homes.",
      },
      {
        name: "Smart Control",
        description:
          "“Complete control at your fingertips—anytime, anywhere.” Take automation to the next level with our smart control system. Use our intuitive mobile app to adjust your blinds remotely, set schedules, and sync with sunrise or sunset timings. Seamlessly integrate with your smart home ecosystem, including Alexa, Google Home, and other IoT devices, allowing voice-activated control for the ultimate hands-free experience.",
      },
    ],
  },
  /**
   * quote cta section
   */
  quoteCTASection: {
    heading: "Need Help Choosing the Right Control System?",
    subHeading:
      "Contact us for expert recommendations and customized solutions",
    buttonText: "Request free Quote",
  },
};

const controlSystemPages = [
  cordedBlinds,
  cordlessBlinds,
  electricWand,
  manualWand,
  smartControl,
  motorizedBlinds,
];

export default controlSystemPages;
