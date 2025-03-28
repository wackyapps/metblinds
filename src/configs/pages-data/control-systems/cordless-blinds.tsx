// importing icons
import { FaRegClock } from "react-icons/fa6";
import { TbDeviceRemote } from "react-icons/tb";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoAnalytics } from "react-icons/io5";
import { PiVolleyballLight } from "react-icons/pi";
import { FaShieldAlt } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";
import { CiWallet } from "react-icons/ci";
import { FaLock, FaSun, FaArrowUp } from "react-icons/fa";

const cordlessBlinds = {
  slug: "cordless-blinds",
  title: "Cordless Blinds",
  icon: "/icons/control-systems/cordless-blinds.svg",
  description:
    "Cordless blinds are a modern and safe alternative to traditional corded blinds, offering a clean look with simple manual operation.",
  image: "/images/corded-system.png",
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
        icon: <FaRegClock />,
        title: "Strong and durable manual control",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <FiSun />,
        title: "Precise light and privacy control",
        image: "/images/banner-side-image-3.png",
      },
      {
        icon: <FaShieldAlt />,
        title: "Child-safe lock mechanism prevents hazards",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <CiWallet />,
        title: "Budget-friendly and easy to maintain",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <FaRegCircleCheck />,
        title: "Available in PVC, fabric, and stainless steel cord options",
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
        icon: <FaArrowUp />,
        title: "Adjust the Cord",
        description:
          "Pull the cord up or down to position the blinds as needed.",
        isFilled: true,
        image: "/images/white-blind.png",
      },
      {
        icon: <FaLock />,
        title: "Lock in Place",
        description:
          "Secure the blinds with the MET Sleeve & bottom safety lock.",
        isFilled: false,
        image: "/images/white-blind.png",
      },
      {
        icon: <FaSun />,
        title: "Enjoy Precise Light Control",
        description: "Adjust the tilt for privacy & lighting preferences.",
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
