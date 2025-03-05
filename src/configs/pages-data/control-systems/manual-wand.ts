// importing icons
import { FaRegClock } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";
import { FaShieldAlt } from "react-icons/fa";
import { CiWallet } from "react-icons/ci";
import { FaRegCircleCheck } from "react-icons/fa6";
import { TbDeviceRemote } from "react-icons/tb";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoAnalytics } from "react-icons/io5";
import { PiVolleyballLight } from "react-icons/pi";
import { FaHandPointer, FaLock, FaSun } from "react-icons/fa";

const manualWand = {
  slug: "manual-wand",
  title: "Manual Wand",
  icon: "/icons/control-systems/manual-wand.svg",
  description:
    "Manual wand control system uses a simple wand mechanism to operate the blinds.",
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
    heading: "Why Choose Manual Wand Control?",
    subHeading:
      "Manual wand control systems offer a simple, reliable solution for operating blinds. With no cords or complex mechanisms, they provide easy-to-use functionality while maintaining a clean, modern appearance. Perfect for standard height windows and everyday use.",
    features: [
      {
        iconName: "FaRegClock",
        title: "Simple and intuitive operation",
        image: "/images/contact-section-image-1.png",
      },
      {
        iconName: "FiSun",
        title: "Precise light and privacy control",
        image: "/images/banner-side-image-3.png",
      },
      {
        iconName: "FaShieldAlt",
        title: "No exposed cords for safety",
        image: "/images/contact-section-image-1.png",
      },
      {
        iconName: "CiWallet",
        title: "Affordable and durable design",
        image: "/images/contact-section-image-1.png",
      },
      {
        iconName: "FaRegCircle",
        title: "Easy to maintain and repair",
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
      "Manual wand control is compatible with multiple blind types, offering a simple and reliable solution.",
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
    subHeading: "Operating Manual Wand Blinds in 3 Simple Steps",
    steps: [
      {
        icon: "FaHandPointer",
        title: "Grip the Wand",
        description:
          "Hold the wand firmly and rotate to raise or lower blinds.",
        isFilled: true,
        image: "/images/white-blind.png",
      },
      {
        icon: "FaLock",
        title: "Secure Position",
        description: "Stop rotating to lock blinds in desired position.",
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
      "Manual wand control systems are designed for durability and safety. Simple maintenance practices ensure long-lasting performance and reliable operation.",
    features: [
      {
        title: "Wand Safety",
        description:
          "Regular inspection of wand connections and movement for safe operation.",
        image: "/svgs/child-safe.svg",
      },
      {
        title: "Mechanism Care",
        description:
          "Keep the control mechanism clean and free from debris for smooth operation.",
        image: "/svgs/easy-cleaning.svg",
      },
      {
        title: "Durability Check",
        description: "Inspect wand and brackets for wear and proper alignment.",
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
  },
};

export default manualWand;
