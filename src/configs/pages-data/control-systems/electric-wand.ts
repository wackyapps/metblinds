// importing icons
import { FaRegClock } from "react-icons/fa6";
import { TbDeviceRemote } from "react-icons/tb";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoAnalytics } from "react-icons/io5";
import { PiVolleyballLight } from "react-icons/pi";

const electricWand = {
  slug: "electric-wand",
  title: "Electric Wand",
  icon: "/icons/control-systems/electric-wand.svg",
  description:
    "Electric wand control system uses an electric motor to operate the blinds with a wand controller.",
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
    heading: "Why Choose Electric Wand Control?",
    subHeading:
      "Electric wand control systems combine the convenience of motorized operation with the simplicity of a wand interface. Perfect for hard-to-reach windows or those who prefer effortless control, our electric wand systems offer precise positioning and reliable performance.",
    features: [
      {
        iconName: "FaRegClock",
        title: "Effortless motorized operation",
        image: "/images/contact-section-image-1.png",
      },
      {
        iconName: "FiSun",
        title: "Precise positioning control",
        image: "/images/banner-side-image-3.png",
      },
      {
        iconName: "FaShieldAlt",
        title: "Safe and reliable operation",
        image: "/images/contact-section-image-1.png",
      },
      {
        iconName: "CiWallet",
        title: "Energy-efficient design",
        image: "/images/contact-section-image-1.png",
      },
      {
        iconName: "FaRegCircle",
        title: "Compatible with various blind types",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    features: [
      {
        icon: FaRegClock,
        title: "Durability & Longevity",
        description: "Built to last with premium-quality cords.",
      },
      {
        icon: TbDeviceRemote,
        title: "Smooth & Effortless Control",
        description: "Adjust blinds with precision for better lighting.",
      },
      {
        icon: IoShieldCheckmarkOutline,
        title: "Child & Pet Safety",
        description: "Comes with a secure bottom lock for protection.",
      },
      {
        icon: IoAnalytics,
        title: "Customization Options",
        description: "Available in different cord materials and sizes.",
      },
      {
        icon: PiVolleyballLight,
        title: "Aesthetic Appeal",
        description: "Minimalist design that blends with any decor.",
      },
    ],
  },
  /**
   * compatible blinds data
   */
  compatibleBlinds: {
    heading: "Compatible Blinds",
    subHeading:
      "Electric wand control is compatible with multiple blind types, offering a modern and convenient solution.",
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
    subHeading: "Operating Electric Wand Blinds in 3 Simple Steps",
    steps: [
      {
        icon: "FaBolt",
        title: "Power Connection",
        description:
          "Connect the electric wand to power source and test operation.",
        isFilled: true,
        image: "/images/white-blind.png",
      },
      {
        icon: "FaHandPointer",
        title: "Wand Control",
        description:
          "Use the electric wand to raise and lower blinds smoothly.",
        isFilled: false,
        image: "/images/white-blind.png",
      },
      {
        icon: "FaSun",
        title: "Light Control",
        description: "Adjust the wand to control light and privacy levels.",
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
      "Electric wand control systems require proper maintenance to ensure safe and reliable operation. Follow these guidelines to keep your system in optimal condition.",
    features: [
      {
        title: "Power Safety",
        description:
          "Regular inspection of power connections and wiring for safe operation.",
        image: "/svgs/child-safe.svg",
      },
      {
        title: "Motor Care",
        description:
          "Keep the motor clean and free from debris for smooth operation.",
        image: "/svgs/easy-cleaning.svg",
      },
      {
        title: "Wand Maintenance",
        description:
          "Check wand connections and movement for proper functionality.",
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

export default electricWand;
