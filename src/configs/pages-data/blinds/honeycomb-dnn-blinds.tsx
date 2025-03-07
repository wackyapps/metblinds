import React from "react";
import { WiDaySunny } from "react-icons/wi";
import { MdSecurity, MdOutlineDesignServices } from "react-icons/md";
import { BsLightningChargeFill } from "react-icons/bs";

const honeycombDnnBlinds = {
  slug: "honeycomb-dnn-blinds",
  icon: "/icons/blinds/honeycomb-dnn-blinds.svg",
  title: "Honeycomb DNN Blinds",
  description:
    "Honeycomb DNN blinds feature a unique double-layer cellular design that provides superior insulation and light control, making them perfect for energy-efficient homes.",

  /**
   * blinds banner
   */
  blindsBanner: {
    heading: "Honeycomb DNN Blinds",
    subHeading:
      "Honeycomb DNN blinds combine innovative double-layer cellular design with elegant aesthetics to provide superior insulation and light control for your home.",
    cta: "Shop Now",
    background: "/banners/about-banner-img.png",
  },
  /**
   * why choose blinds slider
   */
  whyChooseBlindsSlider: {
    heading: "Why Choose Honeycomb DNN Blinds",
    features: [
      {
        icon: <WiDaySunny />,
        title: "Superior Insulation",
        description: "Double-layer cellular design",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <MdSecurity />,
        title: "Enhanced Privacy",
        description: "Perfect light filtering and privacy control",
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
      "Select from our premium honeycomb fabrics to create the perfect window treatment for your space. Our double-layer cellular design provides superior insulation and light control.",
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
      "Select from our range of hardware options to ensure your honeycomb DNN blinds perfectly match your interior design.",
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
        title: "Easy Operation",
      },
      {
        icon: "/svgs/easy-to-manage.svg",
        title: "Low Maintenance",
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
        userName: "Emily Parker",
        rating: 5,
        date: "2023-10-18",
        comment:
          "The double-layer design is amazing! My energy bills have decreased significantly.",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "Michael Chang",
        rating: 4,
        date: "2023-11-22",
        comment:
          "Perfect for my living room. The light filtering is excellent.",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "Sophie Anderson",
        rating: 5,
        date: "2023-11-08",
        comment:
          "The cellular design is so innovative. Love how it keeps my home comfortable.",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "Daniel White",
        rating: 5,
        date: "2023-10-30",
        comment: "Great quality and the installation was professional.",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "Rachel Lee",
        rating: 4,
        date: "2023-10-25",
        comment: "The honeycomb blinds look beautiful and work perfectly.",
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
        question: "What makes honeycomb DNN blinds special?",
        answer:
          "Honeycomb DNN blinds feature a unique double-layer cellular design that creates air pockets, providing superior insulation and energy efficiency compared to traditional blinds.",
      },
      {
        question: "Are honeycomb DNN blinds good for energy savings?",
        answer:
          "Yes, honeycomb DNN blinds are excellent for energy savings. Their double-layer cellular design helps maintain indoor temperature, reducing heating and cooling costs.",
      },
      {
        question: "Can honeycomb DNN blinds be used in any room?",
        answer:
          "Yes, honeycomb DNN blinds are versatile and suitable for any room. They're particularly effective in bedrooms, living rooms, and areas requiring temperature control.",
      },
      {
        question: "How do I clean honeycomb DNN blinds?",
        answer:
          "Honeycomb DNN blinds can be cleaned with a soft cloth or vacuum attachment. For deeper cleaning, we recommend professional cleaning services to maintain the cellular structure.",
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
        text: "Experience the perfect blend of style and functionality with our honeycomb DNN blinds. Contact us today for a free consultation and let our experts help you choose the perfect blinds for your home. Call MET BLINDS now!",
      },
    ],
  },
};

export default honeycombDnnBlinds;
