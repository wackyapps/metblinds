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
      "Whether it’s your cozy personal space or high-end office, Double Roller Blinds offer a perfect blend of elegance, style, lighting, and privacy. A seamless integration of light-filtering and blackout fabrics– allowing you to adjust between natural brightness and complete privacy. With the dual-layer system, you can effortlessly control the lighting and privacy to suit your moodṣ and occasion.",
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
        description: "The best of both worlds– natural lighting during the day and pitch darkness during night time.",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <MdSecurity />,
        title: "Privacy Control",
        description: "Interplay between two fabric layers gives you the freedom to adjust your privacy levels for the living room, bedroom, and office.",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <MdOutlineDesignServices />,
        title: "Style with Functionality",
        description: "Up and Down Window Shades, where minimalism meets functionality. Customize your light/privacy with a corded, cordless, motorized, or smart integraṣtion control system.",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <BsLightningChargeFill />,
        title: "Energy Efficient",
        description: "Conserve energy by minimizing heat gain in summer and maintaining warmth during winter.",
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
        textColor: "text-[#464644]",
      },
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
        question: "Are Double Roller Blinds suitable for all types of windows?",
        answer:
          "Yes. The Double Roller Blinds blends well with nearly all types of window styles and sizes, including floor-to-ceiling, bay, and standard ones.",
      },
      {
        question: "What is the difference between single and double roller blinds?",
        answer:
          "A single roller blind has only one layer of fabric while double roller blinds have two layers– one for natural lighting and one for total blackout.",
      },
      {
        question: "How can I clean and maintain my double roller blinds?",
        answer:
          "Just regular dusting with brush or light vacuuming will keep your roller blinds clean. For deeper cleaning, you can use a damp cloth with a little detergent.",
      },
      {
        question: "Can I put 2 roller blinds together?",
        answer:
          "Absolutely. You can install two roller blinds in a window for better light control.",
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
        text: "ETake the lighting control to the next level with Double Roller Window Shades. Schedule a free consultation and our expert will make a perfect recommendation suited to your interior aesthetics and style.",
      },
    ],
  },
};

export default doubleRollerBlinds;
