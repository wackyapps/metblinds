// importing icons
import { FaRegClock } from "react-icons/fa6";
import { TbDeviceRemote } from "react-icons/tb";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoAnalytics } from "react-icons/io5";
import { PiVolleyballLight } from "react-icons/pi";

const motorizedBlinds = {
  slug: "motorized-blinds",
  title: "Motorized Blinds",
  icon: "/icons/control-systems/motorized-blinds.svg",
  description:
    "Motorized blinds use electric motors to operate the blinds, offering convenient and effortless control.",
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
   * why choose control slider data
   */
  whyChooseControlSlider: {
    heading: "Why Choose Motorized Blinds?",
    subHeading:
      "Motorized blinds provide the ultimate convenience in window covering control. With quiet, powerful motors and multiple control options, they're perfect for hard-to-reach windows or those seeking a modern, automated solution. Our motorized systems combine reliability with ease of use.",
    features: [
      {
        iconName: "FaRegClock",
        title: "Quiet and powerful motor operation",
        image: "/images/contact-section-image-1.png",
      },
      {
        iconName: "FiSun",
        title: "Multiple control options available",
        image: "/images/banner-side-image-3.png",
      },
      {
        iconName: "FaShieldAlt",
        title: "Built-in safety features",
        image: "/images/contact-section-image-1.png",
      },
      {
        iconName: "CiWallet",
        title: "Long-lasting motor life",
        image: "/images/contact-section-image-1.png",
      },
      {
        iconName: "FaRegCircle",
        title: "Suitable for large and heavy blinds",
        image: "/images/contact-section-image-1.png",
      },
    ],
  },
  /**
   * production steps data
   */
  productionSteps: {
    heading: "Features",
    subHeading:
      "Experience the future of window coverings with our motorized blind systems. Combining cutting-edge technology with user-friendly controls, these systems offer unparalleled convenience and sophistication.",
    features: [
      {
        icon: TbDeviceRemote,
        title: "Remote Control Operation",
        description:
          "Control your blinds from anywhere with a remote or smartphone.",
      },
      {
        icon: IoShieldCheckmarkOutline,
        title: "Advanced Safety Features",
        description:
          "Built-in obstacle detection and emergency stop functionality.",
      },
      {
        icon: IoAnalytics,
        title: "Smart Integration",
        description:
          "Compatible with major smart home systems and voice assistants.",
      },
      {
        icon: FaRegClock,
        title: "Programmable Settings",
        description: "Set automatic schedules for optimal light control.",
      },
      {
        icon: PiVolleyballLight,
        title: "Quiet Operation",
        description:
          "Smooth, silent motor operation for peaceful environments.",
      },
    ],
  },
  /**
   * compatible blinds data
   */
  compatibleBlinds: {
    heading: "Compatible Blinds",
    subHeading:
      "Motorized control is compatible with multiple blind types, offering a modern and automated solution.",
    blinds: [
      {
        title: "Zebra Blinds",
        description:
          "A sleek and modern look at a budget-friendly price. Its versatile, moisture-resistant design makes it perfect for any room.",
        image: "/images/blinds/zebra-blind.png",
        buttonText: "Learn More",
      },
      {
        title: "Roller Shades",
        description:
          "A sleek and modern look at a budget-friendly price. Its versatile, moisture-resistant design makes it perfect for any room.",
        image: "/images/blinds/roller-shades-blind.png",
        buttonText: "Learn More",
      },
      {
        title: "Solar Shades",
        description:
          "A sleek and modern look at a budget-friendly price. Its versatile, moisture-resistant design makes it perfect for any room.",
        image: "/images/blinds/solar-shades-blind.png",
        buttonText: "Learn More",
      },
      {
        title: "Drapery",
        description:
          "A sleek and modern look at a budget-friendly price. Its versatile, moisture-resistant design makes it perfect for any room.",
        image: "/images/blinds/drapery-blind.png",
        buttonText: "Learn More",
      },
      {
        title: "Trifold",
        description:
          "A sleek and modern look at a budget-friendly price. Its versatile, moisture-resistant design makes it perfect for any room.",
        image: "/images/blinds/triflod-blind.png",
        buttonText: "Learn More",
      },
      {
        title: "Honeycomb Blinds",
        description:
          "A sleek and modern look at a budget-friendly price. Its versatile, moisture-resistant design makes it perfect for any room.",
        image: "/images/blinds/honey-comb-blind.png",
        buttonText: "Learn More",
      },
    ],
  },
  /**
   * how it works data
   */
  howItWorks: {
    heading: "How It Works",
    subHeading: "Operating Motorized Blinds in 3 Simple Steps",
    steps: [
      {
        icon: "FaPowerOff",
        title: "Power Up",
        description:
          "Connect the motor to power and pair with your remote control.",
        isFilled: true,
        image: "/images/white-blind.png",
      },
      {
        icon: "FaCalendarAlt",
        title: "Set Schedule",
        description: "Program automatic schedules for daily operation.",
        isFilled: false,
        image: "/images/white-blind.png",
      },
      {
        icon: "FaMicrophone",
        title: "Control Options",
        description:
          "Use remote, app, or voice commands to control your blinds.",
        isFilled: false,
        image: "/images/white-blind.png",
      },
    ],
  },
  /**
   * safety & maintenance data
   */
  safetyMaintenance: {
    heading: "Safety & Maintenance",
    subHeading:
      "Motorized blind systems combine advanced safety features with easy maintenance. Regular care ensures smooth operation and extends the life of your investment.",
    features: [
      {
        title: "Motor Protection",
        description:
          "Built-in safety features prevent motor overload and ensure smooth operation.",
        image: "/svgs/child-safe.svg",
      },
      {
        title: "Remote Maintenance",
        description:
          "Keep remote controls clean and replace batteries as needed for reliable control.",
        image: "/svgs/easy-cleaning.svg",
      },
      {
        title: "Track Inspection",
        description:
          "Regular cleaning of tracks ensures smooth blind movement.",
        image: "/svgs/durability-check.svg",
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
    background: "/banners/about-banner-img.png",
  },
};

export default motorizedBlinds;
