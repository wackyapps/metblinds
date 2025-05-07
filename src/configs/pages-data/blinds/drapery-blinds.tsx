import React from "react";
import { WiDaySunny } from "react-icons/wi";
import { MdSecurity, MdOutlineDesignServices } from "react-icons/md";
import { BsLightningChargeFill } from "react-icons/bs";

const draperyBlinds = {
  slug: "drapery-blinds",
  icon: "/icons/blinds/drapery-blinds.svg",
  title: "Drapery Blinds",
  description:
    "Drapery blinds combine the elegance of traditional curtains with the functionality of modern blinds, offering a sophisticated window treatment solution.",

  /**
   * blinds banner
   */
  blindsBanner: {
    heading: "Drapery",
    subHeading:
      "A practical window solution for new age homes– bring the elegance of classic draperies and functionality of modern blinds together.",
    cta: "Shop Now",
    background: "/images/blinds/DraperyBlinds/banner.jpg",
  },
  /**
   * why choose blinds slider
   */
  whyChooseBlindsSlider: {
    heading: "Why Choose Drapery",
    features: [
      {
        icon: <WiDaySunny />,
        title: "Light Control",
        description: "The best of both worlds set the privacy and natural lighting to match your mood, while keeping a sleek, clutter-free look.",
        image: "/images/blinds/DraperyBlinds/Light Control.jpg",
      },
      {
        icon: <MdSecurity />,
        title: "Privacy Control",
        description: "Adjust your privacy levels with absolute coverage, ideal for living room, bedroom, and even home theatre.",
        image: "/images/blinds/DraperyBlinds/Privacy Control.jpg",
      },
      {
        icon: <MdOutlineDesignServices />,
        title: "HIgh End Design",
        description: "Drapery Blinds, where luxury meets the functionality. Customize your light/privacy with refined fabrics and premium features.",
        image: "/images/blinds/DraperyBlinds/HIgh End Design.jpg",
      },
      {
        icon: <BsLightningChargeFill />,
        title: "Energy Efficient",
        description: "Conserve energy by minimizing heat gain in summer and maintaining warmth during winter.",
        image: "/images/blinds/DraperyBlinds/Energy Efficient.jpg",
      },
    ],
  },
  /**
   * key features
   */   
 keyFeaures: {
    heading: "KEY FEATURES",
    image: "/images/blinds/DraperyBlinds/FEATURES.jpg",
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
      "/images/blinds/fabrics/drapery/dark/4.jpg",
      "/images/blinds/fabrics/drapery/dark/6.jpg",
      "/images/blinds/fabrics/drapery/dark/7.jpg",
      "/images/blinds/fabrics/drapery/dark/8.jpg",
      "/images/blinds/fabrics/drapery/dark/10.jpg",
      "/images/blinds/fabrics/drapery/dark/12.jpg",
      "/images/blinds/fabrics/drapery/dark/15.jpg",

   
    ],
    lightoutFabrics: [
      "/images/blinds/fabrics/drapery/light/1.jpg",
      "/images/blinds/fabrics/drapery/light/2.jpg",
      "/images/blinds/fabrics/drapery/light/3.jpg",
      "/images/blinds/fabrics/drapery/light/5.jpg",
      "/images/blinds/fabrics/drapery/light/9.jpg",
      "/images/blinds/fabrics/drapery/light/11.jpg",
      "/images/blinds/fabrics/drapery/light/13.jpg",
      "/images/blinds/fabrics/drapery/light/14.jpg",
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
    image: "/images/blinds/DraperyBlinds/How It Works_.jpg",
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
        userName: "Robert Wilson",
        rating: 5,
        date: "2023-10-15",
        comment:
          "The drapery blinds look absolutely stunning in my living room!",
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
        comment: "Love how they combine the best of both worlds.",
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
        comment: "Perfect for my bedroom. The privacy is great.",
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
        question: "What is the difference between blinds and drapes?",
        answer:
          "Blinds are typically made from hard materials like wood, PVC, or metal with vanes that tilt to control light. Drapes are soft fabric panels that hang from rods and offer a more flowing, decorative look.",
      },
      {
        question: " How can I clean and maintain my Drapery Blinds?",
        answer:
          "Just regular dusting with brush or light vacuuming will keep your drapes with blinds clean. For deeper cleaning, you can use a damp cloth with little detergent.",
      },
      {
        question: "Which is cheaper: blinds or drapes?",
        answer:
          "Blinds are generally more affordable due to lower material costs. However, the final price depends on the fabric, size, mechanism, and level of customization.",
      },
      {
        question: "How can I clean and maintain my Drapery Blinds?",
        answer:
          "Light cleaning can be done using a soft cloth, brush, or vacuum with a gentle upholstery attachment. For deeper stains, use a damp cloth with mild detergent or opt for professional cleaning services.",
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
        text: "Add a touch of elegance to your home’s aesthetic with our new Drapery Blinds. Schedule a free consultation and our drapery shop experts will make a perfect recommendation suited to your interior aesthetics and style.",
      },
    ],
  },
};

export default draperyBlinds;
