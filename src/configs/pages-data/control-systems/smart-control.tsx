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

const smartControl = {
  slug: "smart-control",
  title: "Smart Control",
  icon: "/icons/control-systems/smart-control.svg",
  description:
    "Smart control system allows you to operate your blinds using smartphone apps, voice commands, and home automation systems.",
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
    heading: "Why Smart Control Might Be Perfect for You?",
    subHeading:
      "The Smart Control System revolutionizes window treatment automation for modern homes. Now, adjust your privacy and ambience using a smartphone app, voice command, or an existing Smart Home system. A must-have solution for those seeking ultimate convenience and control.",
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
    heading: "Key Features of Smart Control System",
    subHeading:
      "Take your window coverings to the next level with Smart Control System. Harness cutting-edge technology to dictate your lighting and privacy, simply by tapping your smartphone.",
    features: [
      {
        icon: TbDeviceRemote,
        title: "Smartphone App Support",
        description:
          "Adjust your blinds remotely using smartphone app",
      },
      {
        icon: IoShieldCheckmarkOutline,
        title: "Smart Home Compatible",
        description: "Control your blinds via Google Home, Alexa, Apple Home, etc",
      },
      {
        icon: IoAnalytics,
        title: "Custom Lighting Scenes",
        description: "Create various lighting scenes for different time and settings",
      },
      {
        icon: FaRegClock,
        title: "Automated Scheduling",
        description: "Create scheduled blind adjustments for light control.",
      },
      {
        icon: PiVolleyballLight,
        title: "Easy to Operate",
        description:
          "Voice Commands–Quick and effective control, from anywhere.",
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
    subHeading: "3-Step Guide to operate Smart Control Blinds",
    steps: [
      {
        icon: <FaArrowUp />,
        title: "Use Smartphone App",
        description:
          "Use smartphone app to adjust your blinds anytime anywhere.",
        isFilled: true,
        image: "/images/white-blind.png",
      },
      {
        icon: <FaLock />,
        title: "Voice Command",
        description:
          "Say the commands to control light and privacy hands-free.",
        isFilled: false,
        image: "/images/white-blind.png",
      },
      {
        icon: <FaSun />,
        title: "Smart Home Integration",
        description: "Connect your treatment to your favorite Smart Home system for enhanced control.",
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
      "Our Smart Control systems are highly secure and easy to maintain. Simply make sure you have the latest firmware/app updates on your smartphone or smart devices for optimal performance.",
    features: [
      {
        title: "Timely Updates",
        description:
          "Ensure your app/system has the latest firmware update.",
        image: "/svgs/child-safe.svg",
      },
      {
        title: "Watch the Battery Levels",
        description:
          "Track the battery levels for uninterrupted experience.",
        image: "/svgs/easy-cleaning.svg",
      },
      {
        title: "Secure Connections",
        description:
          "Use secure wireless protocols and encryptions.",
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

export default smartControl;
