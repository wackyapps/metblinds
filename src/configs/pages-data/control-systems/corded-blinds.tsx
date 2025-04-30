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

const cordedBlinds = {
  slug: "corded-blinds",
  icon: "/icons/control-systems/corded-blinds.svg",
  title: "Corded Blinds",
  description:
    "Corded blinds are a type of blind that uses a cord to operate the blind.",
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
    heading: "Why Corded Blinds Might Be Perfect for You?",
    subHeading:
      "For a long time, Corded window blinds have been the top choice for homeowners, due to its straightforward design, reliable performance, and precise control over light and privacy. Our new-age blinded cords also feature advanced safety options like MET Sleeve protection and Child-lock safety system, making them ideal for various settings.",
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
    heading: "Key Features of Corded Blinds",
    subHeading:
      "Corded Blinds have it all– timeless elegance, lasting performance, and precision. They come with hassle-free manual operation while offering you top-notch control over light and privacy. Their low-cost maintenance and state-of-the-art safety features make them a practical choice for any interior setting.",
    features: [
      {
        icon: FaRegClock,
        title: "Enduring Performance",
        description: "Made with industry-grade material that will last.",
      },
      {
        icon: TbDeviceRemote,
        title: "Precise Control",
        description: "Adjust your blinds accurately for lighting and privacy.",
      },
      {
        icon: IoShieldCheckmarkOutline,
        title: "Fully Customizable",
        description: "Come in different cord sizes and materials.",
      },
      {
        icon: IoAnalytics,
        title: "Sleek and Stylish",
        description: "Traditional yet stylish blinds with strings that suits any decor.",
      },
      {
        icon: PiVolleyballLight,
        title: "Enhanced Safety",
        description: "Added lock protection for child safety",
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
          "This style of blinds lets you control the light with blackout or light-filtering fabric—perfect for full darkness or natural brightness. A great custom option for any home in Canada.",
         image: "/images/blinds/zebra-blind.png",
        buttonText: "Learn More",
        link: "/blinds/zebra-blinds",
      },
      {
        title: "Roller Shades",
        description:
          "These clean, minimalist roller shades offer privacy and style without clutter. Easy to use and clean, they roll up or down to control light in any space.",
        image: "/images/blinds/roller-shades-blind.png",
        buttonText: "Learn More",
        link: "/blinds/roller-shades",
      },
      {
        title: "Drapery",
        description:
          "Add color and personality to your home with custom drapery. Choose from rich fabrics like velvet, silk, and linen—perfect for both modern and traditional styles. Durable and stylish, our drapes resist dust, sun, and drafts.",
        image: "/images/blinds/drapery-blind.png",
        buttonText: "Learn More",
        link: "/blinds/drapery",
      },
      {
        title: "Trifold",
        description:
          "Save space with trifold shutters, featuring three panels that fold in half. Ideal for large windows, they offer a unique design and come in materials like wood or composite to match your style.",
        image: "/images/blinds/triflod-blind.png",
        buttonText: "Learn More",
        link: "/blinds/triflod",
      },
      {
        title: "Honeycomb Blinds",
        description:
          "A sleek and modern look at a budget-friendly price. Its versatile, moisture-resistant design makes it perfect for any room.",
       image: "/images/blinds/honey-comb-blind.png",
        buttonText: "Learn More",
        link: "/blinds/honeycomb-blinds",
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
        icon: <FaArrowUp />,
        title: "Position the Cord",
        description:
          "Pull the cord up or down to place the blinds where you need.",
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
        description: "Tilt for privacy & lighting preferences.",
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
      "Routine cleaning and maintenance prevents dust build up, wear & tear and allergens, ensuring blinds’ smooth operation and longevity. Additionally, it enhances air quality, keeps the aesthetics intact, and maintains the overall freshness, and style of the place.",
    features: [
      {
        title: "Child Lock",
        description:
          "Use the Child Safety lock to prevent accidents.",
        image: "/svgs/child-safe.svg",
      },
      {
        title: "Clean with Care",
        description:
          "Use a dry fabric or light vacuum for dust removal.",
        image: "/svgs/easy-cleaning.svg",
      },
      {
        title: "Regular Inspection",
        description: "Regularly check the cord tension to ensure durability.",
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

export default cordedBlinds;
