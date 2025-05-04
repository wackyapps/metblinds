import React from "react";
import { WiDaySunny } from "react-icons/wi";
import { MdSecurity, MdOutlineDesignServices } from "react-icons/md";
import { BsLightningChargeFill } from "react-icons/bs";

const honeycombBlinds = {
  slug: "honeycomb-blinds",
  icon: "/icons/blinds/honeycomb-blinds.svg",
  title: "Honeycomb Blinds",
  description:
    "Honeycomb blinds feature a unique cellular design that provides superior insulation and light control, making them perfect for energy-efficient homes.",

  /**
   * blinds banner
   */
  blindsBanner: {
    heading: "Honeycomb Blinds",
    subHeading:
      "Honeycomb blinds combine innovative cellular design with elegant aesthetics to provide superior insulation and light control for your home.",
    cta: "Shop Now",
    background: "/images/blinds/HoneycombBlinds/banner.jpg",
  },
  /**
   * why choose blinds slider
   */
  whyChooseBlindsSlider: {
    heading: "Why Choose Honeycomb Blinds",
    features: [
      {
        icon: <WiDaySunny />,
        title: "Superior Insulation",
        description: "Keep your home comfortable year-round",
        image: "/images/blinds/HoneycombBlinds/Superior Insulation.jpg",
      },
      {
        icon: <MdSecurity />,
        title: "Enhanced Privacy",
        description: "Perfect light filtering and privacy control",
        image: "/images/blinds/HoneycombBlinds/Enhanced Privacy.jpg",
      },
      {
        icon: <MdOutlineDesignServices />,
        title: "Modern Design",
        description: "Clean, contemporary appearance",
        image: "/images/blinds/HoneycombBlinds/Modern Design.jpg",
      },
      {
        icon: <BsLightningChargeFill />,
        title: "Energy Efficient",
        description: "Reduce heating and cooling costs",
        image: "/images/blinds/HoneycombBlinds/Energy Efficient.jpg",
      },
    ],
  },
  /**
   * key features
   */
 keyFeaures: {
    heading: "KEY FEATURES",
    //fff
    image: "public/images/blinds/HoneycombBlinds/features.jpg",
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
      "Select from our premium honeycomb fabrics to create the perfect window treatment for your space. Our cellular design provides superior insulation and light control.",
    blackoutHeading: "Blackout Fabrics",
    lightFilteringHeading: "Light Filtering Fabrics",
    blackoutFabrics: [
      "/images/contact-section-image-1.png",
      "/images/hardwares/hardware-1.png",
        "/banners/home-banner-1.png",
        "/images/hardwares/hardware-4.png",
    ],
    lightoutFabrics: [
   "/images/contact-section-image-1.png",
   "/images/hardwares/hardware-1.png",
     "/banners/home-banner-1.png",
     "/images/hardwares/hardware-4.png",
    ],
  },
  /**
   * choose hardware
   */
  chooseHardware: {
    heading: "Choose Your Hardware",
    subHeading:
      "Select from our range of hardware options to ensure your honeycomb blinds perfectly match your interior design.",
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
    image: "/images/blinds/HoneycombBlinds/how its works.jpg",
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
          "The honeycomb design is amazing! My energy bills have decreased significantly.",
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
        question: "What makes honeycomb blinds special?",
        answer:
          "Honeycomb blinds feature a unique cellular design that creates air pockets, providing superior insulation and energy efficiency compared to traditional blinds.",
      },
      {
        question: "Are honeycomb blinds good for energy savings?",
        answer:
          "Yes, honeycomb blinds are excellent for energy savings. Their cellular design helps maintain indoor temperature, reducing heating and cooling costs.",
      },
      {
        question: "Can honeycomb blinds be used in any room?",
        answer:
          "Yes, honeycomb blinds are versatile and suitable for any room. They're particularly effective in bedrooms, living rooms, and areas requiring temperature control.",
      },
      {
        question: "How do I clean honeycomb blinds?",
        answer:
          "Honeycomb blinds can be cleaned with a soft cloth or vacuum attachment. For deeper cleaning, we recommend professional cleaning services to maintain the cellular structure.",
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
        text: "Experience the perfect blend of style and functionality with our honeycomb blinds. Contact us today for a free consultation and let our experts help you choose the perfect blinds for your home. Call MET BLINDS now!",
      },
    ],
  },
};

export default honeycombBlinds;
