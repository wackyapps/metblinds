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
      "Roman shades infuse timeless elegance of drapes and functionality of blinds into one stylish window treatment. Its horizontal fold design gives your window a clean yet sophisticated look that blends with any interior style.",
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
        title: "Custom Light Control",
        description: "Control the level of natural lighting with numerous window blinds with fabric.",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <MdSecurity />,
        title: "Privacy Control",
        description: "With enhanced coverage, seamlessly adjust your privacy levels for the living room, bedroom, and office.",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <MdOutlineDesignServices />,
        title: "Timeless Elegance",
        description: "The classic design, tailored for both contemporary and vintage interiors.",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <BsLightningChargeFill />,
        title: "Uncluttered Design",
        description: "Neatly stack up when raised and lay smooth when lowered.",
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
      "No need to compromise on style—choose from a vast selection of fabric blinds and shades in various textures and colors to perfectly complement your interior.",
    blackoutHeading: "Blackout Fabrics",
    lightFilteringHeading: "Light Filtering Fabrics",
   blackoutFabrics: [
      {
        name: "Midnight Black",
        image: "/images/contact-section-image-1.png",
       textColor: "text-white",
      },
      {
        name: "Soft Gray",
        image: "/images/contact-section-image-1.png",
        textColor: "text-white",
      },
      {
        name: "Warm Sandstone",
        image: "/images/contact-section-image-1.png",
        textColor: "text-white",
      },
      {
        name: "Pure White",
        image: "/images/contact-section-image-1.png",
        textColor: "text-white",
      },
    ],
    lightoutFabrics: [
      { name: "Sheer Ivory", image: "/images/contact-section-image-1.png", textColor: "text-white" },
      {
        name: "Misty Blue",
        image: "/images/contact-section-image-1.png",
        textColor: "text-white",      },
      { name: "Cloudy Gray",  image: "/images/contact-section-image-1.png", textColor: "text-white" },
      { name: "Soft Beige",  image: "/images/contact-section-image-1.png", textColor: "text-white" },
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
        question: "What type of fabric is best for Roman shades?",
        answer:
          "Roman Shades work best with lightweight materials such as silk, linen, and cotton. These fabrics create elegant overlapping folds and reduce strain on the operating mechanism.",
      },
      {
        question: "Can I motorize the Roman Shades?",
        answer:
          "Absolutely. Roman Shades can be motorized for added convenience and can be operated via remote control, Google Home, Alexa, and other smart home systems.",
      },
      {
        question: "How long do Roman shades last?",
        answer:
          "With proper care and installation, high-quality Roman Shades can last between 12 to 15 years.",
      },
      {
        question: "Are Roman shades washable?",
        answer:
          "Roman shades made from durable fabrics like polyblends and cotton can be washed using cold water on a delicate cycle. Always follow fabric care instructions or consult a professional cleaner.",
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
        text: "Take window treatment to the next level with Custom Roman Shades. Schedule a free consultation and our expert will make a perfect recommendation suited to your interior aesthetics and style.",
      },
    ],
  },
};

export default romanShades;
