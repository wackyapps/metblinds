import cordedBlinds from "./control-systems/corded-blinds";
import cordlessBlinds from "./control-systems/cordless-blinds";
import electricWand from "./control-systems/electric-wand";
import manualWand from "./control-systems/manual-wand";
import motorizedBlinds from "./control-systems/motorized-blinds";
import smartControl from "./control-systems/smart-control";

export const controlSystemPage = {
  metaData: {
    title: "Control Systems - Met Blinds",
    description:
      "Explore the range of control systems available for your blinds, from classic corded options to smart home integrations. Choose the best fit for convenience, safety, and style.",
  },
  /**
   * control system banner
   */
  controlSystemBanner: {
    heading: "Introducing Smart Control Systems",
    subHeading:
      "Discover the perfect control system for your blinds, from classic corded options to smart home integrations. Choose the best fit for convenience, safety, and style.",
    buttonText: "Request free Quote",
    coverImage: "/banners/about-banner-img-2.png",
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
  },
  /**
   * quote cta section
   */
  quoteCTASection: {
    heading: "Need Help Choosing the Right Control System?",
    subHeading:
      "Contact us for expert recommendations and customized solutions",
    buttonText: "Request free Quote",
    background: "/banners/about-banner-img.png",
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
