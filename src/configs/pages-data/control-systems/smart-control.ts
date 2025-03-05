// importing icons
import { FaRegClock } from "react-icons/fa6";
import { TbDeviceRemote } from "react-icons/tb";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoAnalytics } from "react-icons/io5";
import { PiVolleyballLight } from "react-icons/pi";

const smartControl = {
  slug: "smart-control",
  title: "Smart Control",
  icon: "/icons/control-systems/smart-control.svg",
  description:
    "Smart control system allows you to operate your blinds using smartphone apps, voice commands, and home automation systems.",
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
    heading: "Why Choose Smart Control?",
    subHeading:
      "Smart control systems bring the future of home automation to your window coverings. With smartphone apps, voice commands, and integration with popular smart home platforms, you can control your blinds from anywhere. Perfect for modern homes seeking convenience and energy efficiency.",
    features: [
      {
        iconName: "FaRegClock",
        title: "Remote control from anywhere",
        image: "/images/contact-section-image-1.png",
      },
      {
        iconName: "FiSun",
        title: "Automated scheduling and scenes",
        image: "/images/banner-side-image-3.png",
      },
      {
        iconName: "FaShieldAlt",
        title: "Secure wireless connectivity",
        image: "/images/contact-section-image-1.png",
      },
      {
        iconName: "CiWallet",
        title: "Energy-saving automation",
        image: "/images/contact-section-image-1.png",
      },
      {
        iconName: "FaRegCircleCheck",
        title: "Compatible with major smart home platforms",
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
      "Transform your home with our smart control systems. Seamlessly integrate your window coverings with modern technology for enhanced comfort and convenience.",
    features: [
      {
        icon: TbDeviceRemote,
        title: "Mobile App Control",
        description:
          "Manage your blinds from anywhere using our intuitive app.",
      },
      {
        icon: IoShieldCheckmarkOutline,
        title: "Secure Connectivity",
        description: "Advanced encryption and secure wireless protocols.",
      },
      {
        icon: IoAnalytics,
        title: "Smart Home Integration",
        description: "Works with Alexa, Google Home, and other platforms.",
      },
      {
        icon: FaRegClock,
        title: "Automated Scheduling",
        description: "Set up custom schedules for optimal light control.",
      },
      {
        icon: PiVolleyballLight,
        title: "Scene Creation",
        description:
          "Create and save custom lighting scenes for different moods.",
      },
    ],
  },
  /**
   * compatible blinds data
   */
  compatibleBlinds: {
    heading: "Compatible Blinds",
    subHeading:
      "Smart control is compatible with multiple blind types, offering a modern and connected solution.",
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
    subHeading: "Operating Smart Blinds in 3 Simple Steps",
    steps: [
      {
        icon: "FaMobileAlt",
        title: "Connect to App",
        description:
          "Download our app and connect your blinds to your home network.",
        isFilled: true,

        image: "/images/white-blind.png",
      },
      {
        icon: "FaCalendarAlt",
        title: "Set Up Automation",
        description: "Create schedules and scenes for automated control.",
        isFilled: false,
        image: "/images/white-blind.png",
      },
      {
        icon: "FaMicrophone",
        title: "Control Anywhere",
        description:
          "Use voice commands or the app to control your blinds from anywhere.",
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
      "Our smart control systems are designed with safety and ease of maintenance in mind. Regular updates and proper care ensure optimal performance and longevity.",
    features: [
      {
        title: "Secure Connectivity",
        description:
          "Advanced encryption and secure wireless protocols protect your smart blinds.",
        image: "/svgs/child-safe.svg",
      },
      {
        title: "System Updates",
        description:
          "Regular firmware updates keep your smart blinds secure and up-to-date.",
        image: "/svgs/easy-cleaning.svg",
      },
      {
        title: "Battery Management",
        description:
          "Monitor and maintain battery levels for uninterrupted operation.",
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

export default smartControl;
