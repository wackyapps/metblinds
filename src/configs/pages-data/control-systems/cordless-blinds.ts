// importing icons
import { FaRegClock } from "react-icons/fa6";
import { TbDeviceRemote } from "react-icons/tb";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoAnalytics } from "react-icons/io5";
import { PiVolleyballLight } from "react-icons/pi";

const cordlessBlinds = {
  slug: "cordless-blinds",
  title: "Cordless Blinds",
  icon: "/icons/control-systems/cordless-blinds.svg",
  description:
    "Cordless blinds are a type of blind that uses a cordless mechanism to operate the blind.",
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
    heading: "Why Choose Cordless Blinds?",
    subHeading:
      "Cordless blinds offer a modern, clean look with enhanced safety features. Perfect for homes with children and pets, they eliminate cord hazards while providing smooth, effortless operation. Our cordless blinds combine style with functionality, making them an ideal choice for contemporary homes.",
    features: [
      {
        iconName: "FaShieldAlt",
        title: "Child and pet-safe design with no exposed cords",
        image: "/images/contact-section-image-1.png",
      },
      {
        iconName: "FiSun",
        title: "Smooth and precise light control",
        image: "/images/banner-side-image-3.png",
      },
      {
        iconName: "FaRegClock",
        title: "Durable spring-loaded mechanism",
        image: "/images/contact-section-image-1.png",
      },
      {
        iconName: "CiWallet",
        title: "Cost-effective and low maintenance",
        image: "/images/contact-section-image-1.png",
      },
      {
        iconName: "FaRegCircle",
        title: "Available in various styles and materials",
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
      "Experience the perfect blend of safety and convenience with our cordless blind systems. Designed for modern homes, these systems offer a clean look while ensuring the safety of children and pets.",
    features: [
      {
        icon: TbDeviceRemote,
        title: "Cord-Free Operation",
        description: "Clean, modern look with no exposed cords.",
      },
      {
        icon: IoShieldCheckmarkOutline,
        title: "Child & Pet Safety",
        description: "Eliminates cord hazards for peace of mind.",
      },
      {
        icon: IoAnalytics,
        title: "Smooth Control",
        description: "Spring-loaded mechanism for effortless operation.",
      },
      {
        icon: FaRegClock,
        title: "Durable Design",
        description: "Built to last with quality materials.",
      },
      {
        icon: PiVolleyballLight,
        title: "Style Options",
        description: "Available in various materials and finishes.",
      },
    ],
  },
  /**
   * compatible blinds data
   */
  compatibleBlinds: {
    heading: "Compatible Blinds",
    subHeading:
      "Cordless control is compatible with multiple blind types, offering a modern and safe solution.",
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
    subHeading: "Operating Cordless Blinds in 3 Simple Steps",
    steps: [
      {
        icon: "FaHandPointer",
        title: "Grip and Pull",
        description: "Grip the bottom rail and pull down to lower the blinds.",
        isFilled: true,
        image: "/images/white-blind.png",
      },
      {
        icon: "FaLock",
        title: "Secure Position",
        description: "Release to lock the blinds in your desired position.",
        isFilled: false,
        image: "/images/white-blind.png",
      },
      {
        icon: "FaSun",
        title: "Adjust Light",
        description: "Tilt the wand to control light and privacy levels.",
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
      "Cordless blind systems prioritize safety and ease of maintenance. Regular care ensures smooth operation and extends the life of your investment.",
    features: [
      {
        title: "Spring Mechanism",
        description:
          "Regular inspection of spring tension for safe and smooth operation.",
        image: "/svgs/child-safe.svg",
      },
      {
        title: "Bottom Rail Care",
        description:
          "Keep the bottom rail clean and check for proper alignment.",
        image: "/svgs/easy-cleaning.svg",
      },
      {
        title: "System Check",
        description:
          "Inspect the cordless mechanism for wear and proper function.",
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

export default cordlessBlinds;
