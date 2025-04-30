import React from "react";
import { WiDaySunny } from "react-icons/wi";
import { MdSecurity, MdOutlineDesignServices } from "react-icons/md";
import { BsLightningChargeFill } from "react-icons/bs";

const trifoldBlinds = {
  slug: "trifold-blinds",
  icon: "/icons/blinds/trifold-blinds.svg",
  title: "Trifold Blinds",
  description:
    "Trifold blinds are versatile window coverings that fold into three sections, making them perfect for large windows and sliding glass doors.",

  /**
   * blinds banner
   */
  blindsBanner: {
    heading: "Trifold Blinds",
    subHeading:
      "Trifold Blinds – A perfect solution for sliding glass doors and large windows, maintaining privacy and light balance while preserving aesthetic appeal.",
    cta: "Shop Now",
    background: "/banners/about-banner-img.png",
  },
  /**
   * why choose blinds slider
   */
  whyChooseBlindsSlider: {
    heading: "Why Choose Trifold Blinds",
    features: [
      {
        icon: <WiDaySunny />,
        title: "Smart Light Management",
        description: "Get the amount of light you want– regulate the ambience for any time of the day.",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <MdSecurity />,
        title: "Optimal Privacy",
        description: "Maintain your privacy without sacrificing natural light, all thanks to the innovative Trifold design.",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <MdOutlineDesignServices />,
        title: "Modern Design",
        description: "The sleek folding panels compliment nearly every modern interior design, adding a touch of style.",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <BsLightningChargeFill />,
        title: "Space Saving",
        description: "With a compact folding mechanism, Trifold blinds occupy minimal space when opened, providing unhindered views.",
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
      "No more compromise with your style– pick from a wide range of textures and colors to compliment your interior.",
    blackoutHeading: "Blackout Fabrics",
    lightFilteringHeading: "Light Filtering Fabrics",
    blackoutFabrics: [
      {
        name: "Midnight Black",
        color: "linear-gradient(to bottom, #87847E, #4C4940)",
        textColor: "text-white",
      },
      {
        name: "Soft Gray",
        color: "linear-gradient(to bottom, #88705B, #4E403D)",
        textColor: "text-white",
      },
      {
        name: "Warm Sandstone",
        color: "linear-gradient(to bottom, #C5BDA4, #5F5B4F)",
        textColor: "text-white",
      },
      {
        name: "Pure White",
        color: "linear-gradient(to bottom, #C4C1B0, #908E79)",
        textColor: "text-white",
      },
    ],
    lightoutFabrics: [
      { name: "Sheer Ivory", color: "#838B92", textColor: "text-white" },
      {
        name: "Misty Blue",
        color: "#D9DAD7",
        textColor: "text-[#464644]",
      },
      { name: "Cloudy Gray", color: "#464644", textColor: "text-white" },
      { name: "Soft Beige", color: "#C9B692", textColor: "text-white" },
    ],
  },
  /**
   * choose hardware
   */
  chooseHardware: {
    heading: "Choose Your Hardware",
    subHeading:
      "Exquisite hardware material that matches your decor style, without sacrificing the luxury.",
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
      "Enhance your experience with a motorized/ smart control system– adjust your retractable blinds with a remote, voice control, or smartphone app.",
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
        title: "Easy Operation",
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
        userName: "Robert Wilson",
        rating: 5,
        date: "2023-10-15",
        comment:
          "Perfect for my sliding glass doors. The trifold design is so convenient!",
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
        userName: "Michael Brown",
        rating: 5,
        date: "2023-11-05",
        comment: "Love how they fold up neatly. Perfect for my large windows.",
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
        userName: "James Lee",
        rating: 4,
        date: "2023-10-22",
        comment: "Perfect for my patio doors. The privacy is great.",
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
        question: "Are trifold blinds suitable for triangular windows?",
        answer:
          "Yes. Our experts at Met Blinds can install premium Trifold blinds on your triangular-shaped window.",
      },
      {
        question: "What blinds are best for blocking noise?",
        answer:
          "Honeycomb blinds for sliding glass doors are the best for reducing the noise entering your room.",
      },
      {
        question: "Do Motorized trifold blinds use a lot of electricity?",
        answer:
          "No. motorized Trifold blinds are energy efficient and will not add significant units to your electricity bills.",
      },
      {
        question: "Do Trifold blinds fit on large windows?",
        answer:
          "Yes. Trifold blinds are perfect fit for large size windows, providing better light control. Privacy options, and a sleek appearance.",
      },
    ],
  },
  
  /**
   * info banner
   */
  infoBanner: {
    heading: "Ready to Transform Your Space?",
    backgroundImage: "/images/home/info-banner-bg.png",
    points: [
      {
        text: "Add a touch of elegance to your home’s aesthetic with our premium Trifold blinds. Schedule a free consultation and our experts will make a perfect recommendation suited to your interior aesthetics and style.",
      },
    ],
  },
};

export default trifoldBlinds;
