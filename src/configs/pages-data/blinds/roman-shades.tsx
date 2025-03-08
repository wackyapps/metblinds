import React from "react";
import { WiDaySunny } from "react-icons/wi";
import { MdSecurity, MdOutlineDesignServices } from "react-icons/md";
import { BsLightningChargeFill } from "react-icons/bs";

const romanShades = {
  slug: "roman-shades",
  icon: "/icons/blinds/roman-shades.svg",
  title: "Roman Shades",
  description:
    "Roman shades combine classic elegance with modern functionality, offering a sophisticated window treatment that folds up in neat pleats when raised.",

  /**
   * blinds banner
   */
  blindsBanner: {
    heading: "Roman Shades",
    subHeading:
      "Roman shades offer timeless elegance and practical functionality, creating a sophisticated look while providing excellent light control and privacy.",
    cta: "Shop Now",
    background: "/banners/about-banner-img.png",
  },
  /**
   * why choose blinds slider
   */
  whyChooseBlindsSlider: {
    heading: "Why Choose Roman Shades",
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
        title: "Classic Design",
        description: "Timeless aesthetic appeal",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <BsLightningChargeFill />,
        title: "Space Efficient",
        description: "Compact when raised",
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
      "Select from our premium collection of fabrics to create the perfect roman shades for your space. From sheer to blackout options, find the ideal solution for your needs.",
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
      "Select from our range of hardware options to ensure your roman shades perfectly match your interior design.",
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
   * choose control system
   */
  chooseControlSystem: {
    heading: "Choose Your Control System",
    subHeading:
      "Add motorization and/or smart AI voice controls to help automate your light control and simplify your life. Set scenes to enjoy your favourite weather and more!",
    buttonText: "Request  free Quote",
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
          "The roman shades look absolutely beautiful in my dining room. The quality is exceptional!",
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
          "Love how they fold up neatly. The motorized option is so convenient!",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "David Wilson",
        rating: 5,
        date: "2023-10-28",
        comment:
          "The installation was professional and the shades look stunning.",
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
        question: "What are the benefits of roman shades?",
        answer:
          "Roman shades offer elegant aesthetics, excellent light control, privacy, and space efficiency. They're also versatile and can be customized to match any interior style.",
      },
      {
        question: "Can roman shades be motorized?",
        answer:
          "Yes, roman shades can be motorized for added convenience. We offer both manual and motorized options to suit your needs.",
      },
      {
        question: "How do I clean roman shades?",
        answer:
          "Roman shades can be cleaned with a soft cloth or vacuum attachment. For deeper cleaning, we recommend professional cleaning services to maintain the fabric's quality.",
      },
      {
        question: "What is the installation process?",
        answer:
          "Our professional installation team will measure your windows, ensure perfect fit, and install your roman shades with precision and care.",
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
        text: "Transform your space with our elegant roman shades. Contact us today for a free consultation and let our experts help you choose the perfect shades for your home. Call MET BLINDS now!",
      },
    ],
  },
};

export default romanShades;
