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

const manualWand = {
  slug: "manual-wand",
  title: "Manual Wand",
  icon: "/icons/control-systems/manual-wand.svg",
  description:
    "Manual wand control is a cordless option that uses a rotating wand to open and close your blinds.",
  image: "/images/corded-system.png",
  /**
   * control system banner
   */
  controlSystemBanner: {
    heading: "Discover Smart Control Systems",
    subHeading:
      "From a traditional corded mechanism to cutting-edge Smart Home integrations, we offer a wide range of control systems, tailored to your interior, style, and preferences. Pick your best fit!",
    buttonText: "Request free Quote",
    coverImage: "/banners/about-banner-img.png",
  },
  /**
   * why choose control slider data
   */
  whyChooseControlSlider: {
    heading: "Why Manual Wands Might Be Perfect for You?",
    subHeading:
      "A simple mechanism without motor or cords– Manual wand is a user-friendly yet effective window treatment, particularly for the elderly. There are no hanging wires, complex mechanisms, or high-maintenance cost, just clean blinds with modern appearance and top-notch reliability.",
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
    heading: "Key Features of Manual Wand",
    subHeading:
      "A perfect infusion of style, convenience, and safety– Manual Wand Control Blinds come with a hassle-free manual mechanism without sacrificing control over light and privacy. Their low-maintenance design and state-of-the-art safety features make them an ideal pick for parents and pet owners.",
    features: [
      {
        icon: FaRegClock,
        title: "Cost-effective Solution",
        description: "Affordable yet highly effective and stylish.",
      },
      {
        icon: TbDeviceRemote,
        title: "Reliable and Safe",
        description: "Hazard-free design is ideal for homes with pets and children.",
      },
      {
        icon: IoShieldCheckmarkOutline,
        title: "Easy to Operate",
        description: "Simple push/pull/twist manual blinds rod control, perfect for all ages.",
      },
      {
        icon: IoAnalytics,
        title: "Clutter-free Design",
        description: "A neat window design without dangling cords.",
      },
      {
        icon: PiVolleyballLight,
        title: "Customizable",
        description: "Comes in numerous cord materials and sizes.",
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
          "This style of blinds lets you control the light with blackout or light-filtering fabric—perfect for full darkness or natural brightness. A great custom option for any home in Canada.",
         image: "/images/blinds/zebra-blind.png",
        buttonText: "Learn More",
      },
      {
        title: "Roller Shades",
        description:
          "These clean, minimalist roller shades offer privacy and style without clutter. Easy to use and clean, they roll up or down to control light in any space.",
         image: "/images/blinds/roller-shades-blind.png",
        buttonText: "Learn More",
      },
      {
        title: "Solar Shades",
        description:
          "Solar blinds reduce glare, block harmful UV rays, and help keep your space cool and comfortable. They're a top choice for energy-efficient window shades.",
        image: "/images/blinds/solar-shades-blind.png",
        buttonText: "Learn More",
      },
      {
        title: "Drapery",
        description:
          "Add color and personality to your home with custom drapery. Choose from rich fabrics like velvet, silk, and linen—perfect for both modern and traditional styles. Durable and stylish, our drapes resist dust, sun, and drafts.",
        image: "/images/blinds/drapery-blind.png",
        buttonText: "Learn More",
      },
      {
        title: "Trifold",
        description:
          "Save space with trifold shutters, featuring three panels that fold in half. Ideal for large windows, they offer a unique design and come in materials like wood or composite to match your style.",
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
    heading: "Operating Mechanism",
    subHeading: "3-Step Guide to operate Manual Wand Control Blinds",
    steps: [
      {
        icon: <FaArrowUp />,
        title: "Twist the Wand",
        description:
          "To adjust light, rotate the manual wand.",
        isFilled: true,
        image: "/images/white-blind.png",
      },
      {
        icon: <FaLock />,
        title: "Push/Pull",
        description:
          "Push/pull the wand to position the blinds.",
        isFilled: false,
        image: "/images/white-blind.png",
      },
      {
        icon: <FaSun />,
        title: "Control Light & Privacy",
        description: "Choose the preferred angle for privacy & lighting.",
        isFilled: false,
        image: "/images/white-blind.png",
      },
    ],
  },
  /**
   * safety & maintenance data
   */
  safetyMaintenance: {
    heading: "Blinds Safety & Care",
    subHeading:
      "Routine cleaning and maintenance prevents dust build up, wear & tear and allergens, ensuring Manual Wand control system operates without hindrance. Regular check ups are essential to maintain safety and longevity of the system.",
    features: [
      {
        title: "Mechanism Care",
        description:
          "Make sure that the mechanism is clean and free from debris.",
        image: "/svgs/child-safe.svg",
      },
      {
        title: "Wand Inspection",
        description:
          "Regularly inspect wand connections and movement for uninterrupted operation.",
        image: "/svgs/easy-cleaning.svg",
      },
      {
        title: "General Check",
        description: "Examine wands and brackets for wear & tear and mispositioning.",
        image: "/svgs/durability-check.svg",
      },
    ],
  },
  /**
   * quote cta section
   */
  quoteCTASection: {
    heading: "Want Us To Help You Choose?",
    subHeading:
      "Need expert advice for your home or office? Reach out to use and our team will provide you with personalized recommendations tailored to your preference and style.",
    buttonText: "Request free Quote",
    background: "/banners/about-banner-img.png",
  },
};

export default manualWand;
