// importing icons
import { FaRegClock } from "react-icons/fa6";
import { TbDeviceRemote } from "react-icons/tb";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoAnalytics } from "react-icons/io5";
import { PiVolleyballLight } from "react-icons/pi";

const cordedBlinds = {
  slug: "corded-blinds",
  icon: "/icons/control-systems/corded-blinds.svg",
  title: "Corded Blinds",
  description:
    "Corded blinds are a type of blind that uses a cord to operate the blind.",

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
    heading: "Why Choose Corded Blinds?",
    subHeading:
      "Corded blinds are a classic and reliable choice for window coverings. With smooth manual operation and durable cord options, they offer precise light control and long-lasting performance. Our corded blinds come with MET Sleeve protection and a child-lock safety system, making them a safe option for homes with children and pets.",
    features: [
      {
        iconName: "FaRegClock",
        title: "Strong and durable manual control",
        image: "/images/contact-section-image-1.png",
      },
      {
        iconName: "FiSun",
        title: "Precise light and privacy control",
        image: "/images/banner-side-image-3.png",
      },
      {
        iconName: "FaShieldAlt",
        title: "Child-safe lock mechanism prevents hazards",
        image: "/images/contact-section-image-1.png",
      },
      {
        iconName: "CiWallet",
        title: "Budget-friendly and easy to maintain",
        image: "/images/contact-section-image-1.png",
      },
      {
        iconName: "FaRegCircle",
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
      "Corded control is compatible with multiple blind types, offering a traditional and effective solution.",
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
    subHeading: "Operating Corded Blinds in 3 Simple Steps",
    steps: [
      {
        icon: "FaArrowUp",
        title: "Adjust the Cord",
        description:
          "Pull the cord up or down to position the blinds as needed.",
        isFilled: true,
        image: "/images/white-blind.png",
      },
      {
        icon: "FaLock",
        title: "Lock in Place",
        description:
          "Secure the blinds with the MET Sleeve & bottom safety lock.",
        isFilled: false,
        image: "/images/white-blind.png",
      },
      {
        icon: "FaSun",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    features: [
      {
        title: "Child-Safe Design",
        description:
          "Corded blinds come with a built-in safety lock to prevent accidents.",
        image: "/svgs/child-safe.svg",
      },
      {
        title: "Easy Cleaning",
        description:
          "Wipe with a dry cloth or light vacuuming for dust removal.",
        image: "/svgs/easy-cleaning.svg",
      },
      {
        title: "Durability Check",
        description: "Inspect the cord tension regularly to avoid fraying.",
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

export default cordedBlinds;
