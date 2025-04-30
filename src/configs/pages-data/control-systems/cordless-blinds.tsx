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
    heading: "Why Cordless Blinds Might Be Perfect for You?",
    subHeading:
      "Cordless blinds combine elegance with safety– no dangling cords. Unlike conventional blinds, for a hazard-free and safe window treatment, perfect for homes with pets and children. A simple push and pull is needed to adjust the light control and privacy levels.",
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
    heading: "Key Features of Cordless Blinds",
    subHeading:
      "A perfect infusion of style, convenience, and safety– Cordless Window Blinds come with a hassle-free manual mechanism without sacrificing control over light and privacy. Their low-maintenance design and state-of-the-art safety features make them an ideal pick for parents and pet owners.",
    features: [
      {
        icon: TbDeviceRemote,
        title: "Enduring Performance",
        description: "Made with industry-grade material that will last.",
      },
      {
        icon: IoShieldCheckmarkOutline,
        title: "No Cord Blinds",
        description: "Sleek and contemporary look without hanging cords.",
      },
      {
        icon: IoAnalytics,
        title: "Fully Customizable",
        description: "Come in different cord sizes and materials.",
      },
      {
        icon: FaRegClock,
        title: "Sleek and Stylish",
        description: "Traditional yet stylish blinds with clutter-free aesthetics.",
      },
      {
        icon: PiVolleyballLight,
        title: "Enhanced Safety",
        description: "Added layer of protection for children and pets.",
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
    heading: "How It Works",
    subHeading: "Operating Cordless Blinds in 3 Simple Steps",
    steps: [
      {
        icon: <FaArrowUp />,
        title: "Position the Bottom Rail",
        description:
          "Pull the bottom rail up or down to place the blinds.",
        isFilled: true,
        image: "/images/white-blind.png",
      },
      {
        icon: <FaLock />,
        title: "Lock it Securely",
        description:
          "Use MET Sleeve & bottom safety lock to keep them in place.",
        isFilled: false,
        image: "/images/white-blind.png",
      },
      {
        icon: <FaSun />,
        title: "Control Light & Privacy",
        description: "Stop at any height for preferred privacy & lighting.",
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
      "Routine cleaning and maintenance prevents dust build up, wear & tear and allergens, ensuring Cordless Window Shades’ smooth operation and longevity. Additionally, it enhances air quality, keeps the aesthetics intact, and maintains the overall freshness, and style of the place.",
    features: [
      {
        title: "System Check",
        description:
          "Regularly check the spring mechanism for wear & tear.",
        image: "/svgs/child-safe.svg",
      },
      {
        title: "Spring Mechanism",
        description:
          "Ensure that spring tension remains intact for smooth operation.",
        image: "/svgs/easy-cleaning.svg",
      },
      {
        title: "Bottom Rail Check",
        description:
          "Clean the bottom rain and properly aligned",
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

export default cordlessBlinds;
