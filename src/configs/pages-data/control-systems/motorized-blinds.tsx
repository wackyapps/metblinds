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

const motorizedBlinds = {
  slug: "motorized-blinds",
  title: "Motorized Blinds",
  icon: "/icons/control-systems/motorized-blinds.svg",
  description:
    "Motorized blinds allow for convenient operation at the touch of a button, eliminating the need for cords or wands.",
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
    heading: "Why Choose Motorized Blinds?",
    subHeading:
      "Motorized blinds provide the ultimate convenience in window covering control. With quiet, powerful motors and multiple control options, they're perfect for hard-to-reach windows or those seeking a modern, automated solution. Our motorized systems combine reliability with ease of use.",
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
