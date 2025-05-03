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
    heading: "Honeycomb",
    subHeading:
      "Looking for light control with tranquility? Honeycomb blinds are for you. Its unique cellular design provides exceptional thermal insulation and noise control, making it an ideal choice for classrooms, meditation centers, or even cozy bedrooms.",
    cta: "Shop Now",
    background: "/images/blinds/HoneycombDNNBlinds/Banner.jpg",
  },
  /**
   * why choose blinds slider
   */
  whyChooseBlindsSlider: {
    heading: "Why Choose Honeycomb DNN Blinds",
    features: [
      {
        icon: <WiDaySunny />,
        title: "Thermal Insulation",
        description: "Honeycomb design traps the air within its cells, creating a thermal barrier for temperature control.",
        image: "/images/blinds/HoneycombDNNBlinds/Thermal Insulation.avif",
      },
      {
        icon: <MdSecurity />,
        title: "Contemporary Aesthetics",
        description: "The modern and sleek appearance blends well with nearly all types of interiors, making it a good choice for living room, office, and bedroom.",
        image: "/images/blinds/HoneycombDNNBlinds/Contemporary Aesthetics.jpg",
      },
      {
        icon: <MdOutlineDesignServices />,
        title: "Sound Absorption",
        description: "Unique cellular design absorbs the soundwaves, resulting in minimized outside noise like traffic, street, neighbors, etc.",
        image: "/images/blinds/HoneycombDNNBlinds/Sound Absorption.jpg",
      },
      {
        icon: <BsLightningChargeFill />,
        title: "Energy Efficiency",
        description: "Maintain consistent indoor temperature throughout the year and save energy.",
        image: "/images/blinds/HoneycombDNNBlinds/Energy Efficiency.jpg",
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
        title: "Premium Material",
        description: "Choose between various fabric blends, PVC, wood, and aluminum",
      },
      {
        title: "Custom Light Adjustment",
        description: "Light filtering, total blackout, UV protection",
      },
      {
        title: "Smart Integration",
        description: "Control the blinds through Google Home, Alexa, and Apple HomeKit",
      },
      {
        title: "Versatile",
        description:
          "Manual, cordless, motorized, or SmartHome compatibility",
      },
    ],
  },
  /**
   * choose your fabric
   */
  chooseYourFabric: {
    heading: "Choose Your Fabric",
    subHeading:
      "No need to compromise on style—choose from a vast selection of fabric blinds and shades in various textures and colors to perfectly complement your interior.",
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
      "Premium hardware finishes that complement your space—luxury included.",
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
    heading: "Ready to Transform Your Space?",
    subHeading:
      "Experience total privacy and insulation with our honeycomb blinds. Schedule a free consultation and our expert will make a perfect recommendation suited to your interior aesthetics and style.",
    buttonText: "Request  free Quote",
  },
  /**
   * blinds features
   */
  blindsFeatures: {
    heading: "How It Works?",
    image: "/images/blinds/HoneycombDNNBlinds/how its works_.avif",
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
        question: "Can you see through honeycomb blinds at night?",
        answer:
          "No, honeycomb blinds provide excellent privacy, and they are not see-through, even with indoor lights on.",
      },
      {
        question: "How long do honeycomb blinds last?",
        answer:
          "Depending on the usage and maintenance, honeycomb blinds may last for 8-12 years.",
      },
      {
        question: "How can I clean and maintain my honeycomb blinds?",
        answer:
          "Dust regularly, spot clean with mild detergent, and avoid harsh chemicals to maintain fabric and mechanisms for a long time.",
      },
      {
        question: "Which are better roller shades or honeycomb shades?",
        answer:
          "Honeycomb shades are better for thermal/sound insulation, while roller shades offer simplicity and overall comfort.",
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
