import React from "react";
import { WiDaySunny } from "react-icons/wi";
import { MdSecurity, MdOutlineDesignServices } from "react-icons/md";
import { BsLightningChargeFill } from "react-icons/bs";

const doubleRollerBlinds = {
  slug: "double-roller-blinds",
  icon: "/icons/blinds/double-roller-blinds.svg",
  title: "Double Roller Blinds",
  description:
    "Double roller blinds combine two layers of fabric for ultimate versatility, allowing you to control both light and privacy independently.",

  /**
   * blinds banner
   */
  blindsBanner: {
    heading: "Double Roller Blinds",
    subHeading:
      "Double roller blinds offer the perfect combination of light control and privacy with two independent layers of fabric that can be adjusted separately.",
    cta: "Shop Now",
    background: "/banners/about-banner-img.png",
  },
  /**
   * why choose blinds slider
   */
  whyChooseBlindsSlider: {
    heading: "Why Choose Double Roller Blinds",
    features: [
      {
        icon: <WiDaySunny />,
        title: "Dual Light Control",
        description: "Independent control of light and privacy",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <MdSecurity />,
        title: "Maximum Privacy",
        description: "Complete privacy when needed",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <MdOutlineDesignServices />,
        title: "Modern Design",
        description: "Clean, contemporary appearance",
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
      "Select from our premium collection of fabrics to create the perfect double roller blinds for your space. Choose different fabrics for each layer to achieve your desired level of light control and privacy.",
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
      "Select from our range of hardware options to ensure your double roller blinds perfectly match your interior design.",
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
        title: "Dual Control",
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
        userName: "Robert Thompson",
        rating: 5,
        date: "2023-10-15",
        comment: "The dual control is amazing! Perfect for my living room.",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "Lisa Chen",
        rating: 4,
        date: "2023-11-20",
        comment: "Great quality and the installation was professional.",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "Michael Wilson",
        rating: 5,
        date: "2023-11-05",
        comment: "Love how I can control light and privacy separately.",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "Sarah Martinez",
        rating: 5,
        date: "2023-10-28",
        comment: "The motorized option is a game-changer. So convenient!",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "James Brown",
        rating: 4,
        date: "2023-10-22",
        comment: "Perfect for my bedroom. The blackout layer works great.",
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
        question: "What makes double roller blinds special?",
        answer:
          "Double roller blinds feature two independent layers of fabric that can be controlled separately, allowing you to adjust both light and privacy levels independently.",
      },
      {
        question: "Can double roller blinds be motorized?",
        answer:
          "Yes, double roller blinds can be motorized for added convenience. We offer both manual and motorized options to suit your needs.",
      },
      {
        question: "How do I clean double roller blinds?",
        answer:
          "Double roller blinds can be cleaned with a soft cloth or vacuum attachment. For deeper cleaning, we recommend professional cleaning services to maintain the fabric's quality.",
      },
      {
        question: "What is the installation process?",
        answer:
          "Our professional installation team will measure your windows, ensure perfect fit, and install your double roller blinds with precision and care.",
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
        text: "Experience the ultimate in light control with our double roller blinds. Contact us today for a free consultation and let our experts help you choose the perfect blinds for your home. Call MET BLINDS now!",
      },
    ],
  },
};

export default doubleRollerBlinds;
