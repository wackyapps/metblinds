import React from "react";
import { WiDaySunny } from "react-icons/wi";
import { MdSecurity, MdOutlineDesignServices } from "react-icons/md";
import { BsLightningChargeFill } from "react-icons/bs";

const dreamCurtains = {
  slug: "dream-curtains",
  icon: "/icons/blinds/dream-curtains.svg",
  title: "Dream Curtains",
  description:
    "Dream curtains combine elegant design with practical functionality, offering luxurious window treatments that enhance your home's aesthetic appeal.",

  /**
   * blinds banner
   */
  blindsBanner: {
    heading: "Dream Curtains",
    subHeading:
      "Dream curtains bring luxury and style to your windows, offering perfect light control and privacy while creating an elegant atmosphere in your home.",
    cta: "Shop Now",
    background: "/banners/about-banner-img.png",
  },
  /**
   * why choose blinds slider
   */
  whyChooseBlindsSlider: {
    heading: "Why Choose Dream Curtains",
    features: [
      {
        icon: <WiDaySunny />,
        title: "Elegant Light Control",
        description: "Perfect balance of light and privacy",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <MdSecurity />,
        title: "Enhanced Privacy",
        description: "Complete coverage when needed",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <MdOutlineDesignServices />,
        title: "Luxurious Design",
        description: "Elegant and sophisticated appearance",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <BsLightningChargeFill />,
        title: "Energy Efficient",
        description: "Reduce heating and cooling costs",
        image: "/images/contact-section-image-1.png",
      },
    ],
  },
  /**
   * key features
   */
  keyFeaures: {
    heading: "KEY FEATURES",
    features: [
      {
        title: "Material",
        description: "Fabric/Wood/Aluminum/Polyester",
      },
      {
        title: "Operation",
        description: "Manual, Cordless, Motorized, Smart Home Compatible",
      },
      {
        title: "Light Filtration",
        description: " Blackout, Light Filtering, UV Protection",
      },
      {
        title: "Smart Integration",
        description:
          "Compatible with Alexa, Google Home, Apple HomeKit (If applicable)",
      },
    ],
  },
  /**
   * choose your fabric
   */
  chooseYourFabric: {
    heading: "Choose Your Fabric",
    subHeading:
      "Select from our premium collection of fabrics to create the perfect dream curtains for your space. Our fabrics are specially designed for luxury and durability.",
    blackoutHeading: "Blackout Fabrics",
    lightFilteringHeading: "Light Filtering Fabrics",
    blackoutFabrics: [
      {
        name: "Moonlit Taupe",
        color: "linear-gradient(to bottom, #87847E, #4C4940)",
        textColor: "text-white",
      },
      {
        name: "Stormy Driftwood",
        color: "linear-gradient(to bottom, #88705B, #4E403D)",
        textColor: "text-white",
      },
      {
        name: "Desert Sandstone",
        color: "linear-gradient(to bottom, #C5BDA4, #5F5B4F)",
        textColor: "text-white",
      },
      {
        name: "Alabaster Mist",
        color: "linear-gradient(to bottom, #C4C1B0, #908E79)",
        textColor: "text-white",
      },
    ],
    lightoutFabrics: [
      { name: "Moonlit Taupe", color: "#838B92", textColor: "text-white" },
      {
        name: "Stormy Driftwood",
        color: "#D9DAD7",
        textColor: "text-[#464644]",
      },
      { name: "Desert Sandstone", color: "#464644", textColor: "text-white" },
      { name: "Alabaster Mist", color: "#C9B692", textColor: "text-white" },
    ],
  },
  /**
   * choose hardware
   */
  chooseHardware: {
    heading: "Choose Your Hardware",
    subHeading:
      "Select from our range of hardware options to ensure your dream curtains perfectly match your interior design.",
    hardwareOptions: [
      {
        image: "/images/hardwares/hardware-1.png",
        name: "Antique Brass",
      },
      {
        image: "/images/hardwares/hardware-2.png",
        name: "Satin Nickel",
      },
      {
        image: "/images/hardwares/hardware-3.png",
        name: "Oil Rubbed Bronze",
      },
      {
        image: "/images/hardwares/hardware-4.png",
        name: "Polished Chrome",
      },
    ],
  },
  /**
   * blinds features
   */
  blindsFeatures: {
    heading: "How It Works?",
    image: "/banners/home-banner-1.png",
    features: [
      {
        icon: "/svgs/easy-operation.svg",
        title: "Smooth Operation",
      },
      {
        icon: "/svgs/easy-to-manage.svg",
        title: "Easy Maintenance",
      },
      {
        icon: "/svgs/customizability.svg",
        title: "Customizable",
      },
      {
        icon: "/svgs/versatility.svg",
        title: "Versatile Design",
      },
    ],
  },
  /**
   * blinds testimonials
   */
  blindsTestimonials: {
    heading: "Customer Reviews",
    reviews: [
      {
        userImage: "/profile-image.jpg",
        userName: "Jennifer Smith",
        rating: 5,
        date: "2023-10-20",
        comment:
          "The dream curtains look absolutely beautiful in my dining room. The quality is exceptional!",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "Thomas Anderson",
        rating: 4,
        date: "2023-11-25",
        comment:
          "Perfect for my home office. The blackout fabric works amazingly well.",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "Maria Garcia",
        rating: 5,
        date: "2023-11-10",
        comment:
          "Love how they drape elegantly. The motorized option is so convenient!",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "David Wilson",
        rating: 5,
        date: "2023-10-28",
        comment:
          "The installation was professional and the curtains look stunning.",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "Sarah Johnson",
        rating: 4,
        date: "2023-10-22",
        comment: "Great quality and the fabric selection is extensive.",
      },
    ],
  },
  /**
   * FAQs
   */
  faqs: {
    heading: "FAQs",
    faqs: [
      {
        question: "What makes dream curtains special?",
        answer:
          "Dream curtains combine luxurious design with practical functionality, offering elegant window treatments that enhance your home's aesthetic appeal while providing excellent light control and privacy.",
      },
      {
        question: "Can dream curtains be motorized?",
        answer:
          "Yes, dream curtains can be motorized for added convenience. We offer both manual and motorized options to suit your needs.",
      },
      {
        question: "How do I clean dream curtains?",
        answer:
          "Dream curtains can be cleaned with a soft cloth or vacuum attachment. For deeper cleaning, we recommend professional cleaning services to maintain the fabric's quality.",
      },
      {
        question: "What is the installation process?",
        answer:
          "Our professional installation team will measure your windows, ensure perfect fit, and install your dream curtains with precision and care.",
      },
    ],
  },
  /**
   * info banner
   */
  infoBanner: {
    heading: "What We Have to Offer?",
    backgroundImage: "/images/home/info-banner-bg.png",
    points: [
      {
        text: "Transform your space with our luxurious dream curtains. Contact us today for a free consultation and let our experts help you choose the perfect curtains for your home. Call MET BLINDS now!",
      },
    ],
  },
};

export default dreamCurtains;
