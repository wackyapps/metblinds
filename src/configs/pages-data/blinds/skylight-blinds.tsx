import React from "react";
import { WiDaySunny } from "react-icons/wi";
import { MdSecurity, MdOutlineDesignServices } from "react-icons/md";
import { BsLightningChargeFill } from "react-icons/bs";

const skylightBlinds = {
  slug: "skylight-blinds",
  icon: "/icons/blinds/skylight-blinds.svg",
  title: "Skylight Blinds",
  description:
    "Skylight blinds are specially designed for overhead windows, providing excellent light control and insulation for your skylights and roof windows.",

  /**
   * blinds banner
   */
  blindsBanner: {
    heading: "Skylight Blinds",
    subHeading:
      "For spaces with overhead windows, Skylight Blinds provides a good balance between privacy and natural lighting, while ensuring UV protection and energy efficiency.",
    cta: "Shop Now",
    background: "/images/blinds/SkylightBlinds/Banner.jpg",
  },
  /**
   * why choose blinds slider
   */
  whyChooseBlindsSlider: {
    heading: "Why Choose Skylight Blinds",
    features: [
      {
        icon: <WiDaySunny />,
          title: "Light Control",
        description: "Regulate the amount and direction of the sunlight, creating a comfortable and glare-free ambience all day.",
        image: "/images/blinds/SkylightBlinds/Light Control.jpg",
      },
      {
        icon: <MdSecurity />,
        title: "Optimal Privacy",
        description: "Maintain your privacy without sacrificing natural light, all thanks to the innovative Trifold design.",
        image: "/images/blinds/SkylightBlinds/Optimal Privacy.jpg",
      },
      {
        icon: <MdOutlineDesignServices />,
        title: "UV Protection",
        description: "Protect your floor, furniture, and valuables from harmful ultraviolet rays, which may cause discoloration.",
        image: "/images/blinds/SkylightBlinds/UV Protection.webp",
      },
      {
        icon: <BsLightningChargeFill />,
        title: "Energy Efficient",
        description: "Control indoor temperatures by reducing heat gain in summer, resulting in increased energy savings and lower cooling cost.",
        image: "/images/blinds/SkylightBlinds/Energy Efficient.jpg",
      },
    ],
  },
  /**
   * key features
   */
 keyFeaures: {
    heading: "KEY FEATURES",
    image: "/images/blinds/SkylightBlinds/features.jpg",
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
      "No more compromise with your style pick from a wide range of textures and colors to compliment your interior.",
    blackoutHeading: "Blackout Fabrics",
    lightFilteringHeading: "Light Filtering Fabrics",
    blackoutFabrics: [
      "/images/blinds/fabrics/skylight/dark/5.jpg",
      "/images/blinds/fabrics/skylight/dark/6.jpg",
      "/images/blinds/fabrics/skylight/dark/8.jpg",
      "/images/blinds/fabrics/skylight/dark/9.jpg",
      "/images/blinds/fabrics/skylight/dark/10.jpg",

   
    ],
    lightoutFabrics: [
      "/images/blinds/fabrics/skylight/light/1.jpg",
      "/images/blinds/fabrics/skylight/light/2.jpg",
      "/images/blinds/fabrics/skylight/light/3.jpg",
      "/images/blinds/fabrics/skylight/light/4.jpg",
      "/images/blinds/fabrics/skylight/light/7.jpg",
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
      "Enhance your experience with a motorized/ smart control system adjust your retractable blinds with a remote, voice control, or smartphone app.",
    buttonText: "Request  free Quote",
  },
  /**
   * blinds features
   */
  blindsFeatures: {
    heading: "How It Works?",
    image: "/images/blinds/SkylightBlinds/How It Works_.jpg",
    features: [
      {
        icon: "/svgs/easy-operation.svg",
        title: "Remote Control",
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
        userName: "John Smith",
        rating: 5,
        date: "2023-10-15",
        comment:
          "Perfect for my skylights. The remote control is so convenient!",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "Emma Wilson",
        rating: 4,
        date: "2023-11-20",
        comment: "Great quality and the installation was professional.",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "Michael Brown",
        rating: 5,
        date: "2023-11-05",
        comment: "Love how they control the light from above.",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "Sarah Chen",
        rating: 5,
        date: "2023-10-28",
        comment: "The motorized option is a game-changer. So convenient!",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "David Lee",
        rating: 4,
        date: "2023-10-22",
        comment: "Perfect for my sunroom. The UV protection is great.",
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
        question: "Do skylight blinds help with temperature control?",
        answer:
          "Yes. Skylight Blinds block the heat in summer and retain warmth in winter, controlling the temperature naturally.",
      },
      {
        question: "Are skylight blinds waterproof?",
        answer:
          "Yes, certain skylight blinds are made from moisture-resistant materials, making them perfect for humid spaces like bathrooms and kitchens.",
      },
      {
        question: "Can I motorize the Skylight Blinds?",
        answer:
          "Absolutely. (Motorized) Automatic skylight covers can be used via remote control, Google Home, Alexa, etc a perfect solution for hard-to-reach windows.",
      },
      {
        question: "How to cover a skylight without blinds?",
        answer:
          "If you don’t want to use blinds, drapes or curtains can be an ideal solution to cover the skylight.",
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
        text: "Add a touch of elegance to your home’s aesthetic with our Skylight Window Shades. Schedule a free consultation and our experts will make a perfect recommendation suited to your interior aesthetics and style.",
      },
    ],
  },
};

export default skylightBlinds;
