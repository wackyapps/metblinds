import { BsCalendar2Check } from "react-icons/bs";
import { PiMedal } from "react-icons/pi";
import { GiSandsOfTime } from "react-icons/gi";
import { GiUpgrade } from "react-icons/gi";

export const homePage = {
  metaData: {
    title: "Home - Met Blinds",
    description:
      "Discover the best window blinds in Calgary. We offer a wide range of blinds, including zebra, roller, solar, motorized, and smart blinds. Personalize every detail with expert design consultants and high-performance materials built to last.",
  },
  /**
   * services locatoin section data
   */
  servicesLocation: {
    heading: "Custom Blinds in Canada",
    description:
      "Your home or office should be a place of comfort and happiness. Blinds, drapes, and shades can greatly influence its look and feel. With locations across Western Canada, Met Blinds offers custom solutions for even the most uniquely shaped windows and doors. Explore our range of fabrics, hardware, and control systems to find blinds tailored to your needs.",
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
      "Calgary homeowners — customize your window blinds and have them professionally installed in just 8–10 business days!",
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
    heading: "What Else",
    subHeading: "Makes Us Stand Out?",
    features: [
      {
        icon: BsCalendar2Check,
        title: "Added Warranties",
        description:
          "Zebra, roller, sunscreen, and tri-fold blinds have a 5-year fabric warranty. Dream curtains and honeycomb blinds come with 2 years. Motors and smart HUBs are covered for 5 years.",
      },
      {
        icon: PiMedal,
        title: "10 years warranty",
        description: "Every piece of hardware or component for Zebra blinds, rollers, sun screens, tri-folds, and side rails are covered for 10 years.",
        isHighlited: true,
      },
      {
        icon: GiSandsOfTime,
        title: "Top-Quality Construction",
        description:
          "With 100% aluminum casing and 100% polyester fabric, our blinds are top-quality, energy efficient, and have UV protection",
      },
      {
        icon: GiUpgrade,
        title: "Upgrades When You Want",
        description:
          "If you decide you want to switch things up and have new fabric installed, we can make this happen for you, anytime, at a discounted rate.",
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
   * production steps data for homepage
   */
  productionSteps: {
    heading: "WHY CHOOSE MET BLINDS?",
    subHeading: "As your custom blinds and shades provider, we ensure a transparent and thorough post-sale manufacturing process.",
    features: [
      {
        title: "Work Order Processing",
        description:
          "We process your order with precise instructions, including dimensions, materials, assembly, and delivery details, ensuring you get exactly what you want.",
      },
      {
        title: "Material Preparation",
        description:
          "Choose your fabric, hardware color, and system type. We custom-cut everything, adding final finishes like sanding or water resistance as needed.",
      },
      {
        title: "Component Assembly",
        description:
          "At the assembly stage, we add all components, including slats, roller mechanisms, louvres, caps, trims, and decorative elements to the hardware and fabric.",
      },
      {
        title: "Hardware Installation",
        description:
          "After adding the end caps, clutch, and control systems, we test everything to ensure proper functionality and add any additional hardware as needed.",
      },
      {
        title: "Quality Inspection",
        description:
          "Your blinds are inspected to ensure they meet the original specifications and tested for safety, ensuring excellent quality and safe use.",
      },
      {
        title: "Final Packaging & Delivery",
        description:
          "Once complete, your blinds or shades are securely packed to prevent damage and prepared for installation in your home or office.",
      },
    ],
  },
  /**
   * media spotlight section data for homepage
   */
  mediaSpotlight: {
    heading: "AS SEEN ON HGTV'S HOARDER HOUSE FLIPPERS",
    subHeading:
      "Met Blinds is the official sponsor for HGTV’s “Hoarder House Flippers” show. You will see our blinds in all the renovations. Our blinds will make your home look just as famous as the ones on TV!",
    buttonText: "Give us a call",
    background: "/images/home/media-spotlight-bg.png",
  },
  /**
   * data for our partners section
   */
  ourPartners: {
    heading: "AWARDS & RECOGNITIONS",
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
  /**
   * proud canadian flag
   */
  proudCanadianFlag: {
    heading: "PROUD CANADIAN BLINDS",
    buttonText: "GIVE US A CALL",
    buttonLink: "/contact",
  },
  /**
   * contact section data for home
   */
  contactSection: {
    heading: "Contact Us",
    subHeading:
      "Have any questions? Feel free to contact us at help@metblindsx.com or fill out the form.",
    image: "/images/contact-section-image-1.png",
  },
};
