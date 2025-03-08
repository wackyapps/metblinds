import React from "react";
import { WiDaySunny } from "react-icons/wi";
import { MdSecurity, MdOutlineDesignServices } from "react-icons/md";
import { BsLightningChargeFill } from "react-icons/bs";

const sunscreenBlinds = {
  slug: "sunscreen-blinds",
  icon: "/icons/blinds/sunscreen-blinds.svg",
  title: "Sunscreen Blinds",
  description:
    "Sunscreen blinds are designed to filter harsh sunlight while maintaining visibility, making them perfect for spaces where you want to reduce glare without losing the view.",

  /**
   * blinds banner
   */
  blindsBanner: {
    heading: "Sunscreen Blinds",
    subHeading:
      "Sunscreen blinds provide optimal protection against harsh sunlight while maintaining clear visibility, creating a comfortable and visually appealing environment.",
    cta: "Shop Now",
    background: "/banners/about-banner-img.png",
  },
  /**
   * why choose blinds slider
   */
  whyChooseBlindsSlider: {
    heading: "Why Choose Sunscreen Blinds",
    features: [
      {
        icon: <WiDaySunny />,
        title: "Glare Control",
        description: "Reduce harsh sunlight and glare",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <MdSecurity />,
        title: "UV Protection",
        description: "Protect against harmful UV rays",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <MdOutlineDesignServices />,
        title: "Clear View",
        description: "Maintain visibility while filtering light",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <BsLightningChargeFill />,
        title: "Energy Efficient",
        description: "Reduce cooling costs",
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
      "Select from our premium collection of sunscreen fabrics to create the perfect window treatment for your space. Our fabrics are specially designed to filter sunlight while maintaining visibility.",
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
      "Select from our range of hardware options to ensure your sunscreen blinds perfectly match your interior design.",
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
        userName: "David Wilson",
        rating: 5,
        date: "2023-10-18",
        comment: "Perfect for my home office. The glare reduction is amazing!",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "Sarah Chen",
        rating: 4,
        date: "2023-11-22",
        comment: "Great quality and the installation was professional.",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "Michael Anderson",
        rating: 5,
        date: "2023-11-08",
        comment: "Love how I can still see outside while reducing glare.",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "Lisa Martinez",
        rating: 5,
        date: "2023-10-30",
        comment: "The motorized option is a game-changer. So convenient!",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "James Brown",
        rating: 4,
        date: "2023-10-25",
        comment: "Perfect for my living room. The UV protection is great.",
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
        question: "What makes sunscreen blinds special?",
        answer:
          "Sunscreen blinds are specially designed to filter harsh sunlight and reduce glare while maintaining visibility, making them perfect for spaces where you want to protect against UV rays without losing the view.",
      },
      {
        question: "Can sunscreen blinds be motorized?",
        answer:
          "Yes, sunscreen blinds can be motorized for added convenience. We offer both manual and motorized options to suit your needs.",
      },
      {
        question: "How do I clean sunscreen blinds?",
        answer:
          "Sunscreen blinds can be cleaned with a soft cloth or vacuum attachment. For deeper cleaning, we recommend professional cleaning services to maintain the fabric's quality.",
      },
      {
        question: "What is the installation process?",
        answer:
          "Our professional installation team will measure your windows, ensure perfect fit, and install your sunscreen blinds with precision and care.",
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
        text: "Protect your space from harsh sunlight with our premium sunscreen blinds. Contact us today for a free consultation and let our experts help you choose the perfect blinds for your home. Call MET BLINDS now!",
      },
    ],
  },
};

export default sunscreenBlinds;
