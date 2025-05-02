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
      "A contemporary window solution, offering a perfect balance between privacy and natural light, all while keeping you safe from harmful UV rays.",
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
        title: "UV Protection",
        description: "Protect your floor, furniture, and valuables from harmful ultraviolet rays, which may cause discoloration.",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <MdSecurity />,
        title: "Glare Reduction",
        description: "Enhance your comfort by minimizing harmful sunlight and screen reflections.",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <MdOutlineDesignServices />,
        title: "Maintain Outdoor View",
        description: "Keep your outdoor views intact with filtered incoming light, and create a cozy interior setting.",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <BsLightningChargeFill />,
        title: "Energy Efficient",
        description: "Control indoor temperatures by reducing heat gain in summer, resulting in increased energy savings and lower cooling cost.",
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
        textColor: "/images/contact-section-image-1.png",
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
        question: "Can you see through sunscreen blinds?",
        answer:
          "Yes. Sunscreen blinds not only retains the outside view but also allows natural lighting to enter your room.",
      },
      {
        question: "How much UV comes through blinds?",
        answer:
          "Solar Blinds with 1% openness block nearly 99% of the UV light, keeping the place safe from glare and heat.",
      },
      {
        question: "Do sunscreen blinds block heat?",
        answer:
          "Yes. Sunscreen Blinds filter the sunlight and block UV rays, reducing the heat, while still maintaining the natural lighting conditions.",
      },
      {
        question: "Do sunscreen blinds provide privacy at night?",
        answer:
          "Unfortunately no. Sunscreen Blinds become see-through if indoor lights are turned on. To avoid this, you can layer them with curtains.",
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
        text: "Add a touch of elegance to your home’s aesthetic with our new Sunscreen Blinds. Schedule a free consultation and our drapery shop experts will make a perfect recommendation suited to your interior aesthetics and style.",
      },
    ],
  },
};

export default sunscreenBlinds;
