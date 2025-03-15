import { BsCalendar2Check } from "react-icons/bs";
import { PiMedal } from "react-icons/pi";
import { GiSandsOfTime } from "react-icons/gi";
import { GiUpgrade } from "react-icons/gi";

type BannerType = {
  coverImage: string;
  heading: string;
  subheading?: string;
  description: string;
  buttonText: string;
  link: string;
  backgroundImage?: string;
}[];
export const homePage = {
  /**
   * homepage banner data
   */
  banners: [
    {
      backgroundImage: "/banners/home-banner-1.png",
      heading: "Leading Calgary Blinds Company!",
      description:
        "Met Blinds, your trusted Canadian blinds company in Calgary, Alberta, takes pride in transforming your living spaces with high-quality window coverings that seamlessly marry style and functionality.",
      buttonText: "Shop Sales",
      link: "/",
    },
    {
      backgroundImage: "/banners/home-banner-2.png",
      heading: "30% OFF SHADES",
      subheading: "Don’t Miss The Window to Saves!",
      description:
        "WE MANUFACTURE BLINDS IN CALGARY FOR ALBERTA HOMES & BUSINESSES. a variety of window shades and treatments that give you 100% privacy and add a modern elegant touch to your home.",
      buttonText: "Shop Sales",
      link: "/blinds",
      coverImage: "/images/banner-side-image-2.png",
    },
    {
      backgroundImage: "/banners/home-banner-3.png",
      heading: "Buy 8 motors & get a smart hub free",
      subheading: "Ends in 3 days",
      buttonText: "Shop Sales",
      link: "/blinds",
      coverImage: "/images/banner-side-image-3.png",
    },
  ] as BannerType,
  /**
   * services locatoin section data
   */
  servicesLocation: {
    heading: "Serving Your Windows",
    description:
      "You can visit our Calgary and Red Deer locations for custom window blinds installation. As part of our strategic growth plan, we are exploring opportunities to establish ourselves as a leading provider among window shade companies, with a focus on expanding our presence in Kelowna and Edmonton to better serve the Western Canadian market.",
    locations: [
      { name: "Calgary", link: "" },
      { name: "Cochrane", link: "" },
      { name: "Airdrie", link: "" },
      { name: "Red Deer", link: "" },
      { name: "Okotoks", link: "" },
      { name: "Medicine hat", link: "" },
      { name: "Canmore", link: "" },
      { name: "Strathmore", link: "" },
    ],
  },
  /**
   * blinds customizaton data
   */
  blindsCustomization: {
    heading:
      "CUSTOMIZE YOUR WINDOW BLINDS, CALGARY HOMEOWNERS, AND HAVE THEM INSTALLED WITHIN 8 - 10 BUSINESS DAYS!",
    subHeading: "BYOB (Build Your Own Blinds)",
    buttonText: "Request a Free Quote",
    background: "/images/home/custom-blind-bg.png",
    features: [
      {
        image: "/images/home/choose-style.svg",
        title: "Choose Your Style",
      },
      {
        image: "/images/home/choose-hardware.svg",
        title: "Choose Your Hardware",
      },
      {
        image: "/images/home/choose-fabric.svg",
        title: "Choose Your Fabric",
      },
      {
        image: "/images/home/choose-control.svg",
        title: "Choose Your Control System",
      },
    ],
  },
  /**
   * blind advantages data
   */
  blindsAdvantages: {
    heading: "PREMIUM WINDOW BLINDS IN CALGARY",
    subHeading: "THAT ENHANCE YOUR HOME",
    features: [
      {
        icon: BsCalendar2Check,
        title: "FREE ESTIMATES",
        description:
          "Get a no-obligation quote for your custom blinds at no cost.",
      },
      {
        icon: PiMedal,
        title: "10 years warranty",
        description: "Enjoy peace of mind with a durable 10-year warranty.",
        isHighlited: true,
      },
      {
        icon: GiSandsOfTime,
        title: "INSTALLED IN 8-10 BUSINESS DAYS",
        description:
          "Get a no-obligation quote for your custom blinds at no cost.",
      },
      {
        icon: GiUpgrade,
        title: "UPGRADE AS NEEDED",
        description:
          "Get a no-obligation quote for your custom blinds at no cost.",
      },
    ],
  },
  /**
   * blinds showcase  data for homepage
   */
  blindsShowcase: {
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
   * production steps data for homepage
   */
  productionSteps: {
    heading: "WHY MET BLINDS?",
    subHeading: "The Met Blinds Post-Sale Manufacturing Process",
    features: [
      {
        title: "Work Order Processing",
        description:
          "The work order is entered and fabricating instructions are prepared.",
      },
      {
        title: "Material Preparation",
        description:
          "Your chosen colour of aluminum and desired fabric are cut to size.",
      },
      {
        title: "Component Assembly",
        description:
          "The cut pieces of aluminum and fabric go to our assembly tables.",
      },
      {
        title: "Hardware Installation",
        description:
          "End caps, clutch and control systems are added to the aluminum and fabric.",
      },
      {
        title: "Quality Inspection",
        description:
          "Blinds are mounted on inspector machine for quality assurance.",
      },
      {
        title: "Final Packaging & Delivery",
        description:
          "Your beautiful custom blinds are packed and ready to be installed in your home!",
      },
    ],
  },
  /**
   * media spotlight section data for homepage
   */
  mediaSpotlight: {
    heading: "As seen on *HGTV’S* hoarder house flippers",
    subHeading:
      "Metbinds Calgary is the official sponsor of the show. Our blinds are used in all renovations",
    buttonText: "Give us a call",
    background: "/images/home/media-spotlight-bg.png",
  },
  /**
   * data for our partners section
   */
  ourPartners: {
    heading: "OUR PARTNERS",
    partners: [
      {
        image: "/images/logo-text.png",
      },
      {
        image: "/images/logo-text.png",
      },
      {
        image: "/images/logo-text.png",
      },
      {
        image: "/images/logo-text.png",
      },
      {
        image: "/images/logo-text.png",
      },
      {
        image: "/images/logo-text.png",
      },
      {
        image: "/images/logo-text.png",
      },
      {
        image: "/images/logo-text.png",
      },
    ],
  },
  // testimonial section  data for home
  testimonials: {
    heading: "THE TRUST WE HAVE EARNED",
    reviews: [
      {
        userImage: "/profile-image.jpg",
        userName: "Maria arnold",
        rating: 4,
        date: "2023-10-12",
        comment: "Great product, highly recommend!",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "John Smith",
        rating: 5,
        date: "2023-11-15",
        comment:
          "Excellent service and quality blinds. The installation team was very professional.",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "Sarah Johnson",
        rating: 5,
        date: "2023-11-01",
        comment:
          "Love my new motorized blinds! They work perfectly and look amazing.",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "Michael Chen",
        rating: 4,
        date: "2023-10-25",
        comment:
          "Very happy with the zebra blinds. Great quality and reasonable prices.",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "Emma Wilson",
        rating: 5,
        date: "2023-10-18",
        comment:
          "The smart blinds are a game changer! Customer service was outstanding.",
      },
    ],
  },
  /**
   * infobanner banner data for home
   */
  infoBanner: {
    heading: "What We Have to Offer?",
    backgroundImage: "/images/home/info-banner-bg.png",
    points: [
      {
        text: "Discover a premium collection of blinds, including zebra, roller, solar, motorized, and smart blinds—crafted for style and function. Personalize every detail with expert design consultants and high-performance materials built to last",
      },
      {
        text: "Exclusive luxury fabrics, patented and inspired by snakeskin, are available only at Met Blinds. Whether you seek elegance, energy efficiency, or UV protection, we have the perfect solution.",
      },
      {
        text: "Upgrade your home with the finest blinds in Calgary.",
        isBold: true,
      },
    ],
  },
  contactSection: {
    heading: "Contact Us",
    subHeading:
      "Have any questions? Feel free to contact us at help@metblindsx.com or fill out the form.",
    image: "/images/contact-section-image-1.png",
  },
};
