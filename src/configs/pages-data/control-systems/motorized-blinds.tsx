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
  image: "/images/controlsystem/motorizedblinds/1.jpg",
  /**
   * control system banner
   */
  controlSystemBanner: {
    heading: "Discover Motorized Blinds",
    subHeading:
      "From a traditional corded mechanism to cutting-edge Smart Home integrations, we offer a wide range of control systems, tailored to your interior, style, and preferences. Pick your best fit!",
    buttonText: "Request free Quote",
    coverImage: "/images/controlsystem/motorizedblinds/banner.jpg",
  },
  /**
   * why choose control slider data
   */
  whyChooseControlSlider: {
    heading: "Why Motorized Blind Control Might Be Perfect for You?",
    subHeading:
      "Discover the next generation of window coverings with our latest Motorized blind system. Combining state-of-the-art technology with seamless controls, it offers convenience and control like no other treatment. Whether using a remote control or your smartphone, the one-touch operation makes the experience second to none.",
    features: [
      {
        icon: <FaRegClock />,
        title: "Strong and durable manual control",
        image: "/images/controlsystem/motorizedblinds/1.jpg",
      },
      {
        icon: <FiSun />,
        title: "Precise light and privacy control",
        image: "/images/controlsystem/motorizedblinds/2.jpg",
      },
      {
        icon: <FaShieldAlt />,
        title: "Child-safe lock mechanism prevents hazards",
        image: "/images/controlsystem/motorizedblinds/3.jpg",
      },
      {
        icon: <CiWallet />,
        title: "Budget-friendly and easy to maintain",
        image: "/images/controlsystem/motorizedblinds/4.jpg",
      },
      {
        icon: <FaRegCircleCheck />,
        title: "Available in PVC, fabric, and stainless steel cord options",
        image: "/images/controlsystem/motorizedblinds/5.jpg",
      },
    ],
  },
  /**
   * production steps data
   */
  productionSteps: {
    heading: "Key Features of Motorized Blinds",
    subHeading:
      "The motorized electric blinds system is ideal for tranquil spaces like meditation and yoga centers, libraries, hospitals, and meeting rooms. With its high-end quiet motors and advanced smart controls, it stands out as the top pick for luxury homes and offices.",
    features: [
      {
        icon: TbDeviceRemote,
        title: "Remote Control Support",
        description:
          "Use remote control to adjust lighting from anywhere in the house.",
      },
      {
        icon: IoShieldCheckmarkOutline,
        title: "Smart Home Integration",
        description:
          "Control your blind with Smart Home programs and voice assistants.",
      },
      {
        icon: IoAnalytics,
        title: "Silent Operation",
        description:
          "A quiet and smooth motor operation, ideal for peaceful settings.",
      },
      {
        icon: FaRegClock,
        title: "Programmable Scheduling",
        description: "Create scheduled blind adjustments for light control.",
      },
      {
        icon: PiVolleyballLight,
        title: "Safety Features",
        description:
          "Packed with emergency stop and obstacle detection feature.",
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
    subHeading: "3-Step Guide to operate Motorized Blinds",
    steps: [
      {
        icon: <FaArrowUp />,
        title: "Use Remote Control",
        description:
          "Use your remote to adjust your blinds.",
        isFilled: true,
        image: "/images/controlsystem/motorizedblinds/6.jpg",
      },
      {
        icon: <FaLock />,
        title: "Smart Home Integration",
        description:
          "Connect your treatment to your favorite Smart Home system for enhanced control.",
        isFilled: false,
        image: "/images/controlsystem/motorizedblinds/7.jpg",
      },
      {
        icon: <FaSun />,
        title: "Automation",
        description: "Create automated schedules for privacy/light control.",
        isFilled: false,
        image: "/images/controlsystem/motorizedblinds/8.jpg",
      },
    ],
  },
  /**
   * safety & maintenance data
   */
  safetyMaintenance: {
    heading: "Blinds Safety & Care",
    subHeading:
      "Despite the added electronics and complex mechanism, Motorized Blinds System doesn’t demand extra care and maintenance. Regular checks are sufficient to maintain proper functionality and ensure extended life.",
    features: [
      {
        title: "Motor Check",
        description:
          "Keep an eye on motor performance to avoid overloading and failure.",
        image: "/svgs/child-safe.svg",
      },
      {
        title: "Track Inspection",
        description:
          "Clean the tracks regularly for seamless blinds movement.",
        image: "/svgs/easy-cleaning.svg",
      },
      {
        title: "Remote Maintenance",
        description:
          "Keep your remote control clean and dry, and replace batteries as needed.",
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

export default motorizedBlinds;
